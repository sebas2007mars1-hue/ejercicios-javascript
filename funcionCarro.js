const carro = {
    marca:"Toyota",
    modelo:"2020",
    propietario:{
        nombre:"Carlos",
        edad:35
    }
};

function mostrar(c){
    console.log(c.marca, c.propietario.nombre);
}

mostrar(carro);