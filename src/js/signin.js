const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorEmail = document.querySelector('#errorEmail');
const errorPassword = document.querySelector('#errorPassword');
const btnLogin = document.querySelector('#btn-login')
const regex_email = /[a-zA-Z0-9]+\@+[a-zA-Z]+\.+[a-zA-Z]{2,3}/

btnLogin.addEventListener('click',function(e){
    e.preventDefault();
    if(email.value ==""){
        errorEmail.innerHTML ="Vui Lòng nhập Email"
        email.style.border = "1px solid red"
        return false;
    } else if(!regex_email.test(email.value)){
        errorEmail.innerHTML ="Vui Lòng nhập đúng định dạng của Email"
        email.style.border = "1px solid red"
        return false;
    } else{
        errorEmail.innerHTML =""
        email.style.border ="1px solid #37A9CD"
    }
    if(password.value ==""){
        errorPassword.innerHTML = "Vui lòng nhập Password";
        password.style.border = "1px solid red"
        return false;
    }else if(password.value.length < 5){
        errorPassword.innerHTML = "Vui lòng nhập Password lớn hơn 5";
        password.style.border = "1px solid red"
        return false;
    } else{
        errorPassword.innerHTML =""
        password.style.border ="1px solid #37A9CD"
    }
    alert("Thông tin bạn vừa nhập là Email: "+email.value+" Password: "+password.value)
    return true;
})