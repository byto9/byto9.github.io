function numToDec() {
	let num = document.getElementById('num_to_dec').value
	let base = parseInt(document.querySelector('input[name=base_a]:checked').value)
	let dec = parseInt(num, base)
	document.getElementById('num_to_dec_result').value = dec
}

function decToNum() {
	let dec = parseInt(document.getElementById('dec_to_num').value)
	let base = parseInt(document.querySelector('input[name=base_b]:checked').value)
	let num = dec.toString(base)
	document.getElementById('dec_to_num_result').value = num
}

  $( function() {
    $( "#accordion" ).accordion({
      active: false,
      collapsible: true
    });
  });