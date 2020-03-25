let btns = document.getElementsByClassName("list-inline-item");
let items = document.getElementsByClassName("Все");

export function countryFilter() {
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
      for (let j = 0; j < items.length; j++) {
        if (items[j].classList.contains(this.innerHTML)) {
          items[j].style.display = "inline-block";
        } else {
          items[j].style.display = "none";
        }
      }
    });
  }
}
