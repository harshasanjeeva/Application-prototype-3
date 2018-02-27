function validate(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var repassword = document.getElementById("repassword").value;
    
    var nameRegex = /^[a-zA-Z0-9]+$/;
    var validfirstUsername = username.match(nameRegex);
    if (validfirstUsername == null){
        alert("Your first name is not valid. Only characters A-Z, a-z and '-' are  acceptable.");
        document.getElementById("username").focus();
        return false;
    } else{
        return true;
    }
}