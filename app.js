const PIEDRA = "piedra";
const PAPEL = "papel";
const TIJERA = "tijera";

const EMPATE = 0;
const GANAS = 1;
const PIERDES = 2;

const piedraBtn = document.getElementById("piedra");
const papelBtn = document.getElementById("papel");
const tijeraBtn = document.getElementById("tijera");
const textoResultado = document.getElementById("texto-inicial");
const imagenUsuario = document.getElementById("img-usuario");
const imagenOrdenador = document.getElementById("img-ordenador");

piedraBtn.addEventListener("click", () => {
    juego(PIEDRA);
});

papelBtn.addEventListener("click", () => {
    juego(PAPEL);
});

tijeraBtn.addEventListener("click", () => {
    juego(TIJERA);
});


function juego(opcionUsuario) {

    imagenUsuario.src = "./img/"+opcionUsuario+".png";

    textoResultado.innerHTML = "Eligiendo...";

    const interval = setInterval(function() {
        const opcionOrdenador = calcOpcionOrdenador();
        imagenOrdenador.src = "./img/"+opcionOrdenador+".png";
    }, 200);

    setTimeout(function() {

        clearInterval(interval);

        const opcionOrdenador = calcOpcionOrdenador();

        const resultado = calcResultado(opcionOrdenador, opcionUsuario);
    
        
        imagenOrdenador.src = "./img/"+opcionOrdenador+".png";
    
        switch(resultado) {
            case EMPATE:
                textoResultado.innerHTML = "¡Empate!";
                break;
            case GANAS:
                textoResultado.innerHTML = '¡Has ganado!';
                break;
            case PIERDES:
                textoResultado.innerHTML = 'Has perdido :(';
                break;
        }
    }, 2000);
    
    
};

function calcOpcionOrdenador() {
    const numero = Math.floor(Math.random() * 3);
    switch (numero){
        case 0:
            return PIEDRA;
        case 1:
            return PAPEL;
        case 2:
            return TIJERA;

    }
}


function calcResultado(opcionUsuario, opcionOrdenador) {
        if(opcionUsuario === opcionOrdenador) {
            return EMPATE;
        } else if (opcionUsuario === PIEDRA) {
    
            if(opcionOrdenador === PAPEL) return PIERDES;
            if(opcionOrdenador === TIJERA) return GANAS;
    
        } else if(opcionUsuario === PAPEL) {
            
            if(opcionOrdenador === TIJERA) return PIERDES;
            if(opcionOrdenador === PIEDRA) return GANAS;
    
        } else if(opcionUsuario === TIJERA) {
    
            if(opcionOrdenador === PIEDRA) return PIERDES;
            if(opcionOrdenador === PAPEL) return GANAS;
        }
    };