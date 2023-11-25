import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

function init(ref) {
  let camera, scene, renderer;

  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    20
  );
  camera.position.z = 2.5;

  // scene

  scene = new THREE.Scene();

  const ambientLight = new THREE.AmbientLight(0xffffff);
  scene.add(ambientLight);

  const pointLight = new THREE.PointLight(0xffffff, 15);
  camera.add(pointLight);
  scene.add(camera);

  function onProgress(xhr) {
    if (xhr.lengthComputable) {
      const percentComplete = (xhr.loaded / xhr.total) * 100;
      console.log("model " + percentComplete.toFixed(2) + "% downloaded");
    }
  }

  function onError() {
    console.log("errrr");
  }

  const loader = new OBJLoader();
  loader.load(
    "/donat.obj",
    function (obj) {
     
      console.log("___obj", obj);
      scene.add(obj);
    },
    onProgress,
    onError
  );

  //

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  ref.current.appendChild(renderer.domElement);

  //

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 2;
  controls.maxDistance = 5;
  //   controls.addEventListener("change", render);

  //
  setTimeout(() => {
   
    renderer.render(scene, camera);
  }, 1000);
}

// scene.environmen
const DemoObj = () => {
  const ref = useRef(null);
  useEffect(() => {
    // ref.current.appendChild(stats.dom);

    // ref.current.appendChild(renderer.domElement);

    init(ref);
  }, []);

  return (
    <>
      <h1>Three JS</h1>
      <main ref={ref}></main>
    </>
  );
};

export { DemoObj };
