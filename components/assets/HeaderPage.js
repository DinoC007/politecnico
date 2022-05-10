import React from "react";
import styled from "styled-components";
import Image from "next/dist/client/image";

const BannerContainer = styled.header`
    color: white;
    font-family: cursive;
    background-color: #000000e8;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    
    
`;
const BannerContenido=styled.div`
   
    
    background-size: cover;
    height: 70vh;
    width: 970px;
    margin: auto;
    filter: opacity(0.5);
    img{
        width: 100%;
    }
`;

const Ptitulo=styled.div`
    font-family: cursive;
    font-size: 30px;
    text-align: center;
    grid-area: Ptitulo;
`;


export default function HeaderPage(props){
    const imgPC=props.imgPC;
    return(
        <>
        <BannerContainer>
         <Ptitulo><p>{props.TituloCP? props.TituloCP: "Titulobanner"}</p></Ptitulo>
         <BannerContenido>
           <img src={props.imgPC} alt="" /> 
             
         </BannerContenido>
        </BannerContainer>
        {console.log(imgPC)}
        </>

    );
 


}