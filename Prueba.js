//Manejo de clases con herencia

//Clase padre
class Ropa {
    constructor(marca, precio, color){
        this._marca = marca;
        this._precio = precio;
        this._color = color;
    }
    tallas(){
        return 'Sin tallas disponibles';
    }
}

//Clase hija
class Camiseta extends Ropa{
    constructor(tipo, talla, marca, precio, color){
        super(marca, precio, color);
        this._tipo = tipo;
        this._talla = talla;
    }
}

const cliente = new Ropa('Levis', 1000, 'Negro');
const cliente1 = new Camiseta('Oversice', 'XL', 'Pull', '500', 'Rojo');
console.log(cliente);

console.log(cliente1.tallas());

console.log('');

//Manejo de objetos

const Libros = {
    LaCupula: [{
        Nombre: 'La Cupula',
        Genero: 'Suspenso',
        Autor: 'SK'
    },{
        Paginas: 1074,
        editorial: 'Plaza & janes'
    }],
    Satanas: [{
        Nombre: 'Satanas',
        Genero: 'Suspenso',
        Autor: 'MM'
    },{
        Paginas: 240,
        editorial: 'Planeta'
    }],
    LaCulpaEsDeLaVaca: [{
        Nombre: 'La culpa es de la vaca',
        Genero: 'Fabula',
        Autor: 'Jaime Lopera & Marta Ines'
    },{
        Paginas: 208,
        Editorial: 'Intermedio'
    }]
}
console.log(Libros.LaCulpaEsDeLaVaca);