import React, { useState } from 'react'
import {guardaDiscoServicio} from '../servicios/DiscoServicio'
import { useNavigate } from 'react-router-dom'

export default function ComponenteDisco() {

    const [artista, setArtista]=useState('')
    const [titulo, setTitulo]=useState('')
    const [duracion, setDuracion]=useState('')
    const [cod, setCodigo]=useState('')
    const navegador = useNavigate()

     function guardaDisco(e){
        e.preventDefault();
        const disco = {titulo,artista,cod,duracion}
        console.log(disco)

        guardaDiscoServicio(disco).then((respuesta) =>{
            console.log(respuesta.data);
            navegador('/discos')
        })
    }
    
  return (
    <div>
        <h2>Agregar Disco</h2>
        <form>
            <label>Artista:</label>
            <input type='text' 
                placeholder='ingrese artista'
                name = 'artista'
                value= {artista}
                onChange={(e) => setArtista(e.target.value)}>

            </input>
            <label>Titulo:</label>
            <input type='text' 
                placeholder='ingrese titulo'
                name = 'titulo '
                value= {titulo}
                onChange={(e) => setTitulo(e.target.value)}>

            </input>
            <label>Duración:</label>
            <input type='text' 
                placeholder='ingrese duracion'
                name = 'duración '
                value= {duracion}
                onChange={(e) => setDuracion(e.target.value)}>

            </input>
            <label>Codigo:</label>
            <input type='text' 
                placeholder='ingrese codigo'
                name = 'codigo '
                value= {cod}
                onChange={(e) => setCodigo(e.target.value)}>

            </input>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={guardaDisco}>Agregar</button>
        </form>
    </div>
  )
}
