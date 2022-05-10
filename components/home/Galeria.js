import React from "react";
import styled from "styled-components";

const ContainerGaleria=styled.section`
    margin: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 60px 40vh;
    grid-column-gap: 10px;
    grid-template-areas: 
    "titulo titulo titulo titulo"
    ". . . ."; 


    place-content: center;
    place-items: center;
    place-self: auto;
    justify-content: center;
    padding: 2em;

    div{
        img{
            width: 100%;
            height: 100%;
        }
    }
    .TituloGeneral{
        font-size: 25px;
        text-align: center;
        grid-area: titulo;
    }

    @media (max-width: 720px) {
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 60px 40vh 40vh;
        grid-template-areas: 
        "titulo titulo"
        " . . " 
        " . . "; 
    }

`;

export default function Galeria(){

    return(
        <>
        <ContainerGaleria>
            <p className="TituloGeneral">Galeria</p>
            <div><img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/240503503_1816453598549449_4535030750637481398_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=wMfTtM_vLGQAX8O8d9H&_nc_ht=scontent-lim1-1.xx&oh=00_AT-gGLlRpQ4046GVwINA8pkTyEDWEjRPx5XDdy58yp0JDg&oe=626568CE" alt="" /></div>
            <div><img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/240503503_1816453598549449_4535030750637481398_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=wMfTtM_vLGQAX8O8d9H&_nc_ht=scontent-lim1-1.xx&oh=00_AT-gGLlRpQ4046GVwINA8pkTyEDWEjRPx5XDdy58yp0JDg&oe=626568CE" alt="" /></div>
            <div><img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/240503503_1816453598549449_4535030750637481398_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=wMfTtM_vLGQAX8O8d9H&_nc_ht=scontent-lim1-1.xx&oh=00_AT-gGLlRpQ4046GVwINA8pkTyEDWEjRPx5XDdy58yp0JDg&oe=626568CE" alt="" /></div>
            <div><img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/240503503_1816453598549449_4535030750637481398_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=wMfTtM_vLGQAX8O8d9H&_nc_ht=scontent-lim1-1.xx&oh=00_AT-gGLlRpQ4046GVwINA8pkTyEDWEjRPx5XDdy58yp0JDg&oe=626568CE" alt="" /></div>
        </ContainerGaleria>
        </>
    );
}