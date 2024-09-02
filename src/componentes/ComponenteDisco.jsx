import React from 'react'

const ComponenteDisco = () => {
    const dummyData = [
        {"id": 1,
        "artista": "artista1",
        "titulo": "el mejor disco",
        "duracion": 30,
        "cod": "abc123"

    },
    {
        "id": 2,
        "artista": "artista 2",
        "titulo": "disco no tan bueno",
        "duracion": 30,
        "cod": "bca123"
    },
    {
        "id": 3,
        "artista": "artista 3",
        "titulo": "disco mediocre",
        "duracion": 45,
        "cod": "acd321"
    },{
        "id": 4,
        "artista": "artista 4",
        "titulo": "disco asombroso",
        "duracion": 50,
        "cod": "owa345"
    },{
        "id": 5,
        "artista": "artista 5",
        "titulo": "disco regular",
        "duracion": 55,
        "cod": "lsd666"
    },{
        "id": 6,
        "artista": "artista 6",
        "titulo": "disco bombastico",
        "duracion": 60,
        "cod": "awa589"
    },{
        "id": 7,
        "artista": "artista 7",
        "titulo": "disco exitoso",
        "duracion": 65,
        "cod": "tcl456"
    }

    ]

  return (
    <div>
        <table>
            <thead>
                <tr>
                    
                    <th>Id</th>    
                    <th>Artista</th>
                    <th>Titulo</th>
                    <th>Duracion</th>
                    <th>Codigo</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    dummyData.map(disco =>
                        <tr key={disco.id}>
                            <td>{disco.id}</td>
                            <td>{disco.artista}</td>       
                            <td>{disco.titulo}</td>
                            <td>{disco.duracion}</td>
                            <td>{disco.cod}</td>
                        </tr>
                    )
                }    
                   
            
            </tbody>
        </table>            
    </div>
  )
}
export default ComponenteDisco
