


/*creacion de la db */

/*sera una base de datos de 50 vehiculos  */



const dbVehiculos = [
    {
        
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4.png",
        precio:280000,


    },
    {
        
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4.png",
        precio:280000,
    },
    {
        
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4.png",
        precio:280000,
    },
    {
        
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4.png",
        precio:280000,
    },
    {
        
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4.png",
        precio:280000,
    },
    {
        
        marca:"toyota",
        modelo:"yaris",
        automovil:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-yaris.png",
        precio:350000,

    },
    {
        
        marca:"toyota",
        modelo:"corolla",
        automovil:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-corolla.png",
        precio:280000,

    },
    {
        
        marca:"toyota",
        modelo:"a4",
        automovil:"si",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-a4.png",
        precio:500000,
    },
    {
        
        marca:"toyota",
        modelo:"a4",
        automovil:"si",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-a4.png",
        precio:500000,
    },
    {
        
        marca:"toyota",
        modelo:"a4",
        automovil:"si",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-a4.png",
        precio:500000,
    },
    {
        
        marca:"toyota",
        modelo:"a4",
        automovil:"si",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-a4.png",
        precio:500000,
    },
    {
        
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix.png",
        precio:280000,

    },
    {
        
        
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix.png",
        precio:280000,
    },
    {
        
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix.png",
        precio:280000,
    },
    {
        
        
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix.png",
        precio:280000,
    },
    {
        
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix.png",
        precio:280000,
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
        img:"img/renault-duster.png",
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
        img:"img/renault-duster.png",
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
        img:"img/renault-duster.png",
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
        img:"img/renault-duster.png",
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
        img:"img/renault-duster.png",
        precio:400000,
    },
    {
        
        marca:"renault",
        modelo:"kwid",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid.png",
        precio:280000,

    },
    {
        
        
        marca:"renault",
        modelo:"kwid",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid.png",
        precio:280000,


    },
    {
        
        
        marca:"renault",
        modelo:"kwid",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid.png",
        precio:280000,
    },
    {
        
        
        marca:"renault",
        modelo:"kwid",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid.png",
        precio:280000,

    },
    {
        
        
        marca:"renault",
        modelo:"kwid",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid.png",
        precio:280000,
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
        img:"img/toyota-hilux.png",
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
        img:"img/toyota-hilux.png",
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
        img:"img/toyota-hilux.png",
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
        img:"img/toyota-hilux.png",
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
        img:"img/toyota-hilux.png",
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
        img:"img/toyota-prado.png",
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
        img:"img/toyota-prado.png",
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
        img:"img/toyota-prado.png",
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
        img:"img/toyota-prado.png",
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
        img:"img/toyota-prado.png",
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
        img:"img/mazda-3.png",
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
        img:"img/mazda-3.png",
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
        img:"img/mazda-3.png",
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
        img:"img/mazda-3.png",
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
        img:"img/mazda-3.png",
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
        img:"img/mazda-3.png",
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
        img:"img/ford-mustang.png",
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
        img:"img/ford-mustang.png",
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
        img:"img/ford-mustang.png",
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
        img:"img/ford-mustang.png",
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
        img:"img/ford-mustang.png",
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
        img:"img/ford-fiesta.png",
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
        img:"img/ford-fiesta.png",
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
    }
];










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

    if(nombre=="" || apellido=="" || telefono=="" ||email=="" || ciudad==""){


    alert("todos los campos son obligatorios");

    }else{

        nuevoVehiculo = new vehiculo(marcaGuardar,modeloGuardar,automovilGuardar,camionetaGuardar,colorGuardar,cilindrajeGuardar,aireAcondicionadoGuardar,gpsGuardar,airbagGuardar,imgGuardar,precioGuardar)

        console.log(nuevoVehiculo);

        var dbVehiculos = [];
        function agregar(){
            dbVehiculos.push(nuevoVehiculo);
            console.log(dbVehiculos);


        }
        alert("vehiculo guardado !")

    }












    let vehiculoDiv = document.getElementById("vehiculo");
    vehiculoDiv.innerHTML = `
        <h2>Vehículo Guardado</h2>
        <p>Marca: ${marca}</p>
        <p>Modelo: ${modelo}</p>
        <p>Automóvil: ${automovil}</p>
        <p>Camioneta: ${camioneta}</p>
        <p>Color: ${color}</p>
        <p>Cilindraje: ${cilindraje}</p>
        <p>Aire Acondicionado: ${aireAcondicionado}</p>
        <p>GPS: ${gps}</p>
        <p>Airbag: ${airbag}</p>
        <p>Imagen: ${img}</p>
        <p>Precio: ${precio}</p>
    `;

    alert("vehículo guardado");

}
