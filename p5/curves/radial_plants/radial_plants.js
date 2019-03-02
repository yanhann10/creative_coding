let n_spoke = 10;
let redux = 10;
function setup() {
    createCanvas(windowWidth, windowHeight);
}


function draw() {
    background(255);
    stroke(0);
    translate(windowWidth / 2, 200)
    triangle(0,0,10,0,5,5)
    
    // for (let i = 0; i < 5; i++) {
    //     push();
    //     translate(0, 20*(i)*Math.sqrt(3));
    //     scale(i);
    //     triangle(0, 20 , 
    //         20, 20, 
    //         10, 0);
    //     pop();
    // }

}


// class Feather {
//     //isolines
//     constructor(tempX, tempY, tempN, tempR, tempS ){
//         this.x = tempX;
//         this.y = tempY;
//         this.n = tempN;
//         this.r = tempR; //rotate
//         this.s= tempS; //scale
//     }

//     display() {

//         beginShape();
//         push();
//         scale(this.s);
//         translate(this.x, this.y);
//         rotate(radians(this.r));
//         for (let i = 0; i < this.n; i++) {

//             translate(5, -0.1);
//             noFill();
//             stroke(255, random(50, 150), 0);
//             bezier(90 - random(0, 10) - i / 5, 3 + random(0, 10) + i / 5, 47, 52, 37, 49, 6, 50);
//             bezier(90 + random(0, 10), 100 - random(0, 10) - i / 5, 68, 72, 35, 57, 0, 50);

//         }
//         pop();
//         endShape();
//     }
// }