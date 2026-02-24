const carro = {
    propietario:{
        nombre:"Carlos",
        edad:35
    }
};

const { propietario:{ nombre, edad } } = carro;

console.log(nombre, edad);