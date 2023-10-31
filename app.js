// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(0, 2, 5);

// Create a WebGLRenderer and add it to the DOM
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Load the texture
const textureLoader = new THREE.TextureLoader();
const cubeTexture = textureLoader.load('texture1/albedo.jpg');

// Create cube material with texture
const cubeMaterial = new THREE.MeshPhongMaterial({
    //map: cubeTexture
    color: 0x00ff00
});

// Create the cube geometry
const geometry = new THREE.BoxGeometry(2, 2, 2);

// Create the cube mesh
const cube = new THREE.Mesh(geometry, cubeMaterial);
cube.position.x += 0;
cube.position.y += 2;
cube.position.z -= 2;
scene.add(cube);


// Membuat geometri bidang datar
var planeGeometry = new THREE.PlaneGeometry(2, 2); // Ukuran bidang datar
var planeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00}); // Warna bidang datar
var plane = new THREE.Mesh(planeGeometry, planeMaterial);

// Mengatur posisi vertikal bidang datar
plane.position.y = 0.4; // Ubah nilai ini untuk mengatur posisi pada sumbu y
plane.position.z = -1.5; // Ubah nilai ini untuk mengatur posisi pada sumbu z

// Memutar bidang datar secara horizontal
plane.rotation.x = -Math.PI / 2;

// Menambahkan bidang datar ke dalam scene
scene.add(plane);


// Set up the ambient light
const ambientLight = new THREE.AmbientLight(0x202020);
scene.add(ambientLight);

// Set up the directional light
const directionalLight = new THREE.DirectionalLight(0xCCCCCC, 0.5); // Color and intensity
directionalLight.position.set(0, 1, 0); // Direction
scene.add(directionalLight);

// Set up the point light
const pointLight = new THREE.PointLight(0xFFFFFF, 1); // Color and intensity
pointLight.position.set(0, 2, 2); // Position
scene.add(pointLight);

// Handle resize events
window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});

// Render loop
function animate() {
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01;
    
    renderer.render(scene, camera);

    requestAnimationFrame(animate);
}

animate();