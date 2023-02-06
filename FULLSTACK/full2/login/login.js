//checking
var user = {}
function check(){
    var storedName = localStorage.getItem('username');
    var storedPw = localStorage.getItem('pw');
    console.log(storedName);
    console.log(storedPw);
    user = {storedName,storedPw}
    var userName = document.getElementById('username');
    var userPw = document.getElementById('password');
    var userRemember = document.getElementById("rememberMe");
    if(localStorage.hasOwnProperty(userName)&&localStorage.hasOwnProperty(userPw)){
        alert('אני פה');

    }
    if(userName.value == storedName && userPw.value == storedPw){
        alert('You are logged in.');
        window.open("../Home/home.html")
    
    }else{
        alert('Error on login');
    }
}