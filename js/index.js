var emailId = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(emailId);
    console.log(password);
   function validate(){
    var emailId = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(emailId);
    console.log(password);
       if(emailId && password){
        firebase.auth().signInWithEmailAndPassword(emailId, password).then(function(data){
            console.log('inner then call');
            window.location.href= 'html files/home1.html';
        }).catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
        });
       }else{
        alert('please enter a email and password') 
       }
   }

function newUser(){
    console.log('new user call');
    window.location.href= 'html files/registration.html';
}