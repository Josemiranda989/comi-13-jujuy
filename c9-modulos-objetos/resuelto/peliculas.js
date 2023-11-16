let peliculasFavoritas = {
    id:1,
    rating:3,
    awords:4,
    length:250,
    price: 350,
    genere: ["accion","animacion","aventuras","comedia","suspenso"]
}


function PeliculasFavoritas (id,rating,awords,length,price,genere){
    this.id = id;
    this.rating = rating;
    this.awords = awords;
    this.length = length;
    this.price = price;
    this.genere = genere;
}

module.exports = { peliculasFavoritas, PeliculasFavoritas }