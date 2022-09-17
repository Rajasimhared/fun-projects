import { Content } from "./content.js";

const panelFragment = document.createDocumentFragment();
Content.forEach((panel) => {
  let panelDiv = document.createElement("div");
  panelDiv.setAttribute("data-id", panel.id);
  panelDiv.classList.add("panel");
  panelDiv.style.backgroundImage = `url(${panel.imageUrl})`;
  let texts = panel.text.split(",");
  texts.forEach((text) => {
    let para = document.createElement("p");
    para.innerText = text;
    panelDiv.appendChild(para);
  });
  panelFragment.appendChild(panelDiv);
});

const panels = document.querySelector(".panels");
panels.appendChild(panelFragment);

panels.addEventListener("click", (e) => {
  e.target.classList.toggle("open");
  e.target.classList.toggle("open-active");
});
