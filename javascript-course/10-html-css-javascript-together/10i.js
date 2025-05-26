let calculation = JSON.parse(localStorage.getItem('calculator') || '');
        console.log(calculation);

        const display = document.querySelector('.js-display');
        display.innerHTML = calculation;
        
        function updateCalculation(param) {
            

            if (param === '') {
                calculation = '';
                localStorage = '';
                console.log('Cleared.');
            }
            
            if (param === '=') {
                calculation = eval(calculation);
                console.log(calculation)
            } else {
                calculation += param;
                console.log(calculation);
            }

            localStorage.setItem('calculator', JSON.stringify(calculation));

            display.innerHTML = calculation;

        };