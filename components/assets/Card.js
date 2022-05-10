import React from "react";
import styled from "styled-components";

const CardContainer=styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
flex-direction:column;

`;

const CardImagen =styled.div`
    width: 350px;
    

    img{
        width: 100%;
        height: 300px;
    }

`;
const CardTexto=styled.div`
    width: 350px;
    text-align: ${props=>props.blog ? "center": "justify"};
    font-size:16px ;

`;
const CardBoton=styled.a`
    width: 100%;
    font-size: 25px;
    padding: 10px;
    border-color: ${props=>props.img? '#fff':''};
    border: 2px solid;
    
`;

const CardTitulo=styled.p`
    font-size: 30px;
    color: #fff;
    
`;

export default function Card(props){


    return(
        <>
        {props=props.img ? 
            <CardContainer>
                <CardImagen>
                    <img src={props.img} alt="" />
                </CardImagen>
                <CardTitulo>{props.titulo}</CardTitulo>
                <CardTexto>
                    <p>{props.texto}</p>
                </CardTexto>
                <CardBoton href={props.btnurl}>Ver mas</CardBoton>

                
            </CardContainer>
        :
        <CardContainer>
                <CardTitulo>{props.titulo}</CardTitulo>
                <CardTexto>
                    <p>{props.texto}</p>
                </CardTexto>
                <CardBoton href={props.btnurl} >ver mas</CardBoton>
        </CardContainer>

    
        }
        
        </>

    );



}