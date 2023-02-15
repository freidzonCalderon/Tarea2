let num = 1;

const enviar = () => {
	const clasiEmpleado = document.getElementById('clasificacion').value;

	if (validarDatos(clasiEmpleado) == false) {
		return;
	}

	let departamento = '';

	if (clasiEmpleado >= 1 && clasiEmpleado <= 100) {
		departamento = 'Departamento Informática';
	} else if (clasiEmpleado >= 101 && clasiEmpleado <= 200) {
		departamento = 'Departamento Web';
	} else if (clasiEmpleado >= 201 && clasiEmpleado <= 300) {
		departamento = 'Departamento UX-UI';
	} else {
		departamento = 'No hay clasificación';
	}

	let datosTabla = `
						<td>${num}</td> 
						<td>${clasiEmpleado}</td>
						<td>${departamento}</td> 
						`;
	let agregarDatos = document.createElement('tr');
	agregarDatos.innerHTML = datosTabla;
	document.getElementById('tabla').appendChild(agregarDatos);
	num++;

	document.getElementById('clasificacion').value = '';
};

const limpiar = () => {
	location.reload();
	document.getElementById('clasificacion').value = '';

	document.getElementById('tabla').innerHTML = '';
};

const validarDatos = (iDatos) => {
	if (!iDatos) {
		resaltarInputInvalido('clasificacion');
		imprimirMsjError('No debe dejar campos vacios');
		return false;
	}
};
