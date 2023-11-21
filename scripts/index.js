import { Ball } from "./ball.js";
import { width, height, random, randomRgb, loop } from "./canva.js";
export const balls = []; //array donde metes las bolas.

while (balls.length < 25) {
  const size = random(10, 20);
  let ball = new Ball(
    random(0 + size, width - size),
    random(0 + size, height - size),
    random(-7, 7),
    random(-7, 7),
    randomRgb(),
    size
  );
  balls.push(ball);
}
loop();

