let num = 1;

const convertir = () => {
	const inputDolar = document.getElementById('dolar').value;
	const inputTipoCambio = document.getElementById('tipoCambio').value;

	if (validarDatos(inputDolar, inputTipoCambio) == false) {
		return;
	}

	const conversion = inputDolar * inputTipoCambio;

	let datosTabla = `
						<td>${num}</td> 
						<td>$${inputDolar}</td> 
						<td>₡${inputTipoCambio}</td> 
						<td>₡${conversion.toFixed(2)}</td>
						`;
	let agregarDatos = document.createElement('tr');
	agregarDatos.innerHTML = datosTabla;
	document.getElementById('tabla').appendChild(agregarDatos);
	num++;

	document.getElementById('dolar').value = '';
	document.getElementById('tipoCambio').value = '';
};

const limpiar = () => {
	location.reload();
	document.getElementById('dolar').value = '';
	document.getElementById('tipoCambio').value = '';

	document.getElementById('tabla').innerHTML = '';
};

const validarDatos = (iDolar, inputTipoCambio) => {
	if (!iDolar || !inputTipoCambio) {
		if (!iDolar) {
			resaltarInputInvalido('dolar');
		} else {
			resaltarInputInvalido('tipoCambio');
		}
		imprimirMsjError('No debe dejar campos vacios');
		return false;
	}
};
