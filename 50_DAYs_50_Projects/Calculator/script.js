let input = document.getElementById("input-box");
let operator = document.getElementById('add')

operator.addEventListener('click', () => {
    if (!input.value) {
        return;
    }
    else {
        string += input.value
    }
})
