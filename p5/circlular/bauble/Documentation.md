The bauble class has 3 forms and multiples layouts including radial, fan, loom, scatter, etc.

Sample codes to implement the fan layout

```javascript
//in bauble_system.js
add_bauble() {

        for (let i = 0; i < this.n; i++) {
            this.baubles.push(new bauble(0, 0, 2,
                random(6, 10), 2, //starting size, #circles
                0, 1)); //when last param is 0 all lines are colorful
        }
//in sketch.js setup()
mybaubleSystem = new BaubleSystem(8,120,'fan');
```

ample codes to implement the loom layout

```javascript
//in sketch.js setup()
    mybaubleSystem1 = new BaubleSystem(10,120,'fan');
    mybaubleSystem2 = new BaubleSystem(10,120,'fan');
//in sketch.js draw()
    push();
    mybaubleSystem1.add_bauble();
    mybaubleSystem1.display();
    pop();
    rotate(radians(-180));
    mybaubleSystem2.add_bauble();
    mybaubleSystem2.display();
    noLoop()
```