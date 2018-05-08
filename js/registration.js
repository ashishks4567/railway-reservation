function userRegistration()
{
    console.log('create user call');
    var email = document.getElementById('emailId').value;
    var username = document.getElementById('username').value; 
    var password = document.getElementById('password').value;
    var cpassword = document.getElementById('cpassword').value;
    var phoneNo = document.getElementById('mobileno').value;
    if(emai && username && password && cpassword && phoneNo){
    if(password != cpassword){
        alert('your password is not same');
    }else{
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(data){
        var database = firebase.database().ref('users');
        var emailadd = email.replace(".","!")
        database.child(emailadd).set({
           username : username,
            mobileno : phoneNo
        })
        alert('user successfully registered');
        window.location.href = '../index.html';
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
      });
    }
}else{
        alert('please enter the correct value');
    }
      
}