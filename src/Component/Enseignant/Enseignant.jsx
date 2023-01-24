
import React from 'react'
import Authenticated from '../Login/Authenticated'
import Filter from '../Etudiant/Filter'
import ListMaterials from '../Etudiant/ListMaterials'

export default function Enseignant() {
  return (
    <Authenticated>
      <Filter/>
      <ListMaterials/>
    </Authenticated> 
  )
}
