/* const gamingButton = document.querySelector('.gaming-button');
        const musicButton = document.querySelector('.music-button');
        const techButton = document.querySelector('.tech-button');

        function toggle(input) {
            if (input === 'G') {
                if (!gamingButton.classList.contains('is-toggled')) {
                    gamingButton.classList.add('is-toggled');
                } else {
                    gamingButton.classList.remove('is-toggled');
                }
            } else if (input === 'M') {
                if (!musicButton.classList.contains('is-toggled')) {
                    musicButton.classList.add('is-toggled')
                } else {
                    musicButton.classList.remove('is-toggled');
                }
            } else {
                if (!techButton.classList.contains('is-toggled')) {
                    techButton.classList.add('is-toggled');
                } else {
                    techButton.classList.remove('is-toggled')
                }
            }
        } */
    
        //toke it from exercise solutions
       function toggle(seletor) {
        const button = document.querySelector(seletor);
        if (!button.classList.contains('is-toggled')) {
            // Before turning this button ON, check if there's
            // already a button that's turned ON and turn it OFF.
            turnOffPreviousButton();
            
            button.classList.add('is-toggled');
        } else {
            button.classList.remove('is-toggled');
        }
       };
       
       //toke it from exercise solutions
       function turnOffPreviousButton() {
        const previousButton = document.querySelector('.is-toggled');
        if (previousButton) {
            previousButton.classList.remove('is-toggled');
        }
       };