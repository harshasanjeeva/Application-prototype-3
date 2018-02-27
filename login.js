$('.message a').click(function(){
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
 });
 
function validate(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" || password == ""){
        alert ("Please enter valid login details");
        return false;
    } else{
        return true;
    }
}