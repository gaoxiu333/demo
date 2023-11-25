import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import Stats from "three/addons/libs/stats.module.js";

let mixer;

const clock = new THREE.Clock();
const stats = new Stats();

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.outputColorSpace = THREE.SRGBColorSpace;

const pmremGenerator = new THREE.PMREMGenerator(renderer);

const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfe3dd);
scene.environment = pmremGenerator.fromScene(
  new RoomEnvironment(renderer),
  0.04
).texture;

const camera = new THREE.PerspectiveCamera(
  40,
  window.innerWidth / window.innerHeight,
  1,
  100
);
camera.position.set(5, 2, 8);
// camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0.5, 0);
controls.update();
controls.enablePan = false;
controls.enableDamping = true;

function animate() {
  requestAnimationFrame(animate);

  // const delta = clock.getDelta();

  // mixer.update(delta);

  // controls.update();

  // stats.update();

  renderer.render(scene, camera);
}
const Demo = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.appendChild(stats.dom);

    ref.current.appendChild(renderer.domElement);
    // const geometry = new THREE.BoxGeometry();
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    // sence.add(cube);
    // camera.position.z = 5;
    // function animate() {
    //   requestAnimationFrame(animate);
    //   cube.rotation.x += 0.01;
    //   cube.rotation.y += 0.01;
    //   renderer.render(sence, camera);
    // }
    // animate();
    initDonat();
  }, []);

  const initDonat = () => {
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath("/gltf/");

    const loader = new GLTFLoader();
    loader.setDRACOLoader(dracoLoader);
    // "/blender-3.5-splash.glb",
    loader.load(
      "/donat.glb",
      (gltf) => {
        console.log("gltf", gltf);
        const model = gltf.scene;
        // model.position.set(1, 1, 0);
        // model.scale.set(0.01, 0.01, 0.01);
        scene.add(model);

        // mixer = new THREE.AnimationMixer(model);
        // mixer.clipAction(gltf.animations[0]).play();
        setTimeout(() => {
          console.log(mixer);
          renderer.render(scene, camera);
        }, 1000);
        // renderer.render(scene, camera);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      function (error) {
        console.error(error);
      }
    );
  };

  const initObj = ()=>{
    
  }
  return (
    <>
      <h1>Three JS</h1>
      <main ref={ref}></main>
    </>
  );
};

export { Demo };
