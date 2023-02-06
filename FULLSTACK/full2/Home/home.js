/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}
check_local();
function check_local(){
   
    if(localStorage.hasOwnProperty()){
        data=localStorage.getItem('username');
        //document.querySelector("#username").innerHTML = `Hello ${data.}!`
    }
}

function games(number){
  if(number>2){
    alert('The game is still under development');
  }
}


