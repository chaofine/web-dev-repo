// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello Mozilla!'

// document.querySelector('html').onclick = function(){
//     alert("Welcom to Mozilla!");
// }


var myImage = document.querySelector('img');

myImage.onclick = function(){
    var mySrc = myImage.getAttribute('src');
    if (mySrc == 'images/lemon.png') {
        myImage.setAttribute('src','images/th.jpeg');
    }else{
        myImage.setAttribute('src', 'images/lemon.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function(){
    setUserName();
}

function setUserName(){
    var myName = prompt('Plz enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcom ' + myName +' to Mozilla';
}

if (!localStorage.getItem('name')) {
    setUserName();
}else{
    var storedName = localStorage.getItem('name');
    myHeading.innerHTML = 'Mozilla is cool, '+storedName;
}