const dice = document.getElementById("dice");


async function getText(file) {
    let myObject = await fetch(file);
    let myText = await myObject.json();
    document.getElementById("advice").innerHTML = myText.slip.advice;
    document.getElementById("advice-number").innerHTML = `advice # ${myText.slip.id}`;
    console.log(myText.slip.advice);
  }

dice.addEventListener('click', () => {
    getText("https://api.adviceslip.com/advice");
})

