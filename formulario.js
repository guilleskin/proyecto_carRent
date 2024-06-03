//button guardar

const formulario = document.getElementById("productForm");

formulario.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    const marca = document.getElementById("marca").value;
    const modelo = document.getElementById("modelo").value;
    const categoria = document.getElementById("categoria").value;
    const imagen = document.getElementById("imagen").value;
    const color = document.getElementById("color").value;
    const aireAcondicionado = document.getElementById("aireAcondicinado").value;
    const gps = document.getElementById("gps").value;
    const airbag = document.getElementById("airbag").value;
    const precio = document.getElementById("precio").value;
    const codigo = document.getElementById("codigo").value;

    // Validar los campos de entrada
    if (marca === "" || modelo === "" || categoria === ""|| imagen === "" || color === "" || aireAcondicionado === "" || gps === "" || airbag === "" || precio === "" || codigo === "") {
        alert("Por favor, complete todos los campos.");
        return;
    }

    //revisa las condiciones del "codigo"
    if (codigo.length < 8) {
        alert("El campo 'codigo' debe tener al menos 8 caracteres.");
          //redirigir a la pagina indicaciones
          window.location.href = "indicaciones.html";
        return;



    }
    //revisa que el "codigo" tenga una mayuscula y una minuscula
    if (!/[a-z]/.test(codigo) || !/[A-Z]/.test(codigo)) {
        alert("El campo 'codigo' debe tener al menos una mayuscula y una minuscula.");
          //redirigir a la pagina indicaciones
          window.location.href = "indicaciones.html";
        return;

        
    }
    //revisa que el "codigo" tenga al menos 2 numeros
    if (!/\d{2}/.test(codigo)) {
        alert("El campo 'codigo' debe tener al menos 2 digitos.");
          //redirigir a la pagina indicaciones
          window.location.href = "indicaciones.html";
        return;

       
    }
    


    

    alert("Formulario enviado correctamente.");

     //redirigir a la pagina indicaciones
     window.location.href = "vehiculosPg1.html";
});



/*


function guardar(){

    function vehiculo(marca,modelo,categoria,imagen,color,aireAcondicionado,gps,airbag,precio,codigo){
        this.marca=marca;
        this.modelo=modelo;
        this.categoria=categoria;
        this.imagen=imagen;
        this.color=color;
        this.aireAcondicionado=aireAcondicionado;
        this.gps=gps;
        this.airbag=airbag;
        this.precio=precio;
        this.codigo=codigo;
    }
    

    
    let marcaGuardar = document.getElementById("marca").value;
    let modeloGuardar = document.getElementById("modelo").value;
    let categoriaGuardar = document.getElementById("categoria").value;
    let imagenGuardar = document.getElementById("imagen").value;
    let colorGuardar = document.getElementById("color").value;
   
    let aireAcondicionadoGuardar = document.getElementById("aireAcondicionado").value;
    let gpsGuardar = document.getElementById("gps").value;
    let airbagGuardar = document.getElementById("airbag").value;
    let precioGuardar = document.getElementById("precio").value;
    let codigoGuardar = document.getElementById("codigo").value;

    if(marcaGuardar=="" || modeloGuardar=="" || categoriaGuardar=="" ||imagenGuardar=="" || colorGuardar=="" || aireAcondicionadoGuardar=="" || gpsGuardar=="" || airbagGuardar=="" ||  precioGuardar=="" || codigoGuardar){


    alert("todos los campos son obligatorios");

    }else{

        nuevoVehiculo = new vehiculo(marcaGuardar,modeloGuardar,categoriaGuardar,imagenGuardar,colorGuardar,aireAcondicionadoGuardar,gpsGuardar,airbagGuardar,precioGuardar,codigoGuardar)

        console.log(nuevoVehiculo);

            alert("vehiculo guardado !")

            windows.location.href="vehiculosPg1.html";
        
        }
        

    }




*/
