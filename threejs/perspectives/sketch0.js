//cylinder

//define gui
const controls = {
  backgroundColor: "#f9cd00",
  lightColor: "#fff",
  rotate: false,
};
const gui = ((_) => {
  const gui = new dat.GUI();
  gui.addColor(controls, "backgroundColor").onChange((e) => {
    backgroundColor = new THREE.Color(e);
  });
  gui.addColor(controls, "lightColor").onChange((e) => {
    directionallight.color = new THREE.Color(e);
  });
  gui.add(controls, "rotate");
  return gui;
})();

//measure fps
const stats = ((_) => {
  const stats = new Stats();
  stats.setMode(0);
  stats.domElement.style.position = "absolute";
  stats.domElement.style.left = "0px";
  stats.domElement.style.top = "0px";
  document.getElementById("stats").appendChild(stats.domElement);
  return stats;
})();

//mise-en-scene
const scene = new THREE.Scene();

const camera = ((_) => {
  const camera = new THREE.PerspectiveCamera(
    45,
    innerWidth / innerHeight,
    0.1,
    1000
  );
  camera.position.set(-6, 3, -2);
  camera.lookAt(scene.position);
  return camera;
})();

var cameraHelper = new THREE.CameraHelper(camera);
scene.add(cameraHelper);

const renderer = ((_) => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(controls.backgroundColor);
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMapEnabled = true;
  document.getElementById("scene").appendChild(renderer.domElement);
  return renderer;
})();

const geo = new THREE.BoxGeometry(2, 2, 2);
const cylinder = new THREE.Group();
const n = 60;
for (let i = 0; i < n; i++) {
  const box = new THREE.Mesh(
    geo,
    new THREE.MeshPhongMaterial({
      color: "white",
    })
  );
  box.castShadow = true;
  box.position.set(
    0,
    Math.cos((i * 2 * Math.PI) / n),
    Math.sin((i * 2 * Math.PI) / n)
  );

  box.scale.set(1, 0.1, 0.03);
  cylinder.add(box);
}
scene.add(cylinder);

const directionallight = ((_) => {
  const directionallight = new THREE.DirectionalLight(controls.lightColor, 1);
  directionallight.position.set(0, 1, 0);
  directionallight.castShadow = true;

  scene.add(directionallight);
  return directionallight;
})();

var helper = new THREE.DirectionalLightHelper(directionallight, 5);
scene.add(helper);

const ambientLight = ((_) => {
  const ambientLight = new THREE.AmbientLight("blue", 1);
  return ambientLight;
})();

function render() {
  requestAnimationFrame(render);
  stats.update();
  if (controls.rotate) {
    cylinder.rotation.x += 0.01;
  }

  camera.lookAt(scene.position);
  renderer.render(scene, camera);
}
render();

function resize() {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
}
onresize = resize;
