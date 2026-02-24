function info({propietario:{nombre, edad}}){
    console.log(nombre, edad);
}

info({
    propietario:{nombre:"Carlos", edad:35}
});