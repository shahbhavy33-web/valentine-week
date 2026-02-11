/* © 2026 Valentine's Week Template. All Rights Reserved. Redistribution prohibited. */

// 3D Background Animation using Three.js

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('bg-3d');
  if (!container) return;

  // Scene Setup
  const scene = new THREE.Scene();
  // No background color, let CSS gradient show through
  
  // Camera Setup
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Renderer Setup
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);

  // Heart Shape & Geometry
  const x = 0, y = 0;
  const heartShape = new THREE.Shape();
  
  heartShape.moveTo(x + 0.5, y + 0.5);
  heartShape.bezierCurveTo(x + 0.5, y + 0.5, x + 0.4, y, x, y);
  heartShape.bezierCurveTo(x - 0.6, y, x - 0.6, y + 0.7, x - 0.6, y + 0.7);
  heartShape.bezierCurveTo(x - 0.6, y + 1.1, x - 0.3, y + 1.54, x + 0.5, y + 1.9);
  heartShape.bezierCurveTo(x + 1.2, y + 1.54, x + 1.6, y + 1.1, x + 1.6, y + 0.7);
  heartShape.bezierCurveTo(x + 1.6, y + 0.7, x + 1.6, y, x + 1.0, y);
  heartShape.bezierCurveTo(x + 0.7, y, x + 0.5, y + 0.5, x + 0.5, y + 0.5);

  const extrudeSettings = {
    steps: 1,
    depth: 0.2,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.1,
    bevelSegments: 2
  };

  const geometry = new THREE.ExtrudeGeometry(heartShape, extrudeSettings);
  
  // Create Instanced Mesh for performance
  const heartCount = 50;
  // We'll use individual meshes instead of InstancedMesh to allow for different colors easily without custom shaders for now
  // actually, let's just stick to the loop we have but change the material color per mesh
  
  const hearts = [];

  for (let i = 0; i < heartCount; i++) {
    // Randomize color: Ruby Red, Deep Pink, or Soft Pink
    const colors = [0xd90429, 0xff4d6d, 0xff8fa3];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    const material = new THREE.MeshPhongMaterial({ 
      color: randomColor, 
      shininess: 100,
      specular: 0xffffff
    });

    const mesh = new THREE.Mesh(geometry, material);
    
    // Random Position
    mesh.position.x = (Math.random() - 0.5) * 20;
    mesh.position.y = (Math.random() - 0.5) * 20 - 5; // Start lower
    mesh.position.z = (Math.random() - 0.5) * 10 - 5;
    
    // Random Rotation
    mesh.rotation.x = Math.random() * Math.PI;
    mesh.rotation.y = Math.random() * Math.PI;
    
    // Random Scale
    const scale = Math.random() * 0.3 + 0.1;
    mesh.scale.set(scale, scale, scale);
    
    // Custom properties for animation
    mesh.userData = {
      speedY: Math.random() * 0.02 + 0.01,
      rotationSpeedX: (Math.random() - 0.5) * 0.02,
      rotationSpeedY: (Math.random() - 0.5) * 0.02
    };

    scene.add(mesh);
    hearts.push(mesh);
  }

  // Sparkles (Particles)
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 300;
  const posArray = new Float32Array(particlesCount * 3);

  for(let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 25; // Spread them out wide
  }

  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.08,
    color: 0xffffff,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending
  });

  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);

    // Animate Sparkles
    particlesMesh.rotation.y += 0.001;
    particlesMesh.rotation.x -= 0.0005;

    hearts.forEach(heart => {
      // Move up
      heart.position.y += heart.userData.speedY;
      
      // Rotate
      heart.rotation.x += heart.userData.rotationSpeedX;
      heart.rotation.y += heart.userData.rotationSpeedY;

      // Reset if too high
      if (heart.position.y > 10) {
        heart.position.y = -10;
        heart.position.x = (Math.random() - 0.5) * 20;
      }
    });

    renderer.render(scene, camera);
  }

  animate();

  // Resize Handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
