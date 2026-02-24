function libro({titulo, autor:{nombre}, editorial:{nombre:editorial}}){
    console.log("Libro:", titulo, "Autor:", nombre, "Editorial:", editorial);
}

libro({
    titulo:"JS",
    autor:{nombre:"Ana"},
    editorial:{nombre:"Planeta"}
});