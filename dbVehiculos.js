


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




