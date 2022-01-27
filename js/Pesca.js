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
