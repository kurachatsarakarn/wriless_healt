var firebaseConfig = {
  apiKey: "AIzaSyAu-8N9Fq-v-xF5JaF-ebZ5mCRHb4MatwM",
    authDomain: "test-d8298.firebaseapp.com",
    databaseURL: "https://test-d8298-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-d8298",
    storageBucket: "test-d8298.appspot.com",
    messagingSenderId: "422439659559",
    appId: "1:422439659559:web:9ed67a2c97510c8e398602",
    measurementId: "G-M1NYR6PKR3"
};
firebase.initializeApp(firebaseConfig);

const db = firebase.database();

const username = localStorage.getItem('USER');

function sendMessage(e) {
  e.preventDefault();

  // get values to be submitted
  const timestamp = Date.now();
  const messageInput = document.getElementById("message-input");
  const message = messageInput.value;

  // clear the input box
  messageInput.value = "";

  //auto scroll to bottom
  document
    .getElementById("messages")
    .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

  // create db collection and send in the data
  db.ref("messages/" + timestamp).set({
    username,
    message,
  });
}

document.getElementById("message-form").addEventListener("submit", sendMessage);

const fetchChat = db.ref("messages/");
fetchChat.on("child_added", function (snapshot) {
  const messages = snapshot.val();
  const message = `<li class=${
    username === messages.username ? "sent" : "receive"
  }><span>${messages.username}: </span>${messages.message}</li>`;
  // append the message on the page
  document.getElementById("messages").innerHTML += message;
});