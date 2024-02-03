const db = firebase.firestore()
const CloudDB = db.collection("profile")
var UID_data = localStorage.getItem('UID')
console.log(UID_data)


var updbtn = document.getElementById("Updbtn")
var next = document.getElementById('next');
var black = document.getElementById('black');

updbtn.addEventListener("click", Update_filds_inDoc)
black.onclick = openprofliePage;
next.onclick = openuploadPage;

async function Update_filds_inDoc() {
    var radioID = document.getElementById("b1").value;
	var radioInfo = document.getElementById("b2").value;
    let a = 1
    if(document.getElementById("b1").checked){
        var Gender = "male";
        var p ="Mr. "
    }
    else if(document.getElementById("b2").checked){
        var Gender = "Female";
        var p ="Ms. "
    }
    //age
    var date = new Date();
    var YYYY = document.getElementById("YYYY").value;
    var age = date.getFullYear()-parseInt(YYYY);
    
    //bmi
    var ht = document.getElementById("hight").value;
    var bw = document.getElementById("wight").value;
    var ans = parseInt(bw)/((parseInt(ht)/100)*(parseInt(ht)/100));    
    
    CloudDB.doc(UID_data).set({
        "firstname" : first.value ,
        "lastname" : last.value ,
        "hight" : hight.value ,
        "Wight" : wight.value,
        "age" : age,
        "Gender":Gender,
        "bmi": ans.toFixed(2),
        "p": p
        
    })
        
    console.log("success")
    alert("success")
   
    

}
function openuploadPage() {
    window.location.href = 'upload.html'
}

function openprofliePage() {
    window.location.href = 'profile.html'
}