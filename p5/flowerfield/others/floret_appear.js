let flowerfield = [];
let n_flo = 500;
let buffer = 20; //avoid shape cut-off at the edge of the screen
let idx = 0; 
let xpos_arr = [];
let ypos_arr = [];

function preload() {
    table = loadTable("data/df_tsne_output.csv", "header");
  }

function setup() {
    angleMode(DEGREES);
    createCanvas(displayWidth, displayHeight);
    // background(48);

    loadData();

}

function draw() {

    background(255);

    
    for (var i = 0; i < flowerfield.length/10; i ++ ) { 
        flowerfield[i].display();
    }

    if(frameCount%200 == 0 ){
        counter += 1
        print("x pos:" + xpos_arr[counter] + "y pos:" + ypos_arr[counter])
        print("x pos:" + xpos_arr[counter] + "y pos:" + ypos_arr[counter])
        var b = new Floret(xpos_arr[counter], ypos_arr[counter],10,20);
        flowerfield.push(b);
      }

      if(frameCount%100 == 0 ){
        rand_num = int(random(0, flowerfield.length-1));
        print("ball that died:" + rand_num)
        for (var i = 0; i < flowerfield.length; i ++ ) { 
            flowerfield[rand_num].die();
         }
      }
}


function bloom(idx) {
	flowerfield[idx].display()
}

function loadData() {
    flowerfield = [];
  
    for (var i = 0; i < table.getRowCount()/10; i++) {
      var row = table.getRow(i);
      var xpos = map(row.get('x1'),-25,30,buffer, displayWidth-buffer);
      var ypos = map(row.get('x2'), -25,30,buffer, displayHeight-buffer);
      xpos_arr.push(xpos)
      ypos_arr.push(ypos)
      
     
        // push adds objects to end of array index
        flowerfield.push(new Floret(xpos, //x
            ypos, //y
            random(20, 80), //number of petals
                random(2, 20), //length
                0) //rotation angle);
        )
      }

    }
  


class Floret {
    constructor(tempX, tempY, tempN, tempL, tempRotate=0) {
        this.x = tempX;
        this.y = tempY;
        this.n = tempN; //number of petals
        this.l = tempL; //length
        this.rotate = tempRotate; //rotation angle
        this.dead = false;
    }



    display() {

        for (var i = 0; i < this.n; i++) {
            let r =30;
            let g = 140; 
            let b =255;
            let d = 0;
            console.log(frameCount)
            let rl=lerp(r, d, frameCount/30);
            let bl=lerp(g, d, frameCount/30)
            let gl=lerp(b, d, frameCount/30)
            fill(rl, bl, gl)
            //set starting position
            //fill(0);
            beginShape();
            let l = 350;
            
            push();
            translate(this.x, this.y); //translate b4 rotate
            rotate(this.rotate);
            stroke(10, 60);
            curveVertex(0, 0);
            curveVertex(0, this.l);
            curveVertex(random(-this.l, this.l), random(1.2 * this.l));
            curveVertex(random(-2 * this.l, 2 * this.l), random(1.5 * this.l));
            endShape();
            pop();

            
        }
        //noLoop();
    }

        die() {
            this.dead = true;
        }

}

