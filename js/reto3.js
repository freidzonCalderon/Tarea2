let num = 1;

const enviar = () => {
	const cargoEmpleado = document.getElementById('cargo').value;
	const nombreEmpleado = document.getElementById('nombre').value;

	if (validarDatos(cargoEmpleado, nombreEmpleado) == false) {
		return;
	}

	let esPremiado = false;
	let mensaje = '';

	if (cargoEmpleado == '1D' || cargoEmpleado == '1d') {
		esPremiado = true;
		mensaje = 'Curso libre';
	} else {
		esPremiado = false;
		mensaje = 'No hay premio';
	}

	let datosTabla = `
						<td>${num}</td> 
						<td> ${cargoEmpleado}</td> 
						<td> ${nombreEmpleado}</td> 
						<td> ${mensaje}</td> 
						`;
	let agregarDatos = document.createElement('tr');
	agregarDatos.innerHTML = datosTabla;
	document.getElementById('tabla').appendChild(agregarDatos);
	num++;

	document.getElementById('cargo').value = '';
	document.getElementById('nombre').value = '';
};

const limpiar = () => {
	location.reload();
	document.getElementById('cargo').value = '';
	document.getElementById('nombre').value = '';

	document.getElementById('tabla').innerHTML = '';
};

const validarDatos = (iCargo, iEmpleado) => {
	if (!iCargo || !iEmpleado) {
		if (!iCargo) {
			resaltarInputInvalido('cargo');
		} else {
			resaltarInputInvalido('nombre');
		}
		imprimirMsjError('No debe dejar campos vacios');
		return false;
	}
};
