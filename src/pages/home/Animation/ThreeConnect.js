import { useEffect, useRef } from 'react'

import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function ThreeConnect() {


    const canvas = useRef(null)

    useEffect(() => {

        let mouseX = 0
        let mouseY = 0

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
        const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 100 )
        camera.position.z = 6
        camera.focalLength = 3

        // Lights
        const light = new THREE.DirectionalLight( 0xfbfbfb, 1 );
        light.position.set(10, 5, 10);
        scene.add(light);

        // Objects
        const welcome = new GLTFLoader()
            welcome.load(
            './assets/connect.gltf',
            function (gltf) {

                gltf.scene.position.x = 1
                gltf.scene.position.y = 1
                gltf.scene.scale.set(10, 10, 10)

                scene.add(gltf.scene)
            },           
            undefined,
            function (error) {
              console.error('Error loading model:', error)
            })
        

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
        
        
        // Render
        const render = () => {

            camera.position.x += ( mouseX - camera.position.x ) * .0005;
            camera.position.y += ( - mouseY - camera.position.y ) * .0005;

            camera.lookAt( scene.position );

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
        <div ref={canvas} className="threeConnect" />
        )

    }



