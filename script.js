const ratingEls = document.querySelectorAll('.rating-el');
let selected = null;

ratingEls.forEach((btn) => {
  btn.addEventListener('click', () => selected = btn.value);
});

submitEl.addEventListener('click', function () {
  if (selected) {   // this prevents the screen from changing if nothing is selected
    ratingWrapper.style.display = 'none';
    ratingWrapper2.style.display = 'grid';
    valueSelection();
  }
});

function valueSelection() {
  selectionEl.textContent = `You selected ${selected} out of 5`;
}
