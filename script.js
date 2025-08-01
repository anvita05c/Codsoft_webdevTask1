document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('button');

    // Loop through all buttons and add a click event listener
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.value;

            // Use if-else statements to handle different button clicks
            if (value === 'C') {
                // Clear the display
                display.value = '';
            } else if (value === 'DEL') {
                // Delete the last character from the display
                display.value = display.value.slice(0, -1);
            } else if (value === '=') {
                // Evaluate the expression in the display
                try {
                    // The eval() function evaluates JavaScript code represented as a string.
                    // Note: Using eval() can be a security risk with untrusted input.
                    // For a simple calculator project, it's a straightforward solution.
                    display.value = eval(display.value);
                } catch (error) {
                    // If the expression is invalid, show an error message
                    display.value = 'Error';
                }
            } else {
                // For all other buttons (numbers and operators), append their value
                display.value += value;
            }
        });
    });
});

