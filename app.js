const consultantes = [];
let maximoNroDeCuotas = 12;
let mensajeAMostrar = "El monto a pagar seria\n";
let deseaSeguir = "";


do {
  // -- inicializo persona --
  let persona = {
    nombre: "",
    apellido: "",
    monto: 0,
    cuotas: 0,
  };

  // -- pedir info a la persona --
  persona.nombre = prompt("Ingrese su nombre");
  persona.apellido = prompt("Ingrese su apellido");
  alert("Se ha creado el cliente");

  // -- pido el monto que la persona desea --
  persona.monto = parseInt(prompt("Ingrese el monto deseado"));

  // -- genero mensaje a mostrar --
  for (let cuota = 1; cuota <= maximoNroDeCuotas; cuota++) {
    let resultado = persona.monto / cuota;
    mensajeAMostrar = mensajeAMostrar + persona.monto + "/" + cuota + " = " + resultado + "\n";

    if (cuota === maximoNroDeCuotas) {
      alert(mensajeAMostrar);
    }
  }

  // -- pido cuantas cuotas quiere el cliente --
  let cuotasIngresadas = 0;
  do {
    cuotasIngresadas = parseInt(prompt("Ingrese la cantidad de cuotas: 1 a 12"));
    
    if (cuotasIngresadas > 12) {
        alert("El maximo de cuotas disponible es 12");
    }
    console.log("cuotas ingresadas: ", cuotasIngresadas);
  } 
  while (cuotasIngresadas > 12); persona.cuotas = cuotasIngresadas;

  console.log("persona creada: ", persona);

  // -- Agrego a la persona al array de personas -
  consultantes.push(persona);
  console.log("consultantes: ", consultantes);
  
  console.log(consultantes.length)
  const reporte = consultantes.filter((el)=> el.cuotas > 6)
  console.log("Solicitudes con mas de 6 pagos", reporte)

  // -- Preguntar si quiere seguir --
  deseaSeguir = prompt("Ingrese 's' para realizar otra consulta o cualquier otra tecla para finalizar");
} 
while (deseaSeguir === "s");
