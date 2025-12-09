function changeBackgroundColor(color){
  let section = document.getElementById('journey');
  section.style.backgroundColor = color;
}

document.getElementById('intro').addEventListener('click', () => changeBackgroundColor("#2CA02C"));
document.getElementById('react').addEventListener('click', () => changeBackgroundColor("#FF7F0E"));
document.getElementById('backend').addEventListener('click', () => changeBackgroundColor("#9467BD"));

// Dark/Light Mode Toggle
document.getElementById('modeToggle').addEventListener('click', () => {
  document.body.classList.toggle("dark-mode");
});
