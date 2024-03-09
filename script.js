let rotated = false;

function rotateImage() {
  const image = document.getElementById("rotatingImage");
  const ThemeSwitch = document.getElementById("ThemeSwitch");

  if (rotated) {
    image.style.transform = "rotate(0deg)";
    ThemeSwitch.style.display = "none";
  } else {
    image.style.transform = "rotate(180deg)";
    ThemeSwitch.style.display = "block";
  }

  rotated = !rotated;
}
