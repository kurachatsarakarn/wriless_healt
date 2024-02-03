var storageRef = firebase.storage().ref();
var files = [];
var reader = new FileReader();
var namebox = document.getElementById('put');
var myimg = document.getElementById('myimg');
var UpBtn = document.getElementById('upbtn');
var next = document.getElementById('next');
var black = document.getElementById('black');
var UID_data = localStorage.getItem('UID')
console.log(UID_data)       


UpBtn.onclick = UploadProcess;
next.onclick = openprofliePage;
black.onclick = openformPage;

namebox.onchange = e => {
    files = e.target.files;
    reader.readAsDataURL(files[0]);
}


reader.onload = function () {
    namebox = files[0];
    myimg.src = reader.result;
}


function UploadProcess() {
    var storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`images/${UID_data}`).put(namebox);
    alert("Upload Success"); 
     
}

function openprofliePage() {
    window.location.href = 'profile.html'
}
function openformPage() {
    window.location.href = 'form.html'
}