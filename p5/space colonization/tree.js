// Adapted from Coding Train by Daniel Shiffman https://youtu.be/kKT0v3qhIQY

// TODO 
// [ ] vein thickening
// [ ] varying alpha
// [ ] flower


function inside(point, vs) {
  // ray-casting algorithm based on
  // https://wrf.ecse.rpi.edu/Research/Short_Notes/pnpoly.html/pnpoly.html
  
  var x = point[0], y = point[1];
  
  var inside = false;
  for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
      var xi = vs[i][0], yi = vs[i][1];
      var xj = vs[j][0], yj = vs[j][1];
      
      var intersect = ((yi > y) != (yj > y))
          && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
      if (intersect) inside = !inside;
  }
  
  return inside;
};


function Tree(tempPolygon, tempX,tempY) {
  this.leaves = [];
  this.branches = [];
  this.posX=tempX;
  this.posY=tempY;
  this.polygon=tempPolygon
 
  var pts=[]
  for (var j = 0; j < 2900; j++) {
    pts.push([random(50,350),random(50,378)]);

    if (inside(pts[j], this.polygon)){
      this.leaves.push(new Leaf(pts[j][0],pts[j][1]))
      
      }
  }

  var pos = createVector(this.posX, this.posY); //modify for tree initial position
  var dir = createVector(0, -1);
  var root = new Branch(null, pos, dir);
  this.branches.push(root);
  var current = root;
  var found = false;
  while (!found) {
    for (var i = 0; i < this.leaves.length; i++) {
      var d = p5.Vector.dist(current.pos, this.leaves[i].pos);
      if (d < max_dist) {
        found = true;
      }
    }
    if (!found) {
      var branch = current.next();
      current = branch;
      this.branches.push(current);
    }
  }

  this.grow = function() {
    for (var i = 0; i < this.leaves.length; i++) {
      var leaf = this.leaves[i];
      var closestBranch = null;
      var record = max_dist;
      for (var j = 0; j < this.branches.length; j++) {
        var branch = this.branches[j];
        var d = p5.Vector.dist(leaf.pos, branch.pos);
        if (d < min_dist) {
          leaf.reached = true;
          closestBranch = null;
          break;
        } else if (d < record) {
          closestBranch = branch;
          record = d;
        }
      }

      if (closestBranch != null) {
        var newDir = p5.Vector.sub(leaf.pos, closestBranch.pos);
        newDir.normalize();
        closestBranch.dir.add(newDir);
        closestBranch.count++;
      }
    }

    for (var i = this.leaves.length - 1; i >= 0; i--) {
      if (this.leaves[i].reached) {
        this.leaves.splice(i, 1);
      }
    }

    for (var i = this.branches.length - 1; i >= 0; i--) {
      var branch = this.branches[i];
      if (branch.count > 0) {
        branch.dir.div(branch.count + 1);
        this.branches.push(branch.next());
        branch.reset();
      }
    }
  };

  this.thicken_branch = function(){

    for (br in this.branches){
      console.log(br)
      console.log(br.parent)
    }
  }

  this.show = function() {
    for (var i = 0; i < this.leaves.length; i++) {
      this.leaves[i].show();
    }

    for (var i = 0; i < this.branches.length; i++) {
      this.branches[i].show();
    }
  };
}
