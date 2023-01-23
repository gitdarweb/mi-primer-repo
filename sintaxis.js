const datos = [
    {dato:"Nombre y Apellido:", caract:"Duarte Dario."},
    {dato:"edad:", caract:"48."},
    {dato:"dirección:", caract:"4 nª1781."},
    {dato:"ciudad:", caract:"La Plata."},
    {dato:"Pais:", caract:"Argentina."},
    {dato:"whatsapp:", caract:"+54-221-3533461."},
    {dato:"Mail:", caract:"duartedario780@gmail.com"}
  ];
  
  function displayDatos() {
    document.getElementById("demo").innerHTML =
    datos[0].dato + " " + datos[0].caract + "<br>" +
    datos[1].dato + " " + datos[1].caract + "<br>" +
    datos[2].dato + " " + datos[2].caract + "<br>" +
    datos[3].dato + " " + datos[3].caract + "<br>" +
    datos[4].dato + " " + datos[4].caract + "<br>" +
    datos[5].dato + " " + datos[5].caract + "<br>" +
    datos[6].dato + " " + datos[6].caract;
  }
  //--------------------------------------------------------------------//
  const datos1 = [
    {dato1:"Nombre y Apellido:", caract1:"Duarte Dario."},
    {dato1:"edad:", caract1:"48."},
   
  ];
  function displayDatos1() {
    document.getElementById("demo1").innerHTML =
    datos1[0].dato1 + " " + datos1[0].caract1 + "<br>" +
    datos1[1].dato1 + " " + datos1[1].caract1;
    
  }
  
  //----------------------------------------------------------------------//
  
  const datos2 = [
    {dato2:"Nombre y Apellido:", caract2:"Duarte Dario."},
    {dato2:"edad:", caract2:"48."},
   
  ];
  function displayDatos2() {
    document.getElementById("demo2").innerHTML =
    datos2[0].dato1 + " " + datos2[0].caract1 + "<br>" +
    datos2[1].dato1 + " " + datos2[1].caract1;
    
  }
  
  