let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/cat.jpeg') {
      myImage.setAttribute ('src','images/dog.jpeg');
    } else {
      myImage.setAttribute ('src','images/cat.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter "cat" or "dog".');
    if(myName === 'cat') {
      myImage.setAttribute ('src','images/cat.jpeg')
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }



myButton.onclick = function() {
    setUserName();
  }