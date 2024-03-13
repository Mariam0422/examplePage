
const button = document.querySelector(".formButton");
const namee = document.querySelector(".name");
console.log(namee);
const email = document.querySelector(".email");
console.log(email);
const message = document.querySelector(".message")
console.log(message);
const arr =[];
button.addEventListener("click", (event) =>{   
   

 const obj = {
    name: namee.value,
    email: email.value,
    message: message.value
 }
 arr.push(obj);
 console.log(arr);
 
 namee.value = ""
 email.value = "";
 message.value = "";
})
