'use strict';
let catalogo=[];
class datecatalogo{
    constructor(codigoproducto, nombreproducto, precioproducto){
        this.codigoproducto=codigoproducto;
        this.nombreproducto=nombreproducto;
        this.precioproducto=precioproducto;
    }
}

function validateFields(){
    if(document.getElementById('codigoproducto').value==""){
        alert('Debe Ingresar el Codigo del Producto');
        return false;
    }
    if(document.getElementById('nombreproducto').value==""){
        alert('Debe Ingresar el Nombre del Producto');
        return false;
    }
    if(document.getElementById('precioproducto').value==""){
        alert('Debe Ingresar el Precio del Producto');
        return false;
    }
    
    return true;
    
    
}

function addRecord(){
    let codigoproducto=document.getElementById('codigoproducto').value;
    let nombreproducto=document.getElementById('nombreproducto').value;
    let precioproducto=document.getElementById('precioproducto').value;
    catalogo.push(new datecatalogo(codigoproducto, nombreproducto, precioproducto));
}
function showData(){
    let rows="";
    for (let index = 0; index < catalogo.length; index++) {
        rows+= '<tr>'
        rows+= '<td>'+ catalogo[index].codigoproducto+ '</td>'
        rows+= '<td>'+ catalogo[index].nombreproducto+ '</td>'
        rows+= '<td>'+ catalogo[index].precioproducto+ '</td>'
        rows+= '</tr>'
    }
    document.getElementById('listacatalogo').innerHTML=rows;
}
function addData(){
    if(validateFields()==false){
        return;
    }

    addRecord();

    showData();
}

