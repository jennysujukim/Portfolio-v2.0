import { useEffect, useRef } from 'react'

// Three.js
import * as THREE from 'three'

export default function ThreeGradient() {

    const canvas = useRef(null)

    useEffect(() => {

        const objects = []
        let mouseX = 0
        let mouseY = 0
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;

        let sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        // Renderer 
        const renderer = new THREE.WebGLRenderer({ antialias: true })
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(sizes.width, sizes.height)
        canvas.current.appendChild(renderer.domElement)

        // Scene
        const scene = new THREE.Scene()
        scene.background = new THREE.Color(0xFBFBFB)

        // Camera
        const camera = new THREE.PerspectiveCamera(60, sizes.width / sizes.height, 0.1, 1000)
        camera.position.z = 6
        camera.focalLength = 3


        // Lights
        const light = new THREE.DirectionalLight(0xFBFBFB, 1);
        light.position.set(0, 5, 10);
        scene.add(light);


        // Object
        const geometry = new THREE.SphereGeometry(1, 35, 35)
        const loader = new THREE.TextureLoader()
        const texture = loader.load('/assets/hologram.jpg')
        const material = new THREE.MeshPhysicalMaterial({
            metalness: 0,  
            roughness: 0,
            transmission: 1,
            thickness: 0.5,
            map: texture
          });

        for (let i = 0; i < 10; i ++){

            const mesh = new THREE.Mesh(geometry, material)

            mesh.position.x = Math.random() * 10 - 5
            mesh.position.y = Math.random() * 10 - 5
            mesh.position.z = Math.random() * 10 - 5
            mesh.scale.x = mesh.scale.y = mesh.scale.z = Math.random() * 3 + 1

            scene.add(mesh)

            objects.push(mesh)
        }
        
        // Resizing
        const handleResize = () => {
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight 

            // update Camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()
            // update Renderer
            renderer.setSize(sizes.width, sizes.height)
        }

        window.addEventListener('resize', handleResize)


        // MouseMove Values
        const onDocumentMouseMove = (event) => {
            mouseX = ( event.clientX - windowHalfX ) / 100
            mouseY = ( event.clientY - windowHalfY ) / 100
        }        

        document.addEventListener( 'mousemove', onDocumentMouseMove )

        // Render
        const render = () => {

            const timer = 0.0001 * Date.now();

            camera.position.x += ( mouseX - camera.position.x ) * .01;
            camera.position.y += ( - mouseY - camera.position.y ) * .01;

            camera.lookAt( scene.position );

            for ( let i = 0, il = objects.length; i < il; i ++ ) {

                const object = objects[ i ];

                object.position.x = 5 * Math.cos( timer + i * 1.4 );
                object.position.y = 5 * Math.sin( timer + i * 1.4 );
                object.position.z = 5 * Math.cos( timer + i * 2 );

            }

            renderer.render( scene, camera );
        }


        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate)
            render()
        }

        animate()

        // Clean up
        const cleanup = () => {
            window.removeEventListener('resize', handleResize)

            if (canvas.current && canvas.current.contains(renderer.domElement)) {
                canvas.current.removeChild(renderer.domElement)
              }

        };
  
        return cleanup;

    }, [])



  return (
    <div ref={canvas} className="gradient" />
  )
}