let specific = document.querySelector(".specific");
let audio = document.createElement("audio");
audio.src = "retrovision-puzzle-low-quality-ncs-low-quality-music.mp3";
document.body.appendChild(audio);

window.onclick = () => {
  audio.play();
}