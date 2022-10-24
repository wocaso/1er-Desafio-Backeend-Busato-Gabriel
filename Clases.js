class usuario{
    constructor(nombre, apellido,libros,mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
        

    }

    getFullName(){
        return `${this.nombre} ${this.apellido}`
    }
    addMascota(nombreMascota){
        this.mascotas.push(nombreMascota);
    }

    countMascotas(){

        let n = this.mascotas.length
        return n;
        
    }

    addBook(nombreLibro, autorLibro){
        this.libros.push({nombre: nombreLibro, autor: autorLibro})
    }

    getBookNames(){
        let bookNames = this.libros.map(item => item.nombre);
        return bookNames;
    }
}


let p = new usuario("Carlos","Lopez",[{nombre: "Harry Potter", autor:"J. K. Rowling"}],["puflito", "mechitas"])



console.log(p.getFullName());

p.addMascota("Luna");

console.log(p.countMascotas());

p.addBook("El resplandor", "Stephen King");

console.log(p.getBookNames());

console.log(p);