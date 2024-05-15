document.addEventListener("DOMContentLoaded", function ()  {
    console.log("Document is Ready")
    const display= document.getElementById('calc-display');
    const buttons= document.getElementsByClassName('btn');

    let currentValue = "";
    
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.addEventListener('click',  function ()  {
            const value = button.innerText;
            currentValue += value;
            console.log('currentValue:', currentValue);
            display.value = currentValue;
        })

    }
});