import React, { useState, useEffect } from 'react'
import {traeDisco, guardaDiscoServicio, actualizaDisco} from '../servicios/DiscoServicio'
import { useNavigate, useParams } from 'react-router-dom'

export default function ComponenteDisco() {

    let classNameError ="shadow appearance-none border border-red-500 rounded py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    
    const [artista, setArtista]=useState('')

    const [titulo, setTitulo]=useState('')
    
    const [duracion, setDuracion]=useState('')
    
    const [cod, setCodigo]=useState('')
    
    const navegador = useNavigate()
    
    const {id} = useParams()
    
    const [errores,setErrores] = useState({
        artista:'',
        titulo: '',
        duracion: '',
        cod: '' 
    })

    useEffect (() => {
        if(id){
            traeDisco(id).then((respuesta)=> {
                setArtista(respuesta.data.artista),
                setTitulo(respuesta.data.titulo),
                setDuracion(respuesta.data.duracion),
                setCodigo(respuesta.data.cod)
            }).catch(error => {
                console.log(error);
            })
        }
    }, [id])    

     function guardaOActualizaDisco(e){
        e.preventDefault();

        if(validaFormulario()){
            const disco = {titulo,artista,cod,duracion}
            console.log(disco)
            if(id){
                actualizaDisco(disco, id).then((respuesta)=>{
                    console.log(respuesta.data);
                    navegador('/discos');
                }).catch(error =>{
                    console.log(error)
                })
            }else{    
                guardaDiscoServicio(disco).then((respuesta) =>{
                    console.log(respuesta.data);
                    navegador('/discos')
                }).catch(error => {
                    console.log(error);
                })
            }
        }
        
    }
    
    function validaFormulario(){
        let valido = true

        const erroresCopia ={... errores}

        if(artista.trim()){
            erroresCopia.artista = '';    
        }else{
            erroresCopia.artista = <p class="text-red-500 text-xs italic">Se requiere artista</p>
            valido = false;
        }

        if(titulo.trim()){
            erroresCopia.titulo = '';           
        }else{
            erroresCopia.titulo = <p class="text-red-500 text-xs italic">Se requiere titulo</p>
            valido = false;
        }

        if(duracion.trim()){
            erroresCopia.duracion = '';            
        }else{
            erroresCopia.duracion = <p class="text-red-500 text-xs italic">Se requiere duracion</p>
            valido = false;
        }

        if(cod.trim()){
            erroresCopia.cod = '';            
        }else{
            erroresCopia.cod = <p class="text-red-500 text-xs italic">Se requiere codigo</p>
            valido = false;
        }

        setErrores(erroresCopia);

        return valido
    }
    function paginaTitulo(){
        if(id){
            return <h2>Actualiza Disco</h2>
        }else{
            return <h2>Agrega Disco</h2>
        }
    }

  return (
    <div>
        {
            paginaTitulo()
        }
        <form>
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Artista:</label>
            <input type='text' 
                placeholder='ingrese artista'
                name = 'artista'
                value= {artista}
                className = {`${errores.artista ? classNameError : '' }`}
                onChange={(e) => setArtista(e.target.value)}>

            </input>
            {errores.artista && <div className=''>{errores.artista}</div>}
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Titulo:</label>
            <input type='text' 
                placeholder='ingrese titulo'
                name = 'titulo '
                value= {titulo}
                className = {`${errores.titulo ? classNameError : '' }`}
                onChange={(e) => setTitulo(e.target.value)}>

            </input>
            {errores.titulo && <div className=''>{errores.titulo}</div>}
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Duración:</label>
            <input type='text' 
                placeholder='ingrese duracion'
                name = 'duración '
                value= {duracion}
                className = {`${errores.duracion ? classNameError : '' }`}
                onChange={(e) => setDuracion(e.target.value)}>

            </input>
            {errores.duracion && <div className=''>{errores.duracion}</div>}
            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">Codigo:</label>
            <input type='text' 
                placeholder='ingrese codigo'
                name = 'codigo '
                value= {cod}
                className = {`${errores.cod ? classNameError : '' }`}
                onChange={(e) => setCodigo(e.target.value)}>

            </input>
            {errores.cod && <div className=''>{errores.cod}</div>}
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={guardaOActualizaDisco}>Agregar</button>
        </form>
    </div>
  )
}
