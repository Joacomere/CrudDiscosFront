import React,{useEffect} from 'react';
import {useState} from 'react';
import { listaDiscos } from "../servicios/DiscoServicio";

const ComponenteDisco = () => {
    /*const dummyData = [
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

    ]*/
    const [disco, setDisco] = useState([]);

    useEffect(() => {
        listaDiscos().then((respuesta) => {
            setDisco(respuesta.data);
        }).catch(error => {
            console.error(error)
        })
    }, [])
  return (
    <div>
        <table className="table-auto border-collapse border">
            <thead>
                <tr>
                    
                    <th className='border border-slate-300'>Id</th>    
                    <th className='border border-slate-300'>Artista</th>
                    <th className='border border-slate-300'>Titulo</th>
                    <th className='border border-slate-300'>Duracion</th>
                    <th className='border border-slate-300'>Codigo</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    disco.map(disco =>
                        <tr key={disco.id}>
                            <td className='border border-slate-300'>{disco.id}</td>
                            <td className='border border-slate-300'>{disco.artista}</td>       
                            <td className='border border-slate-300'>{disco.titulo}</td>
                            <td className='border border-slate-300'>{disco.duracion}</td>
                            <td className='border border-slate-300'>{disco.cod}</td>
                        </tr>
                    )
                }    
                   
            
            </tbody>
        </table>            
    </div>
  )
}
export default ComponenteDisco
