const enviar = () => {
	const cedulaEmpleado = document.getElementById('cedula').value;

	const cedulaINT = parseInt(cedulaEmpleado);

	if (validarDatos(cedulaINT) == false) {
		return;
	}

	if (cedulaINT === 123) {
		document.getElementById('empleado1').style.display = 'inline';
	} else if (cedulaINT == 321) {
		document.getElementById('empleado2').style.display = 'inline';
	} else if (cedulaINT == 456) {
		document.getElementById('empleado3').style.display = 'inline';
	} else if (cedulaINT == 654) {
		document.getElementById('empleado4').style.display = 'inline';
	} else {
		Swal.fire({
			title: 'Error!',
			text: 'Usuario no existe',
			icon: 'error',
			confirmButtonText: 'Ok',
		});
	}

	document.getElementById('cedula').value = '';
};

const limpiar = () => {
	location.reload();
	document.getElementById('cedula').value = '';
};

const validarDatos = (idatos) => {
	if (!idatos) {
		resaltarInputInvalido('cedula');
		imprimirMsjError('No debe dejar campos vacios');
		return false;
	}
};
