let monto = parseInt(prompt("Ingrese la suma"))

let cuotas = parseInt(prompt("Ingrese cantidad de cuotas (1 a 12)"))

if (cuotas === 1) {
    alert("Usted abonara un pago de" + " " + "$" + monto);
  }

if (cuotas < 13) {
    alert("Usted abonara" + " " + cuotas + " " + "pagos de $" + parseFloat(monto / cuotas))
}

 if(cuotas > 12){
    alert("El maximo de cuotas disponible es 12")
}