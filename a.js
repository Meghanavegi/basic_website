let myBut = document.querySelector('button');
let myHead = document.querySelector('h1');

function setUserName(){
    let myName = prompt("Enter your name:");
    if(!myName){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        myHead.innerHTML = "Mozilla is cool, " + myName;
    }
}
if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHead.innerHTML = "Mozilla is cool, " + myName;
}
myBut.onclick = function(){
    setUserName();
}