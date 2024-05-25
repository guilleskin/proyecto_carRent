







function concactar(){

    function Persona(nombre,apellido,telefono,email,ciudad){
        this.nombre=nombre;
        this.apellido=apellido;
        this.telefono=telefono;
        this.email=email;
        this.ciudad=ciudad;
    }
    

    let nombreContactar = document.getElementById("nombre").value;
    let apellidoContactar = document.getElementById("apellido").value;
    let telefonoContactar = document.getElementById("telefono").value;
    let emailContactar = document.getElementById("email").value;
    let ciudadContactar = document.getElementById("ciudad").value;

    if(nombre=="" || apellido=="" || telefono=="" ||email=="" || ciudad==""){


    alert("todos los campos son obligatorios");

    }else{

        nuevoSujeto = new Persona(nombreContactar,apellidoContactar,telefonoContactar,emailContactar,ciudadContactar)

        console.log(nuevoSujeto);

        var dbContactos = [];
        function agregar(){
            dbContactos.push(nuevoSujeto);
            console.log(dbContactos);


        }
        alert("contacto guardado, uno de nuestros agentes lo contactara.")

    }

}