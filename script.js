let container = document.querySelector('#intro');
let paragraph = document.querySelector('p');
let btn = document.querySelector('button');

let colors = ["Black", "White", "Pink", "Aqua", "Blue", "Yellow", "Green", "Red",  "Brown", "Burgundy", "Plum", "Violet", "Peru", "Gold", "Amber"]

btn.addEventListener('click', function(){
  let random = colors[Math.floor(Math.random()*(colors.length-1))];
  document.body.style.backgroundColor = random;
  
  paragraph.innerText = "This Background is Color " + random;
  
  if(random === "Black"){
    paragraph.style.color = "white"
  } else {
    paragraph.style.color = "black"
  }
})