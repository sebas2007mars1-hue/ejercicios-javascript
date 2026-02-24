const carro = {
    propietario:{nombre:"Carlos", edad:35}
};

const copia = {
    ...carro,
    propietario:{...carro.propietario, edad:50}
};

console.log(copia);