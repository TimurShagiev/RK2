let buttonPush = document.querySelector('#buttonPush')
let errorName = document.querySelector('#errorName')
let errorEmail = document.querySelector('#errorEmail')
let errorStudent = document.querySelector('#errorStudent')
let errorPassword = document.querySelector('#errorPassword')
var accept1 = false
var accept2 = false
var accept3 = false 

buttonPush.addEventListener('click', check)

// function check(){
//     let nameValue = document.querySelector('#name').value
//     if (nameValue.length == 0){
//         errorName.innerHTML = "<p>Пожалуйста, введите своё имя</p>"
//     }else{
//         errorName.innerHTML = ""
//         accept1 = true
//     }
//     let emailValue = document.querySelector('#email').value
//     if (emailValue.length == 0){
//         errorEmail.innerHTML = "Пожалуйста, введите свой Email"
//     }else{
//         errorEmail.innerHTML = ""
//         accept2 = true
//     }

//     if (accept1 == true && accept2 == true){
//         console.log("check")
//         window.location.href = "http://127.0.0.1:5500/index.html"
//     }
// }

function check(){
    event.preventDefault()
    var nameValue = document.querySelector('#name').value;
    if(nameValue.length == 0){
        errorName.innerHTML = "<p>Пожалуйста, введите своё имя</p>"
        localStorage.clear();
    }else{ 
        accept1 = true 
    }
    var emailValue = document.querySelector('#email').value;
    if(emailValue.length == 0){
        errorEmail.innerHTML = "<p>Пожалуйста, введите свой Email</p>"
        localStorage.clear();
    }else{ 
        accept2 = true 
    }
    var passwordValue = document.querySelector('#password').value;
    if(passwordValue.length == 0){
        errorPassword.innerHTML = "<p>Пожалуйста, введите свой пароль</p>"
        localStorage.clear();
    }else{ 
        accept3 = true 
    }
    if (accept1 == true && accept2 == true && accept3 == true){
        console.log("check")
        window.location.href = "http://127.0.0.1:5500/index.html"
    }
    

    var users = {
        name: nameValue,
        email: emailValue,
        password: passwordValue
    };
    
    var json = JSON.stringify(users);
    localStorage.setItem('users.json', json);
}