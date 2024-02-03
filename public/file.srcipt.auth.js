// นาย จิรายุ หนูกิจ   6420503493  น้อง ก้อง

const auth = firebase.auth();                 /* [เติม code ที่นี่] */  
const firestore = firebase.firestore();                   /* [เติม code ที่นี่] */ 

var user = auth.currentUser;





function Register() {
  var email = document.getElementById("emailField").value;
  var pass = document.getElementById("passField").value;
  var username = document.getElementById("userField").value;
  console.log(email)
  console.log(pass)

  auth.createUserWithEmailAndPassword(email, pass)
    .then((userCredential) => {

      user = userCredential.user;
      var UID = user.uid
      firestore.collection("user").doc(UID).set({
        Email : emailField.value,
        UID : user.uid,
        user : username,
        password : passField.value,

      })
      alert("Successfully Registered with " + (email))
      console.log("Successfully Registered with " + (email) )
      
    })

  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("error " + errorCode + " : " + errorMessage);
  });
  
}




function Login() {
  console.log("feel")
  var email = document.getElementById("emailField").value; /// ตัวแปร pass จะเก็บข้อมูล String จากกล่องข้อความ ที่มี ID emailField
  var pass = document.getElementById("passField").value; /// ตัวแปร pass จะเก็บข้อมูล String จากกล่องข้อความ ที่มี ID passField

  auth.signInWithEmailAndPassword(email, pass)
    .then((userCredential) => {
      user = userCredential.user;
       var UID = user.uid;
       
       console.log("Successfully Sign in")
       console.log("UID : "+UID)
       
       firestore.collection("user").doc(UID).get().then((doc)=> {
        if(doc.exists){
          alert("Successfully Sign in")
          var email_com = doc.data().Email
          var uid = doc.data().UID
          var user = doc.data().user
          localStorage.setItem("email", email_com)
          localStorage.setItem("UID", uid)
          localStorage.setItem("USER", user)
          console.log("success")
          openhomepage()
        }
        
      else{
        console.log("does not exist")
      }
      })
       }).catch(()=>{console.log("flat")})
    
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log("error " + errorCode + " : " + errorMessage);
    });
}


function Logout() {
  auth.signOut() //<<< นี่คือคำสั่ง Logout
  .then(() => {
    alert("Successfully Sign out")
    console.log("Successfully Sign out")
          var email_com = ""
          var uid = ""
          var user = ""
          localStorage.setItem("email", email_com)
          localStorage.setItem("UID", uid)
          localStorage.setItem("USER", user)
          openhomepage()
})
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log("error"+ errorCode + " : " + errorMessage);
  });
 } 


 function openpage(){
  window.location.href = 'Register.html'
 }

 function back(){
  window.location.href = 'login.html'
 }


 function openhomepage(){
  window.location.href = 'page home.html' 
 }