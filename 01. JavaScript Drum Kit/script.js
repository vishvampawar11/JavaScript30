function playSoundByKey(event) {
  const audio = this.document.querySelector(
    `audio[data-key="${event.keyCode}"]`
  );
  const key = this.document.querySelector(`.key[data-key="${event.keyCode}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function playSoundByClick(event) {
  const key = event.path[1];
  const dataKey = key.getAttribute("data-key");
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(event) {
  this.classList.remove("playing");
}


const keys = document.querySelectorAll(".key");

window.addEventListener("keydown", playSoundByKey);
keys.forEach((key) => key.addEventListener("click", playSoundByClick));
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
