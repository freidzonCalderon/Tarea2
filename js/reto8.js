const enviar = () => {
	const colorIngresado = document.getElementById('color').value;

	const colorToUpper = colorIngresado.toUpperCase();

	if (validarDatos(colorToUpper) == false) {
		return;
	}

	if (colorToUpper == 'ROJO') {
		document.getElementById('imgRed').style.display = 'inline';
	} else if (colorToUpper == 'AZUL') {
		document.getElementById('imgBlue').style.display = 'inline';
	} else if (colorToUpper == 'VERDE') {
		document.getElementById('imgGreen').style.display = 'inline';
	} else {
		Swal.fire({
			title: 'Error!',
			text: 'No hay clasificación',
			icon: 'error',
			confirmButtonText: 'Ok',
		});
	}

	document.getElementById('color').value = '';
};

const limpiar = () => {
	location.reload();
	document.getElementById('color').value = '';
};

const validarDatos = (idatos) => {
	if (!idatos) {
		resaltarInputInvalido('color');
		imprimirMsjError('No debe dejar campos vacios');
		return false;
	}
};
