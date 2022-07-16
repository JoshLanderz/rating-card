
const ratingWrapper = document.getElementById("rating-wrapper")
const ratingWrapper2 = document.getElementById("rating-wrapper-two")

let ratingEl1 = document.getElementById("rating-1")
let ratingEl2 = document.getElementById("rating-2")
let ratingEl3 = document.getElementById("rating-3")
let ratingEl4 = document.getElementById("rating-4")
let ratingEl5 = document.getElementById("rating-5")

const submitEl = document.getElementById("submit")
let selectionEl = document.getElementById("selection-el")

submitEl.addEventListener("click", function() {
    ratingWrapper.style.display = "none"
    ratingWrapper2.style.display = "grid"
    valueSelection()
})

function valueSelection() {
    if(ratingEl1.clicked == true) {
        selectionEl.textContent = "You selected 1 out of 5"
    } 
    else if (ratingEl2.click === true) {
        selectionEl.innerHTML = "You selected 2 out of 5"
    } 
    else if (ratingEl3.click === true) {
        selectionEl.innerHTML = "You selected 3 out of 5"
    } 
    else if (ratingEl4.click === true) {
        selectionEl.innerHTML = "You selected 4 out of 5"
    } 
    else {
        selectionEl.innerHTML = "You selected 5 out of 5"
    }
}
