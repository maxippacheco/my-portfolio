import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {

  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    // 1. create a mesh that is basically our container
    <mesh>
      {/* 2. create a light to visualize the object */}
      <hemisphereLight intensity={0.15} groundColor='black' />

      {/* 3. point light */}
      <pointLight intensity={1} />

      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
        />

      {/* 4. in this primitive we set up the scene */}
      <primitive 
        object={ computer.scene } 
        scale={ isMobile ? 0.7 : 0.75 }
        // x,y,z
        position={ isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}  
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  )
}

const ComputerCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  // changing the state mobile variable
  useEffect(() => {
    // add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)')

    // set the initial value
    setIsMobile(mediaQuery.matches);

    // define a callback to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile( event.matches );
    }

    // add a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // remove the listener when the component is unmounted
    return () => { 
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])
  

  return(

    <Canvas
      frameloop='demand'
      shadows
      // position: x, y, z, fov => how wide its gonna be
      camera={{ position: [20, 3, 5], fov: 25 }}
      // this value needs to be there to properly render our model in a great way
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          // to not rotate this all the way up, down, left, right. Basically a limit to rotate the scene
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={ isMobile } />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

// export default Computers
export default ComputerCanvas;
