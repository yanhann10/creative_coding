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

##

## More references

[syntax](https://www.w3schools.com/tags/ref_canvas.asp)
