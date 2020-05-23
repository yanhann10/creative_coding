//revolving doors
//inspired by Sesc Melhores Filmes poster mentioned in Creative Coding with Canvas & WebGL
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
  camera.position.set(-6, 1, -2);
  camera.lookAt(scene.position);
  return camera;
})();

const renderer = ((_) => {
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(controls.backgroundColor);
  renderer.setSize(innerWidth, innerHeight);
  renderer.shadowMapEnabled = true;
  document.getElementById("scene").appendChild(renderer.domElement);
  return renderer;
})();

const geo = new THREE.BoxGeometry(2, 2, 2);
const leftDoorGroup = new THREE.Group();
for (let i = 0; i < 16; i++) {
  const box = new THREE.Mesh(
    geo,
    new THREE.MeshPhongMaterial({
      color: "white",
    })
  );
  box.castShadow = true;

  box.rotateY(Math.PI / 6);

  box.position.set(0, i * 0.2 - 1.5, 0);

  box.scale.set(1.8, 0.03, 0.1);
  leftDoorGroup.add(box);
}

const rightDoorGroup = new THREE.Group();
for (let i = 0; i < 16; i++) {
  const box = new THREE.Mesh(
    geo,
    new THREE.MeshPhongMaterial({
      color: "white",
    })
  );
  box.castShadow = true;

  box.position.set(0, i * 0.2 - 1.5, -1);

  box.scale.set(1.8, 0.03, 0.1);
  rightDoorGroup.add(box);
}
scene.add(leftDoorGroup);
scene.add(rightDoorGroup);

const directionallight = ((_) => {
  const directionallight = new THREE.DirectionalLight(controls.lightColor, 1);
  directionallight.position.set(0, 4, 0);
  directionallight.castShadow = true;
  scene.add(directionallight);
  return directionallight;
})();

function render() {
  requestAnimationFrame(render);
  stats.update();
  if (controls.rotate) {
    leftDoorGroup.rotation.y += 0.01;
    rightDoorGroup.rotation.y -= 0.01;
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
