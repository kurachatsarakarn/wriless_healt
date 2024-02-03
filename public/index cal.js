var firebaseConfig = {
    apiKey: "AIzaSyAhJHe7LU9frdL-19Xx9SwqzGuWzXfjYl8",
    authDomain: "cal-diary-6cbdd.firebaseapp.com",
    databaseURL: "https://cal-diary-6cbdd-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "cal-diary-6cbdd",
    storageBucket: "cal-diary-6cbdd.appspot.com",
    messagingSenderId: "924341667057",
    appId: "1:924341667057:web:0cedcdfbed784b54809550",
    measurementId: "G-3WGFS787Z4"
};
firebase.initializeApp(firebaseConfig);


const db=firebase.firestore();
const table=document.querySelector('#tbresult')
const form=document.querySelector('#addForm')
var user  = localStorage.getItem('USER')
var UID_data = localStorage.getItem('UID')

db.collection('caldate').where('users','==',user).get().then((snapshot)=>{
    snapshot.forEach(doc=>{
        showData(doc);
    });
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    db.collection('caldate').add({
        users:user,
        UID:UID_data,
        date:form.date.value,
        cal:document.getElementById('answer').innerHTML
    });
});

function showData(doc){
    var row=table.insertRow(-1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    var cell5=row.insertCell(4);
    cell1.innerHTML=user;
    cell2.innerHTML=UID_data;
    cell3.innerHTML=doc.data().date;
    cell4.innerHTML=doc.data().cal;
    let btn=document.createElement('button');
    btn.textContent='ลบข้อมูล';
    btn.setAttribute('class','btn btn-danger');
    btn.setAttribute('data-id',doc.id);
    cell5.appendChild(btn);
    

    btn.addEventListener('click',(e)=>{
        let id=e.target.getAttribute('data-id');
        db.collection('caldate').doc(id).delete();
    });

    
}
