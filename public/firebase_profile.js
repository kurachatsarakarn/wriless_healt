//auth
var UID_data = localStorage.getItem('UID')
console.log(UID_data)


//code img
var storageRef = firebase.storage().ref();

var myimg = document.getElementById('myimg');



storageRef.child(`images/${UID_data}`).getDownloadURL().then((url) => {
    myimg.src = url;
});

//code text
const db = firebase.firestore()



db.collection("profile").doc(UID_data).get()
          .then(function (doc) {
            if(doc.exists){
             var p = doc.data().p
              document.getElementById('first').innerHTML = p + doc.data().firstname;
              document.getElementById('last').innerHTML = doc.data().lastname;
              hight.value = doc.data().hight + " cm";
              wight.value = doc.data().Wight + " kg";
              document.getElementById('gender').innerHTML = doc.data().Gender;
              age.value = doc.data().age + " year";
              document.getElementById('bmi').innerHTML = doc.data().bmi;
            }
            else{ 
              console.log("does not exist")
              
            }

          })
          .catch(function(error){
            console.log("error",error)
          })
var email = document.getElementById("email")
var username = document.getElementById("username")
 
db.collection("user").doc(UID_data).get()
          .then(function (doc) {
            if(doc.exists){
                email.value = doc.data().Email;
                username.value = doc.data().user;

            }
            else{
              console.log("does not exist")
              console.log("f")
            }

          })
          .catch(function(error){
            console.log("error",error)
          })

           





