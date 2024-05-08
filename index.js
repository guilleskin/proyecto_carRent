


/*creacion de la db */

/*sera una base de datos de 50 vehiculos  */



const dbVehiculos = [
    {
        id: 1,
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4.png"

    },
    {
        id: 2,
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4.png"
    },
    {
        id: 3,
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4.png"
    },
    {
        id: 4,
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4.png"
    },
    {
        id: 5,
        marca:"audi",
        modelo:"a4",
        automovil:"si",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/audi-a4.png"
    },
    {
        id: 6,
        marca:"toyota",
        modelo:"yaris",
        automovil:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-yaris.png"

    },
    {
        id: 7,
        marca:"toyota",
        modelo:"corolla",
        automovil:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-corolla.png"

    },
    {
        id: 8,
        marca:"toyota",
        modelo:"a4",
        automovil:"si",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-a4.png"
    },
    {
        id: 9,
        marca:"toyota",
        modelo:"a4",
        automovil:"si",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-a4.png"
    },
    {
        id: 10,
        marca:"toyota",
        modelo:"a4",
        automovil:"si",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-a4.png"
    },
    {
        id: 11,
        marca:"toyota",
        modelo:"a4",
        automovil:"si",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-a4.png"
    },
    {
        id: 12,
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix.png"

    },
    {
        
        id: 13,
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix.png"
    },
    {
        id: 14,
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix.png"
    },
    {
        
        id: 15,
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix.png"
    },
    {
        id: 16,
        marca:"chevrolet",
        modelo:"onix",
        automovil:"si",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/chevrolet-onix.png"
    },
    {
        id: 17,
        marca:"renault",
        modelo:"duster",
        automovil:"no",
        camioneta:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-duster.png"
    },
    {
        
        id: 18,
        marca:"renault",
        modelo:"duster",
        automovil:"no",
        camioneta:"si",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-duster.png"
    },
    {
        id: 19,
        marca:"renault",
        modelo:"duster",
        automovil:"no",
        camioneta:"si",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-duster.png"
    },
    {
        
        id: 20,
        marca:"renault",
        modelo:"duster",
        automovil:"no",
        camioneta:"si",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-duster.png"
    },
    {
        id: 21,
        marca:"renault",
        modelo:"duster",
        automovil:"no",
        camioneta:"si",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-duster.png"
    },
    {
        id: 22,
        marca:"renault",
        modelo:"kwid",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid.png"

    },
    {
        
        id: 23,
        marca:"renault",
        modelo:"kwid",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid.png"


    },
    {
        
        id: 24,
        marca:"renault",
        modelo:"kwid",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid.png"
    },
    {
        
        id: 25,
        marca:"renault",
        modelo:"kwid",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid.png"  

    },
    {
        
        id: 26,
        marca:"renault",
        modelo:"kwid",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/renault-kwid.png"
    },
    {
        
        id: 27,
        marca:"toyota",
        modelo:"hilux",
        automovil:"no",
        camioneta:"si",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-hilux.png"
    },
    {
        
        id: 28,
        marca:"toyota",
        modelo:"hilux",
        automovil:"no",
        camioneta:"si",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-hilux.png"

    },
    {
        
        id: 29,
        marca:"toyota",
        modelo:"hilux",
        automovil:"no",
        camioneta:"si",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-hilux.png"
    },
    {
        
        id: 30,
        marca:"toyota",
        modelo:"hilux",
        automovil:"no",
        camioneta:"si",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-hilux.png"
    },
    {
        
        id: 31,
        marca:"toyota",
        modelo:"hilux",
        automovil:"no",
        camioneta:"si",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-hilux.png"
    },
    {
        
        id: 32,
        marca:"toyota",
        modelo:"prado",
        automovil:"no",
        camioneta:"si",
        color:"rojo",
        cilindraje:"4.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-prado.png"


    },
    {
        
        id: 33,
        marca:"toyota",
        modelo:"prado",
        automovil:"no",
        camioneta:"si",
        color:"blanco",
        cilindraje:"4.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-prado.png"
    },
    {
        
        id: 34,
        marca:"toyota",
        modelo:"prado",
        automovil:"no",
        camioneta:"si",
        color:"negro",
        cilindraje:"4.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-prado.png"
    },
    {
        
        id: 35,
        marca:"toyota",
        modelo:"prado",
        automovil:"no",
        camioneta:"si",
        color:"gris",
        cilindraje:"4.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-prado.png"
    },
    {
        
        id: 36,
        marca:"toyota",
        modelo:"prado",
        automovil:"no",
        camioneta:"si",
        color:"azul",
        cilindraje:"4.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/toyota-prado.png"
    },
    {
        
        id: 37,
        marca:"mazda",
        modelo:"3",
        automovil:"si",
        camioneta:"no",
        color:"rojo",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/mazda-3.png"

    },
    {
        
        id: 38,
        marca:"mazda",
        modelo:"3",
        automovil:"si",
        camioneta:"no",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/mazda-3.png"
    },
    {
        
        id: 39,
        marca:"mazda",
        modelo:"3",
        automovil:"si",
        camioneta:"no",
        color:"negro",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/mazda-3.png"
    },
    {
        
        id: 40,
        marca:"mazda",
        modelo:"3",
        automovil:"si",
        camioneta:"no",
        color:"gris",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/mazda-3.png"
    },
    {
        
        id: 41,
        marca:"mazda",
        modelo:"3",
        automovil:"si",
        camioneta:"no",
        color:"azul",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/mazda-3.png"
    },
    {
        
        id: 42,
        marca:"mazda",
        modelo:"3",
        automovil:"si",
        camioneta:"no",
        color:"blanco",
        cilindraje:"2.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/mazda-3.png"
    },
    {
        
        id: 43,
        marca:"ford",
        modelo:"mustang",
        automovil:"si",
        camioneta:"no",
        color:"rojo",
        cilindraje:"5.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-mustang.png"

    },
    {
        
        id: 44,
        marca:"ford",
        modelo:"mustang",
        automovil:"si",
        camioneta:"no",
        color:"gris",
        cilindraje:"5.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-mustang.png"
    },
    {
        
        id: 45,
        marca:"ford",
        modelo:"mustang",
        automovil:"si",
        camioneta:"no",
        color:"azul",
        cilindraje:"5.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-mustang.png"
    },
    {
        
        id: 46,
        marca:"ford",
        modelo:"mustang",
        automovil:"si",
        camioneta:"no",
        color:"blanco",
        cilindraje:"5.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-mustang.png"
    },
    {
        
        id: 47,
        marca:"ford",
        modelo:"mustang",
        automovil:"si",
        camioneta:"no",
        color:"negro",
        cilindraje:"5.0",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-mustang.png"
    },
    {
        
        id: 48,
        marca:"ford",
        modelo:"fiesta",
        automovil:"si",
        camioneta:"no",
        color:"rojo",
        cilindraje:"1.6",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-fiesta.png"
    },
    {
        
        id: 49,
        marca:"ford",
        modelo:"fiesta",
        automovil:"si",
        camioneta:"no",
        color:"azul",
        cilindraje:"1.6",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-fiesta.png"
    },
    {
        
        id: 50,
        marca:"ford",
        modelo:"fiesta",
        automovil:"si",
        camioneta:"no",
        color:"blanco",
        cilindraje:"1.6",
        aireAcondicionado:"si",
        gps:"si",
        airbag:"si",
        img:"img/ford-fiesta.png"
    }
]

/*base de datos con 50 vehiculos*/


for(let i=0;i<dbVehiculos.length;i++){
    if(dbVehiculos[i].automovil=="si"){
        console.log(dbVehiculos[i]);
    }/*
    if(dbVehiculos[i].camioneta=="si"){
        console.log(dbVehiculos[i]);
    }*/
}