document.addEventListener("DOMContentLoaded", function ()  {
    const display= document.getElementById('calc-display');
    const buttons= document.getElementsByClassName('btn');


    // Initializing the currentValue variable as an
    //empty string
    let currentValue = "";

    function evaluateResult() {
        console.log('currentValue:', currentValue)
        const convertedValue = currentValue

        //Replace some Mathematical symbolswith their javascript
        // equivalant const convertedValue =  currentValue
         .replace("x",  "*")
         .replace("÷",  "/")
         .replace('%', '*0.01')
         .replace('sin', 'Math.sin')
         .replace('cos', 'Math.cos')
         .replace('ln', 'Math.log')
         .replace('log', 'Math.log10')
         .replace('π', 'Math.PI')
         .replace('tan', 'Math.tan')
         .replace('e', 'Math.E')
         .replace('√', 'Math.sqrt');
        
        console.log('convertedValue:', convertedValue)

        //Evaluate the mathematical expressions
        const result = eval(convertedValue);

        //convert the results to string and
        //store ot in currentValue
         currentValue = result.toString(); 
         
         //update the value of the display 
         //with the result
         display.value = currentValue;                       
    }
    

    //loop through out all the buttons and 
    //attach a click event listener
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];

        button.addEventListener('click',  function ()  {
            const value = button.innerText;


        try {
            if (value == "AC") {
                currentValue = "";
                display.value = currentValue;
            } else if ( value == "=") {
                evaluateResult();
            } else {
            currentValue += value;
            display.value = currentValue;
            }
            } catch (error) {
            console.error(error);
            currentValue = "ERROR";
            display.value = currentValue;
        }

        })

    }

    
});