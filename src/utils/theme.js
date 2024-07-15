export default function themechanger() {
    const btn = document.getElementById("btn");
    const btnIcon = document.getElementById("btnIcon");
  
    btn.onclick = function () {
      document.body.classList.toggle("dark-theme");
      if (document.body.classList.contains("dark-theme")) {
        btnIcon.src = "images/line-md--sun-rising-loop.svg";
      } else {
        btnIcon.src = "images/line-md--moon-twotone-loop.svg";
      }
    };
  }