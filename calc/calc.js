function calc(type,value){
	if (type === 'action'){
		if (value === 'c'){
			document.getElementById('result').value = ''
		}
		
		if (value === 'x'){
			document.getElementById('result').value = result.value.slice(0, -1)
		}

		if (value === 'neg'){
			document.getElementById('result').value = result.value * (-1)
		}

		if (value === '(' || value === ')'){
			document.getElementById('result').value += value
		}

		if (value === '+' || value === '-' || value === '/' || value === '*' || value === '**' || value === '%' || value === '.'){
			if (result.value.endsWith(0) || result.value.endsWith(1) || result.value.endsWith(2) || result.value.endsWith(3) || result.value.endsWith(4) || result.value.endsWith(5) || result.value.endsWith(6) || result.value.endsWith(7) || result.value.endsWith(8) || result.value.endsWith(9) || result.value.endsWith('(') || result.value.endsWith(')')){
				document.getElementById('result').value += value	
			}
			else if (result.value.endsWith('+') || result.value.endsWith('-') || result.value.endsWith('/') || result.value.endsWith('*') || result.value.endsWith('**') || result.value.endsWith('%') || result.value.endsWith('.')){
				document.getElementById('result').value += ''
			}
		}		

		if (value === '='){
			var resultValue = eval(document.getElementById('result').value)
			document.getElementById('result').value = resultValue.toFixed(2)			
		}
	}
		
	if (type === 'num'){
		document.getElementById('result').value += value
	}
}