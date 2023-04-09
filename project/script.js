import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { collection, getDocs, addDoc, Timestamp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"
import { query, orderBy, limit, where, onSnapshot } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-firestore.js"


// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyD6eSkYIASo2-1aC9rSu2XZMyoORiH_1eQ",
    authDomain: "complaint-register-b02af.firebaseapp.com",
    projectId: "complaint-register-b02af",
    storageBucket: "complaint-register-b02af.appspot.com",
    messagingSenderId: "249194659341",
    appId: "1:249194659341:web:7ec13140042e302895df44",
    measurementId: "G-YCF0CNPV5G"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

try {
  const docRef = await addDoc(collection(db, "users"));
  console.log("Document written with ID: ", docRef.roll);
} catch (e) {
  console.error("Error adding document: ", e);
}
const output = document.querySelector("#app");

try {
    const querySnapshot = await getDocs(collection(db, "users"));
let outuptHtml = "";
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => `,doc.data().first);
      outuptHtml += doc.data().first;
    });
output.innerHTML = outuptHtml;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
<script>
// When the user clicks on <div>, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
</script>

function validate() {  
	var result = "";	
		
	result += validateEmail();
	result += validatePassword();
	
	
	if (result == "") return true;
	
	alert("Validation Result:\n\n" + result);
	return false;	
}



function validatePassword() {
	var password = valueOf("password");
	
	
	if (password.length <= 6) 
		return "Password should be at least 6 characters.\n";
	
	
    }
    
    function validateEmail() {
        var email = valueOf("email");
        
        
        if (email.indexOf('@') == -1) 
            return "Email should be a valid address.\n";
        
        
    }
    function valueOf(email) {
        return document.getElementsByName(email)[0].value;
    }
    
    