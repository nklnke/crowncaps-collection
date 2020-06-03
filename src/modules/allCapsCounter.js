window.onload = function() {
  let allCaps = document.getElementsByClassName("Все").length;
  let allCapsBtn = document.getElementById("capsCounterBtn");

  allCapsBtn.innerHTML = `Всего: ${allCaps}шт.`;
};
