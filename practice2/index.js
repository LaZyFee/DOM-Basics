// option:2 inner html function and we will use this
function makeYellow() {
    document.body.style.backgroundColor = 'yellow';
}
// option3:
const makeBlueButton = document.getElementById('blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}
// option3.1:
const GreenButton = document.getElementById('green');
GreenButton.onclick = function makeGreen() {
    document.body.style.backgroundColor = 'green';
}

// option4:
const VioletButton = document.getElementById('violet');
VioletButton.addEventListener('click', makeViolet);
function makeViolet() {
    document.body.style.backgroundColor = 'violet';
}
// option4.1:
const PurpleButton = document.getElementById('purple');
PurpleButton.addEventListener('click', function makePurple() {
    document.body.style.backgroundColor = 'purple';
});

// option 4.2[important]
document.getElementById('goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})
