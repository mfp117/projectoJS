function simuladorPrestamo(){

  let montoIngresado = parseInt(prompt("Ingrese la suma"));
  let maximoNroDeCuotas = 12;
  let mensajeAMostrar = "El monto a pagar seria\n";
  
  for (let cuota = 1; cuota <= maximoNroDeCuotas; cuota++) {
    let resultado = montoIngresado / cuota;
    mensajeAMostrar = mensajeAMostrar + montoIngresado + "/" + cuota + " = " + resultado + "\n";
    
    if (cuota === maximoNroDeCuotas) {
      alert(mensajeAMostrar);
    }
  }
  
  let cuotas = parseInt(prompt("Seleccione cantidad de cuotas (1 a 12)"));
  
  if (cuotas === 1) {
    alert("Usted abonara un pago de" + " " + "$" + montoIngresado);
  }
  
  if (cuotas < 13) {
    alert(
      "Usted abonara" + " " + cuotas + " " + "pagos de $" + parseFloat(montoIngresado / cuotas));
  }
  
  if (cuotas > 12) {
    alert("El maximo de cuotas disponible es 12");
  }

menu = prompt("Desea realizar otra operacion? \n [s] si \n [n] no");

if (menu == "s") {
  simuladorPrestamo();  
}

else (menu == "n"); {
  document.write("Hasta la proxima!")
}

}

simuladorPrestamo();


