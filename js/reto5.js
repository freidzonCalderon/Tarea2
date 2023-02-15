let num = 1;

const enviar = () => {
	const salarioEmpleado = document.getElementById('salario').value;

	if (validarDatos(salarioEmpleado) == false) {
		return;
	}

	let porcentaje = 0;
	let aumento = 0;
	let salarioTotal = 0;
	let salarioInt = parseInt(salarioEmpleado);

	if (salarioEmpleado > 300000) {
		porcentaje = 10;
		aumento = parseInt((salarioInt * 0.1).toFixed(2));
	} else {
		porcentaje = 20;
		aumento = parseInt((salarioInt * 0.2).toFixed(2));
	}

	salarioTotal = salarioInt + aumento;

	let datosTabla = `
						<td>${num}</td> 
						<td>₡ ${salarioEmpleado}</td>
						<td> ${porcentaje}%</td> 
						<td>₡ ${aumento}</td> 
						<td>₡ ${salarioTotal}</td> 
						`;
	let agregarDatos = document.createElement('tr');
	agregarDatos.innerHTML = datosTabla;
	document.getElementById('tabla').appendChild(agregarDatos);
	num++;

	document.getElementById('salario').value = '';
};

const limpiar = () => {
	location.reload();
	document.getElementById('salario').value = '';

	document.getElementById('tabla').innerHTML = '';
};

const validarDatos = (isalario) => {
	if (!isalario) {
		resaltarInputInvalido('salario');
		imprimirMsjError('No debe dejar campos vacios');
		return false;
	}
};
