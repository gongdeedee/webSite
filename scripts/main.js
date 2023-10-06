let mybtn=document.querySelector('button')
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Hello!World!, ' + myName;
    }
  }
  mybtn.onclick=function(){
    setUserName();
  }