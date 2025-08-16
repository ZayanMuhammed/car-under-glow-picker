'use strict';

window.addEventListener('DOMContentLoaded', () => {
  const slider_width = document.getElementById('width');
  const slider_height = document.getElementById('height');
  const slider_rotate = document.getElementById('rotate');
  const colorButtons = {
    red: document.getElementById('red'),
    blue: document.getElementById('blue'),
    green: document.getElementById('green'),
    yellow: document.getElementById('yellow')
  };

  const car = document.getElementById('car');
  const underglow = document.getElementById('underglow');

  // sliders
  const applyWidth = () => underglow.style.width = `${slider_width.value}px`;
  const applyHeight = () => underglow.style.height = `${slider_height.value}px`;
  const applyRotate = () => underglow.style.transform =
    `translateX(-50%) rotate(${slider_rotate.value}deg)`;

  slider_width.addEventListener('input', applyWidth);
  slider_height.addEventListener('input', applyHeight);
  slider_rotate.addEventListener('input', applyRotate);

  // color changer (use rgba for transparency)
  function setUnderglowColor(color) {
    let rgba;
    switch (color) {
      case "red": rgba = "rgba(255,0,0,0.8)"; break;
      case "blue": rgba = "rgba(0,0,255,0.8)"; break;
      case "green": rgba = "rgba(0,255,0,0.8)"; break;
      case "yellow": rgba = "rgba(255,255,0,0.8)"; break;
      default: rgba = "rgba(0, 0, 0, 1)";
    }

    underglow.style.background = `radial-gradient(ellipse at center,
      ${rgba} 0%,
      ${rgba.replace("0.8", "0.4")} 40%,
      transparent 80%)`;
  }

  // button bindings
  colorButtons.red.addEventListener('click', () => setUnderglowColor("red"));
  colorButtons.blue.addEventListener('click', () => setUnderglowColor("blue"));
  colorButtons.green.addEventListener('click', () => setUnderglowColor("green"));
  colorButtons.yellow.addEventListener('click', () => setUnderglowColor("yellow"));
});
