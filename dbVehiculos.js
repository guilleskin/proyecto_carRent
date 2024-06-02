


/*creacion de la db */

/*sera una base de datos de 50 vehiculos  */



const dbVehiculos = [
    {
        
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        camioneta:"no",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4-rojo.jpg",
        precio:300000,


    },
    {
        
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        camioneta:"no",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4-blanco.jpg",
        precio:300000,
    },
    {
        
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        camioneta:"no",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4-negro.jpg",
        precio:300000,
    },
    {
        
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        camioneta:"no",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4-gris.jpg",
        precio:300000,
    },
    {
        
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        camioneta:"no",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4-azul.jpg",
        precio:300000,
    },
   
    {
        
        marca:"toyota",
        modelo:"yaris",
        automovil:"si",
        camioneta:"no",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-yaris-rojo.jpg",
        precio:300000,

    },
    {
        
        marca:"toyota",
        modelo:"yaris",
        automovil:"si",
        camioneta:"no",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-yaris-blanco.jpg",
        precio:300000,
    },
    {
        
        marca:"toyota",
        modelo:"yaris",
        automovil:"si",
        camioneta:"no",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-yaris-negro.jpg",
        precio:300000,
    },
    {
        
        marca:"toyota",
        modelo:"yaris",
        automovil:"si",
        camioneta:"no",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-yaris-gris.jpg",
        precio:300000,
    },
    {
        
        marca:"toyota",
        modelo:"yaris",
        automovil:"si",
        camioneta:"no",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-yaris-azul.jpg",
        precio:300000,
    },
    {
        
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        camioneta:"no",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix-rojo.jpg",
        precio:300000,

    },
    {
        
        
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        camioneta:"no",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix-blanco.jpg",
        precio:300000,
    },
    {
        
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        camioneta:"no",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix-negro.jpg",
        precio:300000,
    },
    {
        
        
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        camioneta:"no",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix-gris.jpg",
        precio:300000,
    },
    {
        
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        camioneta:"no",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix-azul.jpg",
        precio:300000,
    },
    {
        
        marca:"renault",
        modelo:"duster",
        automovil:"no",
        camioneta:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-duster-rojo.jpg",
        precio:400000,
    },
    {
        
        
        marca:"renault",
        modelo:"duster",
        automovil:"no",
        camioneta:"si",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-duster-blanco.jpg",
        precio:400000,

    },
    {
        
        marca:"renault",
        modelo:"duster",
        automovil:"no",
        camioneta:"si",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-duster-negro.jpg",
        precio:400000,
    },
    {
        
        
        marca:"renault",
        modelo:"duster",
        automovil:"no",
        camioneta:"si",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-duster-gris.jpg",
        precio:400000,
    },
    {
        
        marca:"renault",
        modelo:"duster",
        automovil:"no",
        camioneta:"si",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-duster-azul.jpg",
        precio:400000,
    },
    {
        
        marca:"renault",
        modelo:"kwid",
        automovil:"si",
        camioneta:"no",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid-rojo.jpg",
        precio:300000,

    },
    {
        
        
        marca:"renault",
        modelo:"kwid",
        automovil:"si",
        camioneta:"no",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid-blanco.jpg",
        precio:300000,


    },
    {
        
        
        marca:"renault",
        modelo:"kwid",
        automovil:"si",
        camioneta:"no",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid-negro.jpg",
        precio:300000,
    },
    {
        
        
        marca:"renault",
        modelo:"kwid",
        automovil:"si",
        camioneta:"no",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid-gris.jpg",
        precio:300000,

    },
    {
        
        
        marca:"renault",
        modelo:"kwid",
        automovil:"si",
        camioneta:"no",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid-azul.jpg",
        precio:300000,
    },
    {
        
        
        marca:"toyota",
        modelo:"hilux",
        automovil:"no",
        camioneta:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-hilux-rojo.jpg",
        precio:400000,
    },
    {
        
        
        marca:"toyota",
        modelo:"hilux",
        automovil:"no",
        camioneta:"si",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-hilux-blanco.jpg",
        precio:400000,

    },
    {
        
        
        marca:"toyota",
        modelo:"hilux",
        automovil:"no",
        camioneta:"si",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-hilux-negro.jpg",
        precio:400000,
    },
    {
        
        
        marca:"toyota",
        modelo:"hilux",
        automovil:"no",
        camioneta:"si",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-hilux-gris.jpg",
        precio:400000,
    },
    {
        
        
        marca:"toyota",
        modelo:"hilux",
        automovil:"no",
        camioneta:"si",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-hilux-azul.jpg",
        precio:400000,
    },
    {
        
        
        marca:"toyota",
        modelo:"prado",
        automovil:"no",
        camioneta:"si",
        color:"rojo",
        cilindraje:"4.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-prado-rojo.jpg",
        precio:500000,


    },
    {
        
        
        marca:"toyota",
        modelo:"prado",
        automovil:"no",
        camioneta:"si",
        color:"blanco",
        cilindraje:"4.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-prado-blanco.jpg",
        precio:500000,
    },
    {
        
        
        marca:"toyota",
        modelo:"prado",
        automovil:"no",
        camioneta:"si",
        color:"negro",
        cilindraje:"4.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-prado-negro.jpg",
        precio:500000,
    },
    {
        
        
        marca:"toyota",
        modelo:"prado",
        automovil:"no",
        camioneta:"si",
        color:"gris",
        cilindraje:"4.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-prado-gris.jpg",
        precio:500000,
    },
    {
        
        
        marca:"toyota",
        modelo:"prado",
        automovil:"no",
        camioneta:"si",
        color:"azul",
        cilindraje:"4.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-prado-azul.jpg",
        precio:500000,
    },
    {
        
        
        marca:"mazda",
        modelo:"3",
        automovil:"si",
        camioneta:"no",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/mazda3-rojo.jpg",
        precio:300000,

    },
   
    {
        
        
        marca:"mazda",
        modelo:"3",
        automovil:"si",
        camioneta:"no",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/mazda3-negro.jpg",
        precio:300000,
    },
    {
        
        
        marca:"mazda",
        modelo:"3",
        automovil:"si",
        camioneta:"no",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/mazda3-gris.jpg",
        precio:300000,
    },
    {
        
        
        marca:"mazda",
        modelo:"3",
        automovil:"si",
        camioneta:"no",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/mazda3-azul.jpg",
        precio:300000,
    },
    {
        
        
        marca:"mazda",
        modelo:"3",
        automovil:"si",
        camioneta:"no",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/mazda3-blanco.jpg",
        precio:300000,
    },
    {
        
        
        marca:"ford",
        modelo:"mustang",
        automovil:"si",
        camioneta:"no",
        color:"rojo",
        cilindraje:"5.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-mustang-rojo.jpg",
        precio:500000,

    },
    {
        
        
        marca:"ford",
        modelo:"mustang",
        automovil:"si",
        camioneta:"no",
        color:"gris",
        cilindraje:"5.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-mustang-gris.jpg",
        precio:500000,
    },
    {
        
        
        marca:"ford",
        modelo:"mustang",
        automovil:"si",
        camioneta:"no",
        color:"azul",
        cilindraje:"5.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-mustang-azul.jpg",
        precio:500000,
    },
    {
        
        
        marca:"ford",
        modelo:"mustang",
        automovil:"si",
        camioneta:"no",
        color:"blanco",
        cilindraje:"5.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-mustang-blanco.jpg",
        precio:500000,
    },
    {
        
    
        marca:"ford",
        modelo:"mustang",
        automovil:"si",
        camioneta:"no",
        color:"negro",
        cilindraje:"5.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-mustang-negro.jpg",
        precio:500000,
    },
    {
        
        
        marca:"ford",
        modelo:"fiesta",
        automovil:"si",
        camioneta:"no",
        color:"rojo",
        cilindraje:"1.6",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-fiesta-rojo.jpg",
        precio:300000,
    },
    {
        
        
        marca:"ford",
        modelo:"fiesta",
        automovil:"si",
        camioneta:"no",
        color:"azul",
        cilindraje:"1.6",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-fiesta-azul.jpg",
        precio:300000,
    },
    {
        
        
        marca:"ford",
        modelo:"fiesta",
        automovil:"si",
        camioneta:"no",
        color:"gris",
        cilindraje:"1.6",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-fiesta-gris.jpg",
        precio:300000,
    },
    {
        
        
        marca:"ford",
        modelo:"fiesta",
        automovil:"si",
        camioneta:"no",
        color:"blanco",
        cilindraje:"1.6",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-fiesta-blanco.jpg",
        precio:300000,
    },
    {
        
        
        marca:"ford",
        modelo:"fiesta",
        automovil:"si",
        camioneta:"no",
        color:"negro",
        cilindraje:"1.6",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-fiesta-negro.jpg",
        precio:300000,
    }
];







/* para guardar los datos del login (ingresar vehiculo) */


function guardar(){

    function vehiculo(marca,modelo,automovil,camioneta,color,cilindraje,aireAcondicionado,gps,airbag,img,precio){
        this.marca=marca;
        this.modelo=modelo;
        this.automovil=automovil;
        this.camioneta=camioneta;
        this.color=color;
        this.cilindraje=cilindraje;
        this.aireAcondicionado=aireAcondicionado;
        this.gps=gps;
        this.airbag=airbag;
        this.img=img;
        this.precio=precio;
    }
    

    
    let marcaGuardar = document.getElementById("marca").value;
    let modeloGuardar = document.getElementById("modelo").value;
    let automovilGuardar = document.getElementById("automovil").value;
    let camionetaGuardar = document.getElementById("camioneta").value;
    let colorGuardar = document.getElementById("color").value;
    let cilindrajeGuardar = document.getElementById("cilindraje").value;
    let aireAcondicionadoGuardar = document.getElementById("aireAcondicionado").value;
    let gpsGuardar = document.getElementById("gps").value;
    let airbagGuardar = document.getElementById("airbag").value;
    let imgGuardar = document.getElementById("foto").value;
    let precioGuardar = document.getElementById("precio").value;

    if(marcaGuardar=="" || modeloGuardar=="" || automovilGuardar=="" ||camionetaGuardar=="" || colorGuardar=="" || cilindrajeGuardar=="" || aireAcondicionadoGuardar=="" || gpsGuardar=="" || airbagGuardar=="" || imgGuardar=="" || precioGuardar==""){


    alert("todos los campos son obligatorios");

    }else{

        nuevoVehiculo = new vehiculo(marcaGuardar,modeloGuardar,automovilGuardar,camionetaGuardar,colorGuardar,cilindrajeGuardar,aireAcondicionadoGuardar,gpsGuardar,airbagGuardar,imgGuardar,precioGuardar)

        console.log(nuevoVehiculo);

        var dbVehiculos = [];
        function agregar(){
            dbVehiculos.push(nuevoVehiculo);
            console.log(dbVehiculos);
            alert("vehiculo guardado !")

            windows.location.href="vehiculosPg1.html";
        
        }
        

    }





    const contenido = document.getElementById("contenido");

window.addEventListener("load", () => {
  const vehiculosLink = document.getElementById("vehiculosPg1.html");

  vehiculosLink.addEventListener("click", (event) => {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

    contenido.innerHTML = ""; // Limpiar el contenido actual

    setTimeout(() => {
      contenido.innerHTML = `<object data="vehiculospag1.html" type="text/html"></object>`;
    }, 3000);
  });
});

    

}
