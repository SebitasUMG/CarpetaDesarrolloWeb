console.log('Hola Mundo');
const documentRef = document.getElementById('container').addEventListener('click', () => {
    console.log('me estas tocando');
})

class HolaMundo {

    imprimirHola(value) {
        if(value) console.log('HolaMundo 2');
    }
}


const instancia = new HolaMundo;

instancia.imprimirHola(true);