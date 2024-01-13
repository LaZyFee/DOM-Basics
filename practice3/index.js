document.getElementById('btn-update').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;

    const p = document.getElementById('input-text-display');
    p.innerText = inputText;
    inputField.value = '';


})
