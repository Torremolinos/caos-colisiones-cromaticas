import {balls} from "./index.js";
const canvas = document.querySelector('canvas');
export const ctx = canvas.getContext('2d');
//coge tamaño segun despliegas
export const width = canvas.width = window.innerWidth;
export const height = canvas.height = window.innerHeight;

export const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomRgb = () => {
    return `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
}


export const loop = () => {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);

    
    
    for(let ball of balls){
        ball.draw();
        ball.update();
        ball.collisionDetect();
    }
    
    requestAnimationFrame(loop);
}