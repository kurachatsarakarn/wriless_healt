const db = firebase.firestore()
var UID_data = localStorage.getItem('UID')

console.log(UID_data)



db.collection("profile").doc(UID_data).get()
          .then(function (doc) {
            if(doc.exists){
                let bmi = parseInt(doc.data().bmi);
                openPage(bmi)
                    
            }
            else{ 
              console.log("does not exist")
              
            }

          })
          .catch(function(error){
            console.log("error",error)
          })

function openPage(a) {
             bmi = parseFloat(a)
            console.log(bmi)
            if(bmi < 18.5)
            {
                window.location.href = 'thin.html'
            }
            if(bmi >= 18.5 && bmi < 22.9)
            {
                window.location.href = 'normal.html'
                
            }
            if(bmi > 23 && bmi <= 24.9)
            {
                window.location.href = 'normal.html'
               
            }
            if(bmi >= 25 && bmi < 29.9)
            {
                window.location.href = 'fat.html'
                
            }
            if(bmi > 30)
            {
                window.location.href = 'fat.html'
                
            }
            
        }