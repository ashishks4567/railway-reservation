
function logoutUser() {
    firebase.auth().signOut().then(function() {
        window.location.href= '../index.html';        
      }, function(error) {
        console.log(error);
      });
    }

    function registeredUser() {
        var fromStation = document.getElementById('fromStation').value;
        var toStation = document.getElementById('toStation').value;
        var doj = document.getElementById('date').value;
        var cls = document.getElementById('class').value;
        var name = document.getElementById('name').value;
        var age = document.getElementById('age').value;
        var payment = document.getElementById('payment').value;
        var email = document.getElementById('email').value;
        var phoneNo = document.getElementById('mobileNo').value;

        if(fromStation && toStation && doj && cls && name && age && payment && email && phoneNo){
                document.getElementById('trainDetail').style.display = 'block';
                document.getElementById("r1").innerHTML = fromStation;
                document.getElementById("r2").innerHTML = toStation;
                var emailadd = email.replace(".","!");
                var obj={
                    fromStation:fromStation,
                    toStation:toStation,
                    doj :doj,
                    class : cls,
                     travlerName :name,
                    age : age,
                    payment:payment,
                    email:emailadd,
                    phoneNo:phoneNo
                }
            }else{
                alert('please correctly all the fields');
            }  
        return obj;
    } 


   function bookTicket(){
       var obj = registeredUser();
       console.log(obj);

       var database = firebase.database().ref('ticketHistory');
       var emailadd = obj.email;
       console.log(emailadd);
        database.child(emailadd).set({
            fromStation: obj.fromStation,
            toStation: obj.toStation,
            doj :obj.doj,
            class :obj.class,
            name :obj.travlerName,
            age : obj.age,
            payment:obj.payment,
            email:obj.email,
            phoneNo:obj.phoneNo
        }).then(function(error){
            if(error){
                console.log(error.message);
            }else{ 
                console.log('else call');
             document.getElementById('trainTicket').style.display = 'block';
             document.getElementById("fromTicket").innerHTML ='to Staion: ' +obj.fromStation;
             document.getElementById("toTicket").innerHTML = 'from Station:'+obj.toStation;
            }
        })
    }
