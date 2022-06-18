function numToDec() {
	let num = document.getElementById('num_to_dec').value
	let base = parseInt(document.querySelector('input[name=base_a]:checked').value)
	let dec = parseInt(num, base)

	document.getElementById('num_to_dec_result').value = dec
}

document.getElementById('bin1').addEventListener('click', () => {
		document.getElementById('num_to_dec').placeholder = 'binário'
	})

document.getElementById('oct1').addEventListener('click', () => {
		document.getElementById('num_to_dec').placeholder = 'octal'
	})

document.getElementById('hex1').addEventListener('click', () => {
		document.getElementById('num_to_dec').placeholder = 'hexadecimal'
	})

function decToNum() {
	let dec = parseInt(document.getElementById('dec_to_num').value)
	let base = parseInt(document.querySelector('input[name=base_b]:checked').value)
	let num = dec.toString(base)
	document.getElementById('dec_to_num_result').value = num
}

document.getElementById('bin2').addEventListener('click', () => {
		document.getElementById('dec_to_num_result').placeholder = 'binário'
	})

document.getElementById('oct2').addEventListener('click', () => {
		document.getElementById('dec_to_num_result').placeholder = 'octal'
	})

document.getElementById('hex2').addEventListener('click', () => {
		document.getElementById('dec_to_num_result').placeholder = 'hexadecimal'
	})