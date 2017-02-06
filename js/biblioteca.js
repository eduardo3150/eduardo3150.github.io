var nombre;
var tipo;
var editorial;
var autor;
var showTable;

function getData() {
    nombre = document.getElementById('inputName').value;
    tipo = document.getElementById('inputType').value;
    editorial = document.getElementById('inputEditorial').value;
    autor = document.getElementById('inputAutor').value;
}

function addElement() {
    getData();

    if ((nombre === null) || (nombre === "") ||
        (tipo === null) || (tipo === "") ||
        (editorial === null) || (editorial === "") ||
        (autor === null) || (autor === "")) {

        alert("Error uno o mas campos se encuentran vacios");

    } else {
        var table = document.getElementById('tableBiblioteca');

        var row = table.insertRow(1);
        var celda1 = row.insertCell(0);
        var celda2 = row.insertCell(1);
        var celda3 = row.insertCell(2);
        var celda4 = row.insertCell(3);

        celda1.innerHTML = nombre;
        celda2.innerHTML = tipo;
        celda3.innerHTML = editorial;
        celda4.innerHTML = autor;

        alert(nombre+" añadido");

        cleanElement();
    }

}

function cleanElement() {
    document.getElementById('inputName').value = "";
    document.getElementById('inputType').value = "";
    document.getElementById('inputEditorial').value = "";
    document.getElementById('inputAutor').value = "";
}


function showElement() {
    if (showTable.style.display=== 'none') {
      showTable.style.display= '';

    } else {
      showTable.style.display= 'none';
    }
}

function init() {
    showTable = document.getElementById('table_container');
    showTable.style.display= 'none';

    document.getElementById('addLibro').onclick = function() {
        addElement();
    };
    document.getElementById('showLibro').onclick = function() {
        showElement();
    };
}

window.onload = init;
