import React, { useEffect } from 'react'
import Material from './Material'


export default function ListMaterials(props) {
    const [Materials, setMaterials] = React.useState([]);
    console.log(props);
    useEffect(() => {
        fetch('http://localhost:8080/api/v1/auth/GetMaterials', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((data) => {
                //message
                //setmessage(data.message)
                console.log('Success:', data);
                setMaterials(data);
            }
            )
            .catch((error) => {
                console.error('Error:', error);
            }
            );
      }, []);

    const filter=(e)=>{
        
        if(e.titre===props.Search || props.Search==="" || props.Search?.split(' ').some(r=> e.tags?.split(',').includes(r))){
            return true
        }
        else{
            return false
        }
    }
  return (
    <div style={{padding:10,display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {
            Materials.map((e)=>{
                const b=filter(e);
               if(props.disponibilité == e.disponible && props.departement == e.departement && b ) {
                 return <Material key={e.id} infos={e} />
               } 
})
        }
    </div>
  )
}
