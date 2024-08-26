const spotlight = document.querySelector('.spotlight');
const content = document.querySelector('.content');
let posX = 0;
let posY = 0;

document.addEventListener('mousemove', function(e) {
    // Actualiza la posición de la linterna
    const x = e.clientX;
    const y = e.clientY;
    spotlight.style.left = `${x}px`;
    spotlight.style.top = `${y}px`;
});

document.addEventListener('wheel', function(e) {
    // Desplazamiento manual usando la rueda del mouse
    posX -= e.deltaX;
    posY -= e.deltaY;
    
    // Restringe el desplazamiento para que no se salga del área del contenido
    posX = Math.max(Math.min(posX, 0), window.innerWidth - content.offsetWidth);
    posY = Math.max(Math.min(posY, 0), window.innerHeight - content.offsetHeight);

    // Mueve el contenido
    content.style.transform = `translate(${posX}px, ${posY}px)`;
});
