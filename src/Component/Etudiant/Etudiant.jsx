import React from 'react'
import Authenticated from '../Login/Authenticated'
import Filter from './Filter'
import ListMaterials from './ListMaterials'
import Material from './Material'


export default function Etudiant() {
  return (
    <Authenticated>
      
      <Filter/>
      <ListMaterials/>
      
    </Authenticated>
      
  )
}
