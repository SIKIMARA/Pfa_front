import React from 'react'
import Material from './Material'

const Data=[
{
    id:1,
    image:'../../Images/Arduino.jpg',
    images:'',
    sku:'1223542366',
    titre:'Arduino Uno R3',
    description:"This version is optimized in the original version to ensure consistent and compatible with the original, but also easy to use Increase the pin socket, to facilitate the use of DuPont line",
    departement:"informatique",
    disponible :true,
    motClés:["informatique","arduino","hardware","embarqué"]
},
{
    id:2,
    image:'../../Images/Resistance.jpg',
    images:'',
    sku:'1223542366',
    titre:'Resistance',
    description:"This version is optimized in the original version to ensure consistent and compatible with the original, but also easy to use Increase the pin socket, to facilitate the use of DuPont line",
    departement:"informatique",
    disponible :true,
    motClés:["Resistance","mecanique","hardware","analogique"]
},
{
    id:3,
    image:'../../Images/Resistance.jpg',
    images:'',
    sku:'1223542366',
    titre:'Resistance',
    description:"This version is optimized in the original version to ensure consistent and compatible with the original, but also easy to use Increase the pin socket, to facilitate the use of DuPont line",
    departement:"informatique",
    disponible :true,
    motClés:["Resistance","mecanique","hardware","analogique"]
},
{
    id:4,
    image:'../../Images/Resistance.jpg',
    images:'',
    sku:'1223542366',
    titre:'Resistance',
    description:"This version is optimized in the original version to ensure consistent and compatible with the original, but also easy to use Increase the pin socket, to facilitate the use of DuPont line",
    departement:"informatique",
    disponible :false,
    motClés:["Resistance","mecanique","hardware","analogique"]
},

]
export default function ListMaterials() {
  return (
    <div style={{padding:10,display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {
            Data.map((e)=>{
               return <Material key={e.id} infos={e} />
            })
        }
    </div>
  )
}
