function getFecha() {
    // let fecha = 'Martes, 29 de Enero 2019';
    let fecha = 'Fecha';
    let f = new Date();
    let numDiaSem = f.getDay(); //getDay() devuelve el dia de la semana.(0-6).
    //Creamos un Array para los nombres de los días    
    let diasSemana = new Array("domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado");
    let diaLetras = diasSemana[f.getDay()]; //El día de la semana en letras. getDay() devuelve el dia de la semana.(0-6).
    //Otro Array para los nombres de los meses    
    let meses = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
    let mesLetras = meses[f.getMonth()]; //El mes en letras
    let diaMes = (f.getDate()); //getDate() devuelve el dia(1-31).
    let anho = f.getFullYear(); //getFullYear() devuelve el año(4 dígitos).

    fecha = diaLetras + ', ' + diaMes + ' de ' + mesLetras + ' , ' + anho;
    document.getElementById('fecha').innerHTML = fecha;
}

getFecha();