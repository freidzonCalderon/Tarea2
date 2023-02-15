let num = 1;

const convertir = () => {
	const inputColon = document.getElementById('colon').value;
	const inputTipoCambio = document.getElementById('tipoCambio').value;

	if (validarDatos(inputColon, inputTipoCambio) == false) {
		return;
	}

	const conversion = inputColon / inputTipoCambio;

	let datosTabla = `
						<td>${num}</td> 
						<td>₡${inputColon}</td> 
						<td>₡${inputTipoCambio}</td> 
						<td>$${conversion.toFixed(2)}</td>
						`;
	let agregarDatos = document.createElement('tr');
	agregarDatos.innerHTML = datosTabla;
	document.getElementById('tabla').appendChild(agregarDatos);
	num++;

	document.getElementById('colon').value = '';
	document.getElementById('tipoCambio').value = '';
};

const limpiar = () => {
	location.reload();
	document.getElementById('colon').value = '';
	document.getElementById('tipoCambio').value = '';

	document.getElementById('tabla').innerHTML = '';
};

const validarDatos = (iColon, inputTipoCambio) => {
	if (!iColon || !inputTipoCambio) {
		if (!iColon) {
			resaltarInputInvalido('colon');
		} else {
			resaltarInputInvalido('tipoCambio');
		}
		imprimirMsjError('No debe dejar campos vacios');
		return false;
	}
};
