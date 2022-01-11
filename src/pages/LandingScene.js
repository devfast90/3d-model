import React from "react";
// import { Link } from "react-router-dom";
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as OBJLoader from 'three-obj-loader';
OBJLoader(THREE);

class App extends React.Component {
  componentDidMount() {
    // === Creating the Scene, Camera, Renderor ===
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 1, 20000 );
    camera.position.set( 0, 20, 600 );    
    
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );    
    window.addEventListener('resize', onWindowResize);

    const controls = new OrbitControls( camera, renderer.domElement );
    controls.target = new THREE.Vector3(0, 167, 0);
    controls.update();
    //========= light ==========
    const ambient_light = new THREE.AmbientLight( 0x404040 ); // soft white light
    scene.add( ambient_light );

    const point_light = new THREE.PointLight( 0xff0000, 1, 100 );
    point_light.position.set( 300,300,300 );
    scene.add( point_light );

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.9);
    directionalLight.position.set(300,300,300)
    scene.add( directionalLight );
    //============ ground =======
    const plane_geometry = new THREE.PlaneGeometry( 1000, 1000 );
    const plane_material = new THREE.MeshBasicMaterial( {color: 0x00ff00, side: THREE.DoubleSide} );
    const plane = new THREE.Mesh( plane_geometry, plane_material );
    plane.rotateX(-3.141592/2);
    scene.add( plane );
    // ============= Sun sphere =======
    const sphere_geometry = new THREE.SphereGeometry( 250, 32, 16);
    const sphere_material = new THREE.MeshBasicMaterial( { color: 0xffff00 } );
    const sphere = new THREE.Mesh( sphere_geometry, sphere_material );
    sphere.position.set(0, 250, -400);
    scene.add( sphere );
    // ============= person model=======
    this.THREE = THREE;
    const loader = new this.THREE.OBJLoader();    
    loader.load('models/male_body.obj',      
      function ( object ) {    scene.add( object );},// called when resource is loaded      
      function ( xhr ) {},// called when loading is in progresses      
      function ( error ) {  }// called when loading has errors
    );
    
    // ====================
    var animate = function () {
      requestAnimationFrame( animate );
      if(camera.position.z>10)
      {
        controls.target = new THREE.Vector3(0, 167, 0);
        controls.update();
      }else if(camera.position.z<10 && camera.position.z>-200)
      {
        controls.target = new THREE.Vector3(0, 250, -250);
        controls.update();
      }else if(camera.position.z>600)
      {
        let p = new THREE.Vector3()
        p.x=camera.position.x;
        p.y=camera.position.y;
        p.z=600;
        camera.position.set(p);
      }
      renderer.render( scene, camera );
    };
    
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    animate();
  }
  render() {
    return (
      <div >                
        <div ref={ref => (this.mount = ref)} />
      </div>
    );
  }
}

export default App;