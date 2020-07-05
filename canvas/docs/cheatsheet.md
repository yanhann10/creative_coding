#Canvas cheatsheet

## Shapes

```js
c.fillRect(x, y, w, h); //rectangle

c.beginPath();
c.arc(x, y, r, startAngle, endAngle); //arc
c.stroke();
c.closePath();
```

## Text

```js
c.fillText("<Txt>", u, v);
```

## Style

```js
c.strokeStyle = "purple";
c.stroke();

c.fillStyle = "purple";
c.fill();
```

## Reset transformation

```js
c.save();
//translation, rotation etc
c.restore();
```

## Animation

```js
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);
  //create some shapes
}
animate();
```

## Trailing effect

```js
c.fillStyle = "rgba(255,255,255,0.05)";
```

## gaussian random

```js
const randn_bm = () => {
  var u = 0,
    v = 0;
  while (u === 0) u = Math.random(); //Converting [0,1) to (0,1)
  while (v === 0) v = Math.random();
  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
};
```

## More references

[syntax](https://www.w3schools.com/tags/ref_canvas.asp)
