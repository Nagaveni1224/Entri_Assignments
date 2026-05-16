let form=document.getElementById("signupForm");
let nameInput=document.getElementById("name");
let emailInput=document.getElementById("email");
let passwordInput=document.getElementById("password");
let confirmPasswordInput=document.getElementById("confirmPassword");
let message=document.getElementById("message");

form.addEventListener("submit",function(event){
    event.preventDefault();
    let name=nameInput.value.trim();
    let email=emailInput.value.trim();
    let password=passwordInput.value.trim();
    let confirmPassword=confirmPasswordInput.value.trim();
    let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if(
        name===""||
        email===""||
        password===""||
        confirmPassword===""
    ){ 
        message.innerHTML="All fields are required";
        message.style.color="red";
        return;
    }
    if(!email.match(emailPattern)){
        message.innerHTML="Enter a valid email address";
        message.style.color="red";
        return;
    }
    if(password.length<6){
        message.innerHTML="Password must be at least 6 characters";
        message.style.color="red";
        return;
    }
    if(password!==confirmPassword){
        message.innerHTML="Passwords do not match";
        message.style.color="red";
        return;
    }
    message.innerHTML="Form Submitted Successfully";
    message.style.color="green";
    form.reset();
    setTimeout(()=>{
    message.innerHTML="";
},2000);
});
