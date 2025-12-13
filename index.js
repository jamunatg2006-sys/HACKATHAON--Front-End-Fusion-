// Button redirect
function enterSite(){
  window.location.href = "home.html"; // your main page
}

// THREE.JS SCENE
const container = document.getElementById("three-container");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setSize(container.clientWidth, container.clientHeight);
container.appendChild(renderer.domElement);

// Geometry
const geometry = new THREE.IcosahedronGeometry(1.5, 1);
const material = new THREE.MeshStandardMaterial({
  color: 0x38bdf8,
  wireframe: true
});

const shape = new THREE.Mesh(geometry, material);
scene.add(shape);

// Lights
const light1 = new THREE.PointLight(0x38bdf8, 1);
light1.position.set(5,5,5);
scene.add(light1);

camera.position.z = 4;

// Animation
function animate(){
  requestAnimationFrame(animate);
  shape.rotation.x += 0.005;
  shape.rotation.y += 0.007;
  renderer.render(scene, camera);
}

animate();
