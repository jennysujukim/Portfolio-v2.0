import { useEffect, useRef } from 'react'

// Three.js
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

export default function ThreeHero() {

    const canvas = useRef(null)

    useEffect(() => {

        let mouseX = 0
        let mouseY = 0
        let sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }
        // let windowHalfX = window.innerWidth / 2;
        // let windowHalfY = window.innerHeight / 2;

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
        const loader = new GLTFLoader()

        const objects = []
        const objectPaths = [
          './assets/J.gltf',
          './assets/E.gltf',
          './assets/N.gltf',
          './assets/K.gltf',
          './assets/I.gltf',
          './assets/M.gltf',
        ]
        
        const objectPositions = [
          new THREE.Vector3(-2, -1.8, 2.5),
          new THREE.Vector3(-1.3, -2.1, 2.3),
          new THREE.Vector3(-0.5, -2, 2),
          new THREE.Vector3(0.2, -2, 2.3),
          new THREE.Vector3(1, -2, 2.1),
          new THREE.Vector3(2, -1.9, 2.3),
          new THREE.Vector3(2, 1, 1)
        ]


        objectPaths.forEach((path, index) => {
          loader.load(
            path,
            function (gltf) {
              objects[index] = gltf.scene
              const position = objectPositions[index]

              objects[index].position.copy(position)

              objects[index].scale.set(30, 30, 30)

              scene.add(objects[index])
            },
            undefined,
            function (error) {
              console.error('Error loading model:', error)
            }
          )
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


        // MouseMove Values
        // const onDocumentMouseMove = (event) => {
        //     mouseX = ( event.clientX - windowHalfX ) / 100
        //     mouseY = ( event.clientY - windowHalfY ) / 100
        // }        

        // document.addEventListener( 'mousemove', onDocumentMouseMove )


        const handleScroll = () => {
          objects.forEach((object, index) => {
            const position = objectPositions[index]

            const objectRotationsY = [
              (window.scrollY / window.innerHeight) * Math.PI * 2,
              (window.scrollY / window.innerHeight) * Math.PI * 3,
              (window.scrollY / window.innerHeight) * Math.PI * 4,
              (window.scrollY / window.innerHeight) * Math.PI * 5,
              (window.scrollY / window.innerHeight) * Math.PI * 6,
              (window.scrollY / window.innerHeight) * Math.PI * 7
            ]

            const objectRotationsX= [
              (window.scrollY / window.innerHeight) * Math.PI * 7,
              (window.scrollY / window.innerHeight) * Math.PI * 6,
              (window.scrollY / window.innerHeight) * Math.PI * 5,
              (window.scrollY / window.innerHeight) * Math.PI * 4,
              (window.scrollY / window.innerHeight) * Math.PI * 3,
              (window.scrollY / window.innerHeight) * Math.PI * 2
            ]

            // const rotation = (window.scrollY / window.innerHeight) * Math.PI * 2
            object.position.y = position.y + window.scrollY * 0.0035
            object.rotation.y = objectRotationsY[index]
            object.rotation.x = objectRotationsX[index]
          })
        }

        window.addEventListener('scroll', handleScroll)

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
            // window.removeEventListener('resize', handleResize)

            if (canvas.current && canvas.current.contains(renderer.domElement)) {
                canvas.current.removeChild(renderer.domElement)
              }

        };
  
        return cleanup;

    }, [])



  return (
    <div ref={canvas} className="heroObjects" />
  )
}