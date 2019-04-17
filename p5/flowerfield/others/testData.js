let xpos,ypos;
let table;
let buffer=50;
let fruits=[];
 function preload() {
    table = loadTable("data/df_tsne_output.csv", "header");
  }
  
  function setup() {
    createCanvas(800, 660);
    loadData();
  }
  
  
  
  function draw() {
    for (var i = 0; i < table.getRowCount() / 10; i++) {
        fruits[i].display
    }
  }    
/*-----------------------------------------*/

function loadData() {
    for (var i = 0; i < table.getRowCount() / 10; i++) {
      row = table.getRow(i);
      xpos = map(row.get('x1'), -25, 30, buffer, 800 - buffer);
      ypos = map(row.get('x2'), -25, 30, buffer, 400 - buffer);
      fruits[i] = new Fruit(xpos, ypos, 20)
    }
  }