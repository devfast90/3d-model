import React from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";

class Model extends React.Component {
  componentDidMount() {
    const {setIsModelOpen} = this.props;
    // === Creating the Scene, Camera, Renderor ===
    var scene = new THREE.Scene();
    var female, male, mask;
    var camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      20000
    );
    camera.position.set(0, 16, 70);
    // camera.lookAt( 0, 16, -30 );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor("#202020", 1.0);
    document.body.appendChild(renderer.domElement);
    window.addEventListener("resize", onWindowResize);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 15, -43);
    controls.enableRotate = false;
    controls.update();
    //==============
    //========= light ==========
    const ambient_light = new THREE.AmbientLight(0xffffff, 0.5); // soft white light
    scene.add(ambient_light);

    const pointLight = new THREE.PointLight(0xeeeeee, 0.4);
    pointLight.position.set(0, 20, 20);
    scene.add(pointLight);

    const spotLight_pink = new THREE.SpotLight(0xff00ff, 3, 150, 0.18);
    spotLight_pink.position.set(-40, 18, 11);
    const targetObject_pink = new THREE.Object3D();
    targetObject_pink.position.set(-4, 12, 0);
    spotLight_pink.target = targetObject_pink;
    spotLight_pink.castShadow = true;
    scene.add(spotLight_pink);
    scene.add(targetObject_pink);

    const spotLight_yellow = new THREE.SpotLight(0xffff00, 3, 150, 0.18);
    spotLight_yellow.position.set(40, 18, 10);
    const targetObject_yellow = new THREE.Object3D();
    targetObject_yellow.position.set(4, 12, -1);
    spotLight_yellow.target = targetObject_yellow;
    spotLight_yellow.castShadow = true;
    scene.add(spotLight_yellow);
    scene.add(targetObject_yellow);

    const spotLight_white = new THREE.SpotLight(0xffffff, 1, 300, 0.5);
    spotLight_white.position.set(0, 60, 10);
    const targetObject_white = new THREE.Object3D();
    targetObject_white.position.set(0, 25, -70);
    spotLight_white.target = targetObject_white;
    spotLight_white.castShadow = true;
    scene.add(spotLight_white);
    scene.add(targetObject_white);

    //============ ground =======
    const plane_geometry = new THREE.PlaneGeometry(1000, 1000);
    const plane_material = new THREE.MeshBasicMaterial({
      color: 0x202020,
      side: THREE.DoubleSide
    });
    const plane = new THREE.Mesh(plane_geometry, plane_material);
    plane.rotateX(-3.141592 / 2);
    plane.position.set(0, -10, 0);
    // scene.add( plane );

    const loader = new GLTFLoader();
    // ============= female model=======
    // const loader = new GLTFLoader();
    loader.load(
      "3d-models/female.glb",
      function (gltf) {
        female = gltf.scene.children[0];
        female.visible = false;
        scene.add(female);
        female.position.set(4, 0, -1);
        female.scale.set(100, 100, 100);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log(error);
      }
    );
    // ============= male model=======
    const dracoLoader = new DRACOLoader();
    // dracoLoader.setDecoderPath('https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/js/libs/draco/');
    dracoLoader.setDecoderPath("js/libs/draco/");
    const loader_male = new GLTFLoader();
    loader_male.setDRACOLoader(dracoLoader);
    loader_male.load(
      "3d-models/male.glb",
      function (gltf) {
        male = gltf.scene.children[0];
        male.visible = false;
        scene.add(male);

        male.position.set(-4, 0, 0);
        male.scale.set(100, 100, 100);
      },
      (xhr) => {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      (error) => {
        console.log(error);
      }
    );
    // const geometry = new THREE.SphereGeometry( 0.01, 32, 16 );
    // const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
    // const sphere = new THREE.Mesh( geometry, material );
    // scene.add( sphere );
    // sphere.position.set(0, 28, -70);
    //=================================

    // ====================
    var animate = function () {
      requestAnimationFrame(animate);
      if (male && female) {
        if (!male.visible && !female.visible) {
          male.visible = true;
          female.visible = true;

          // ============= mask model=======
          loader.load(
            "3d-models/to_the_top_kitsune_mask/scene.gltf",
            function (gltf) {
              mask = gltf.scene.children[0];
              // mask.rotateX(3.141592/2);
              mask.scale.set(80, 40, 80);
              mask.position.set(0, 30, -60);
              scene.add(mask);
            },
            (xhr) => {
              console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
            },
            (error) => {
              console.log(error);
            }
          );
        }
      }

      if (camera.position.z > -55 && camera.position.z < 1) {
        setIsModelOpen(false);
        var y = 30;
        var p = mask.position;
        p.y = y + camera.position.z * 0.5;
        mask.position.copy(p);
        console.log(mask.position.y + ":::::" + camera.position.z);
      }
      renderer.render(scene, camera);
    };

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    animate();
  }

  render() {
    const {isModelOpen} = this.props;
    return (
      <div>
        <div style={{display: true?'block': 'none' }} ref={(ref) => (this.mount = ref)} />
      </div>
    );
  }
}

export default Model;
