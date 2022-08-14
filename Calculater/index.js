var input = document.getElementById("input")
buttons = document.querySelectorAll('button');

var findData = ""
for (items of buttons) {
    items.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
         if (buttonText == '=') {
            input.value = eval(findData)

        } else {
            findData += buttonText;
            input.value = findData;
        }

    })


}
