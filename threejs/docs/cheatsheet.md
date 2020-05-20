#ThreeJS cheatsheet

## Texture

```js
const loader = new THREE.TextureLoader();
const texture = loader.load("equirectangular-image.jpg");
const material = new THREE.MeshBasicMaterial({
  map: texture,
});
```
