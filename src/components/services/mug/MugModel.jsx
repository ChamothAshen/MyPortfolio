
import React from 'react'
import { useGLTF } from '@react-three/drei'

export function MugModel(props) {
  const { nodes, materials } = useGLTF('/MugModel.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, -0.033, -0.002]} rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <mesh geometry={nodes.pCylinder3_lambert2_0.geometry} material={materials.lambert2} rotation={[Math.PI / 2, 0, 0]} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/MugModel.glb')
