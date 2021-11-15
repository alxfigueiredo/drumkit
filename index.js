
var buttonsArray = document.querySelectorAll(".drum");

buttonsArray.forEach(elem =>
{
  elem.addEventListener("click", function ()
  {
    playSound(this.textContent);
    buttonAnimation(this.textContent);
  });
});

document.addEventListener("keydown", function()
{
  playSound(event.key);
  buttonAnimation(event.key);
});

function playSound(char)
{
  switch (char) {
    case "w":
    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
    break;
    case "a":
    var audio = new Audio("sounds/tom-2.mp3");
    audio.play();
    break;
    case "s":
    var audio = new Audio("sounds/tom-3.mp3");
    audio.play();
    break;
    case "d":
    var audio = new Audio("sounds/tom-4.mp3");
    audio.play();
    break;
    case "j":
    var audio = new Audio("sounds/snare.mp3");
    audio.play();
    break;
    case "k":
    var audio = new Audio("sounds/crash.mp3");
    audio.play();
    break;
    case "l":
    var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
    break;
    default:
  }
}

function buttonAnimation(currentKey)
{
  document.querySelector("." + currentKey).classList.toggle("pressed");
  setTimeout(function()
  {
    document.querySelector("." + currentKey).classList.toggle("pressed");
  }, 100);
}
