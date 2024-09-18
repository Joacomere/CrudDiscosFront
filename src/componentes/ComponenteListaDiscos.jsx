import React,{useEffect} from 'react';
import {useState} from 'react';
import { borraDisco, listaDiscos } from "../servicios/DiscoServicio";
import {useNavigate} from 'react-router-dom'

const ComponenteListaDiscos = () => {
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
    const navegador = useNavigate();

    useEffect(() => {
        traeTodosLosDiscos()
    }, [])

    function traeTodosLosDiscos(){
        listaDiscos().then((respuesta) => {
            setDisco(respuesta.data);
        }).catch(error => {
            console.error(error)
        })
    }
    function agregarDisco(){
        navegador('/agrega-disco')
    }
    //Los acentos invertidos nos permiten agregar codigo dentro de una cadena de caracteres
    function actualizaDisco(id){
        navegador(`/actualiza-disco/${id}`)
    }
    function quitaDisco(id){
        console.log(id);
        borraDisco(id).then((respuesta) => {
            traeTodosLosDiscos()
        }).catch(error => {
            console.log(error);
        })
    }

  return (
    <div ClassName='container'> 
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={agregarDisco}>Agregar Disco</button>
        <table className="table-auto border-collapse border">
            <thead>
                <tr>
                    
                    <th className='border border-slate-300'>Id</th>    
                    <th className='border border-slate-300'>Artista</th>
                    <th className='border border-slate-300'>Titulo</th>
                    <th className='border border-slate-300'>Duracion</th>
                    <th className='border border-slate-300'>Codigo</th>
                    <th>Acciones</th>
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
                            <td>
                                <button class="bg-green-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => actualizaDisco(disco.id)}>Actualizar</button>
                                <button class="bg-red-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => quitaDisco(disco.id)}>Borrar</button>                            
                            </td>
                        </tr>
                    )
                }    
                   
            
            </tbody>
        </table>            
    </div>
  )
}
export default ComponenteListaDiscos
