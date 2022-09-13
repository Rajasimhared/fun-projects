import { keyCodeInfo } from "./config.js";

function init() {
  const container = document.querySelector(".main-container");
  let fragment = document.createDocumentFragment();
  let audioFragment = document.createDocumentFragment();
  for (let i = 0; i < keyCodeInfo.length; i++) {
    let div = document.createElement("div");
    div.className = "key";
    div.setAttribute("data-key", keyCodeInfo[i].code);
    let key = document.createElement("kbd");
    let description = document.createElement("span");
    key.textContent = keyCodeInfo[i].name;
    div.appendChild(key);
    description.textContent = keyCodeInfo[i].description;
    div.appendChild(description);
    fragment.appendChild(div);
    let audio = document.createElement("audio");
    audio.setAttribute("data-key", keyCodeInfo[i].code);
    audio.setAttribute("src", keyCodeInfo[i].audioPath);
    audioFragment.appendChild(audio);
  }
  document.body.appendChild(audioFragment);
  container.appendChild(fragment);
}

init();

document.addEventListener("keydown", (e) => {
  let audios = [...document.querySelectorAll(`[data-key="${e.keyCode}"`)];
  audios[0].classList.add("playing");
  audios[1].play();
  setTimeout(() => {
    audios[0].classList.remove("playing");
  }, 100);
});
