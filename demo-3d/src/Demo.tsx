import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

const loader = new GLTFLoader();
// loader.load(
//   "/blender-3.5-splash.glb",
//   function (gltf) {
//     const scene = new THREE.Scene();
//     scene.add(gltf.scene);

//     const camera = new THREE.PerspectiveCamera(
//       75,
//       window.innerWidth / window.innerHeight,
//       0.1,
//       1000
//     );
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     document.body.appendChild(renderer.domElement);
//     const controls = new OrbitControls(camera, renderer.domElement);
//     camera.position.z = 5;
//     controls.update();
//     renderer.render(scene, camera);
//     console.log(gltf);
//   },
//   undefined,
//   function (error) {
//     console.error(error);
//   }
// );
let mixer;
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xbfe3dd);
// scene.environment = pmremGenerator.fromScene(
//   new RoomEnvironment(renderer),
//   0.04
// ).texture;
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
// function animate() {
//   requestAnimationFrame(animate);

//   const delta = clock.getDelta();

//   mixer.update(delta);

//   controls.update();

//   stats.update();

//   renderer.render(scene, camera);
// }
const Demo = () => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current!.appendChild(renderer.domElement);
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
    loader.load(
      "/donat.glb",
      (gltf) => {
        //   const scene = new THREE.Scene();
        // sence.add(gltf.scene);
        // sence.
        // renderer.outputColorSpace = THREE.SRGBColorSpace;

        // renderer.render(sence, camera);
        const model = gltf.scene;
        model.position.set(1, 1, 0);
        model.scale.set(0.01, 0.01, 0.01);
        scene.add(model);

        mixer = new THREE.AnimationMixer(model);
        mixer.clipAction(gltf.animations[0]).play();
        renderer.render(scene, camera);
        // animate();
      },
      undefined,
      function (error) {
        console.error(error);
      }
    );
  };
  return (
    <>
      <h1>Three JS</h1>
      <main ref={ref}></main>
    </>
  );
};

export { Demo };
