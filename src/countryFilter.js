let btns = document.getElementsByClassName("list-inline-item");
let caps = document.getElementsByClassName("Все");

export function countryFilter() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      for (let j = 0; j < caps.length; j++) {
        if (caps[j].classList.contains(this.innerHTML)) {
          caps[j].style.display = "block";
        } else {
          caps[j].style.display = "none";
        }
      }
    });
  }
}
