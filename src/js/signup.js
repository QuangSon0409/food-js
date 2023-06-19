const email = document.querySelector("#email");
const errorEmail = document.querySelector("#errorEmail");
const fullname = document.querySelector("#fullname");
const errorFullname = document.querySelector('#errorFullname')
const password = document.querySelector("#password")
const errorPassword = document.querySelector('#errorPassword')
const rePassword = document.querySelector('#Re-password')
const errorRepassword =document.querySelector('#errorRe-Password')
const btnLogin = document.querySelector('#btn-login')
const regex_email = /[a-zA-Z0-9]+\@+[a-zA-Z]+\.+[a-zA-Z]{2,3}/;
btnLogin.addEventListener('click',function(e){
    e.preventDefault();
    if(email.value == ""){
        errorEmail.innerHTML = "Vui lòng nhập Email"
        email.style.border = "1px solid red"
        return false;
    }else if(!regex_email.test(email.value)){
        errorEmail.innerHTML = "nhập không đúng định dạng "
        email.style.border = "1px solid red"
        return false;
    } else {
        errorEmail.innerHTML = "";
        email.style.border ="1px solid #37A9CD"
    }
    if(fullname.value == ""){
        errorFullname.innerHTML = "Vui lòng nhập Fullname"
        fullname.style.border = "1px solid red"
        return false;
    } else if(fullname.value.length < 5){
        errorFullname.innerHTML = "Fullname phải lớn hơn 5 ký tự"
        fullname.style.border = "1px solid red"
        return false;
    } else{
        errorFullname.innerHTML = "";
        fullname.style.border = "1px solid #37A9CD"
    }
    if(password.value == ""){
        errorPassword.innerHTML = "Vui lòng nhập Password"
        password.style.border = "1px solid red"
        return false;
    }else if(password.value.length < 5){
        errorPassword.innerHTML = "Password phải lớn 5 ký tự"
        password.style.border = "1px solid red"
        return false;
    } else{
        errorPassword.innerHTML = "";
        password.style.border = "1px solid #37A9CD"
    }
    if(rePassword.value == ""){
        errorRepassword.innerHTML = "Vui lòng nhập Re-Password"
        rePassword.style.border = "1px solid red"
        return false;
    } else if(rePassword.value != password.value){
        errorRepassword.innerHTML = "nhập tên trùng với Password"
        rePassword.style.border = "1px solid red"
        return false;
    } else{
        errorRepassword.innerHTML = "";
        rePassword.style.border = "1px solid #37A9CD"
    }
    alert("Thông tin bạn vừa nhập là Email: "+email.value+
        " Fullname: "+fullname.value+
        " Password: "+password.value+
        " Re-Password: "+rePassword.value)   
    return true;
})
