let number = window.prompt('Enter a number between 1 and 100'); 
if (number > 100 || number < 1) {
alert('Only numbers between 1 and 100 are accepted'); 
} else if (number >= 60 && number <= 69) {
window.console.log('You received a D'); 
} else if (number >= 70 && number <= 79) {
window.console.log('You received a C'); 
} else if (number >= 80 && number <= 89) {
window.console.log('You received a B'); 
} else if (number >= 90 && number <= 100) {
window.console.log('You received an A'); 
} else if (number < 60) {
window.console.log('You received an F');
}
