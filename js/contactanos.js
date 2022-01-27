function deletreo(){
var texto=document.getElementById("titulo").innerText;
document.getElementById("titulo").innerText=texto.substr(1)+texto.substr(0,1);

setTimeout("deletreo()",200)
}
var c=1;

function carrusel(){
	document.getElementById("logo").src="imagenes/banner/banner"+c+".jpg";

	c++;
	if(c>3) c=1;

	setTimeout("carrusel()",1000);
}

function cambio(n){
	var rs=document.getElementsByClassName("rs")[n];
	var nombre=rs.getAttribute("data-rs");
	rs.src="iconos/Redes Sociales/"+nombre+"1"+".png";
}
function original(n){
	var rs=document.getElementsByClassName("rs")[n];
	var nombre=rs.getAttribute("data-rs");
	rs.src="iconos/Redes Sociales/"+nombre+".png";
}
function registrar(){
	var nombre=document.forms["frmregistro"].txtnombre.value;
	patron=/^\s*$/;
	if(patron.test(nombre)==true){
		alert("Ingrese el nombre"); return;
	}
	var apellido=document.forms["frmregistro"].txtapellido.value;
	patron=/^\s*$/;
	if(patron.test(apellido)==true){
	  alert("Ingrese el Apellido"); return;
	}
	var telefono=document.forms["frmregistro"].txtfono.value;
	patron=/^\d{7,9}$/;
	if(patron.test(telefono)==false){
		alert("Fono entre 7 a 9 digitos"); return;
	}
	var Correo=document.forms["frmregistro"].txtemail.value;
	patron=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/;
confirm("Le llegara la informacion a su Correo");
	//alert("Le llegara la informacion a su Correo");
}
    