const inputStepNode: HTMLInputElement = document.querySelector('#input-step');
const inputFromNode: HTMLInputElement = document.querySelector('#input-from');
const inputToNode: HTMLInputElement = document.querySelector('#input-to');
const formNode: HTMLFormElement = document.querySelector('#form');
const formOutputNode: HTMLOutputElement = document.querySelector('#form-output');


formNode.addEventListener('submit', (e) => {
	e.preventDefault();

	const step = inputStepNode.valueAsNumber;
	const from = inputFromNode.valueAsNumber;
	const to = inputToNode.valueAsNumber;

	const total = calcLadder(step, from, to);
	formOutputNode.value = String(total);

	console.log(1);



});

function calcLadder(step: number, from: number, to: number): number {

	if (step < 1) {
		return 0;
	}

	let total = 0;
	for (let count = from; count <= to; count += step) {
		total += count;
	}

	return total;
}


