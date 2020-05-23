#ThreeJS cheatsheet

## Camera

```js
// perspective camera: distant objects have smaller sizes
camera = new THREE.PerspectiveCamera(<field of view>, window.innerWidth / window.innerHeight, <near>, <far>);

// orthographic camera: distant objects have the same sizes
camera = new THREE.OrthographicCamera(<left>, <right>, <top>,<bottom>,<near>, <far>);
```

### Lighting

```js
//natural light with a diffusion feel
var hemiLight = new THREE.HemisphereLight(<ground color>,<light color>, <intensity>);
```

## Texture

```js
const loader = new THREE.TextureLoader();
const texture = loader.load("equirectangular-image.jpg");
const material = new THREE.MeshBasicMaterial({
  map: texture,
});
```

## Fog

```js
// linear fogwith near and far property
scene.fog = new THREE.Fog(0xffffff, 0.015, 100);

// nonlinear fog
scene.fog = new THREE.FogExp2(0xffffff, 0.01);
```

## Load Blender Objects

```js
const loader = ((_) => {
  const loader = new THREE.OBJLoader();
  loader.load(
    "r2-d2.obj",
    (object) => {
      object.name = "";
      object.scale.set(0.05, 0.05, 0.05);
      scene.add(object);
    },
    (xhr) => {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    (err) => {
      console.log("Error:", err);
    }
  );
  return loader;
})();
```

## Data Gui Controls

```js
//define controls
const controls = {
  lightColor: "#fff",
  rotate: false,
};

//define range
const gui = ((_) => {
  const gui = new dat.GUI();
  gui.addColor(controls, "lightColor").onChange((e) => {
    pointLight.color = new THREE.Color(e);
  });
  return gui;
})();

//continuous control
const light = new THREE.PointLight(controls.lightColor);

//checkbox control
function render() {
  requestAnimationFrame(render);
  stats.update();

  if (controls.rotate) {
    scene.rotation.y += 0.01;
  }
  renderer.render(scene, camera);
}
render();
```
