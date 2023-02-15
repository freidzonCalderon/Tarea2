let num = 1;

const calcular = () => {
	const inputBase = document.getElementById('base').value;
	const inputAltura = document.getElementById('altura').value;
	const baseINT = parseInt(inputBase);
	const alturaINT = parseInt(inputAltura);

	if (validarDatos(baseINT, alturaINT) == false) {
		return;
	}

	const area = (baseINT * alturaINT) / 2;

	let datosTabla = `
						<td>${num}</td> 
						<td>${baseINT}</td> 
						<td>${alturaINT}</td> 
						<td>${area.toFixed(2)}</td>
						`;
	let agregarDatos = document.createElement('tr');
	agregarDatos.innerHTML = datosTabla;
	document.getElementById('tabla').appendChild(agregarDatos);
	num++;

	document.getElementById('base').value = '';
	document.getElementById('altura').value = '';
};

const limpiar = () => {
	location.reload();
	document.getElementById('base').value = '';
	document.getElementById('altura').value = '';

	document.getElementById('tabla').innerHTML = '';
};

const validarDatos = (ibase, ialtura) => {
	if (!ibase || !ialtura) {
		if (!ibase) {
			resaltarInputInvalido('base');
		} else {
			resaltarInputInvalido('altura');
		}
		imprimirMsjError('No debe dejar campos vacios');
		return false;
	}
};
