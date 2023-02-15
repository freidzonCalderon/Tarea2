let num = 1;

const enviar = () => {
	const notaEmpleado = document.getElementById('nota').value; 

	if (validarDatos(notaEmpleado) == false) {
		return;
	}
	
	let mensaje = '';

	if (notaEmpleado >= 70) {
		mensaje = 'Ganó el curso' 
	} else if (notaEmpleado >= 60 && notaEmpleado <= 69){
		mensaje = 'Perdió el curso'
	} else {
		mensaje = 'Tiene derecho a un examen extraordinario' 
	}

	let datosTabla = `
						<td>${num}</td> 
						<td> ${notaEmpleado}</td>
						<td> ${mensaje}</td> 
						`;
	let agregarDatos = document.createElement('tr');
	agregarDatos.innerHTML = datosTabla;
	document.getElementById('tabla').appendChild(agregarDatos);
	num++;

	document.getElementById('nota').value = ''; 
};

const limpiar = () => {
	location.reload();
	document.getElementById('nota').value = ''; 

	document.getElementById('tabla').innerHTML = '';
};

const validarDatos = (inota) => {
	if (!inota) {
		resaltarInputInvalido('nota');
		imprimirMsjError('No debe dejar campos vacios');
		return false;
	}
};
