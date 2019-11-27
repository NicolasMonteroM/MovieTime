class Logica {

    constructor(app) {

        this.app = app;
        this.cartelera = [];
        this.proximas = [];

    }

    cargarInfoPeliculas() {

        var P1 = new Pelicula(this, "Doctor Sueño", "2h 31min", "Años después de los eventos de The Shining, Dan Torrance, ahora adulto, conoce a una joven con poderes similares mientras trata de protegerla de un culto conocido como The True Knot que se aprovecha de niños con poderes para permanecer inmortal", "Drama, Fantasía, Horror");
        var P2 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P3 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P4 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P5 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P6 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P7 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P8 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P9 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P10 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P11 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P12 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P13 = new Pelicula(this, titulo, duracion, sinopsis, genero);
        var P14 = new Pelicula(this, titulo, duracion, sinopsis, genero);

        for (var i = 0; i < 14; i++) {

                $("#" + P[i+1] + "_title").text(P[i+1].titulo);
                $("#" + P[i+1] + "_length").text(P[i+1].duracion);
                $("#" + P[i+1] + "_sinopsis").text(P[i+1].sinopsis);
                $("#" + P[i+1] + "_genre").text(P[i+1].genero);
        }
    }
}