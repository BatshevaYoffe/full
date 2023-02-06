function signUpBtnClick(){

    var name = document.getElementById('username');
    var pw = document.getElementById('password');
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if(name.value.length == 0){
        alert('Please fill in user name');

    }else if(pw.value.length == 0){
        alert('Please fill in password');

    }else if(name.value.length == 0 && pw.value.length == 0){
        alert('Please fill in user name and password');

    }else if(pw.value.length > 8){
        alert('Max of 8');

    }else if(!pw.value.match(numbers)){
        alert('please add 1 number');

    }else if(!pw.value.match(upperCaseLetters)){
        alert('please add 1 uppercase letter');

    }else if(!pw.value.match(lowerCaseLetters)){
        alert('please add 1 lovercase letter');

    }else{

        var users=localStorage.getItem('users');
        if(!users){
            users = '[]';
        }
        users=JSON.parse(users);
        users.push[{username:name.value,password:pw.value}];
        users=localStorage.setItem(JSON.stringify(users));

        alert('Your account has been created');
    }
}