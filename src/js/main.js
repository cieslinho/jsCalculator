const buttons = document.querySelectorAll('.calculator__btn')
const screen = document.querySelector('.calculator__screen')

let calcuation = []
let joinedCalculation

function calculate(button) {
	const number = button.textContent
	if (number === 'C') {
		calcuation = []
		screen.textContent = '.'
	} else if (number === '=') {
		screen.textContent = eval(joinedCalculation)
	} else {
		calcuation.push(number)
		joinedCalculation = calcuation.join('')
		screen.textContent = joinedCalculation
	}
}

buttons.forEach(button => button.addEventListener('click', () => calculate(button)))
