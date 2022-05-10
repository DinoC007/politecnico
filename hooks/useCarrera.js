import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import HeaderPage from "../components/assets/HeaderPage";

const ContainerCarrera=styled.section`
padding-top: 40px;
  width: 970px;
  margin: auto;
  margin-top: 100px;
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(3, auto); 
  gap: 10px 50px; 
  grid-template-areas: 
    "Tcarrera Tcarrera Tcarrera"
    "Timg Ttexto Ttexto"
    "Tmodulos Tmodulos Tmodulos"; 
  place-content: center;
  place-items: center;
  justify-content: center;
  padding: 2em;

`;
const Tcarrera=styled.div`
    grid-area: Tcarrera;
    font-size: 30px;
    font-family: cursive;
    text-align: center;
`;

const Timg=styled.div`
    grid-area: Timg;
    img{
        width: 100%;
    }
`;

const Ttexto=styled.article`
    grid-area: Ttexto;
    text-align: justify;
`;
const Tmodulos=styled.section`
    display: grid; 
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(3, 1fr); 
    gap: 9px 50px; 
    grid-template-areas: 
        "Mtitulo Mtitulo Mtitulo Mtitulo"
        "Modulo1 Modulo1 Modulo2 Modulo2"
        "Modulo3 Modulo3 . .";


    grid-area: Tmodulos; 
`;
const Mtitulo=styled.div`
    grid-area: Mtitulo;
    font-size: 25px;
    font-family: cursive;
    
`;





export default function useCarrera({tituloCarrera, imgCarrera, contenidoCarrera}){

    const [bCarrera, setBCarrera]=useState(false);

    const scrollcarrera=()=>{
        
        if(window.scrollY==0){
            console.log(window.scrollY);
            setBCarrera(false)
            
        }
        if(window.scrollY >=40){
            setBCarrera(true)
        }
        
        

    }
   
    
      useEffect(()=>{
            window.addEventListener('scroll',scrollcarrera)

        return ()=>{
            window.removeEventListener('scroll',scrollcarrera)
        }
      },[])


    return(
        <>
        {bCarrera?<><Layout>
        <ContainerCarrera>
            <Tcarrera><p>{tituloCarrera}</p></Tcarrera>
            <Timg> <img src={imgCarrera} alt={tituloCarrera} /> </Timg>
            <Ttexto>
                <p>{contenidoCarrera}</p>
            </Ttexto>
            <Tmodulos>
                <Mtitulo>Nuestro Modulos</Mtitulo>
            </Tmodulos>
        </ContainerCarrera></Layout></>
        :<><HeaderPage imgPC={imgCarrera} TituloCP={tituloCarrera} ></HeaderPage>
        <Layout>
        <ContainerCarrera>
            <Tcarrera></Tcarrera>
            <Timg></Timg>
            <Ttexto>
                <p>{contenidoCarrera}</p>
            </Ttexto>
            <Tmodulos>
                <Mtitulo>Nuestro Modulos</Mtitulo>
            </Tmodulos>
        </ContainerCarrera>
        </Layout></>

        }

        </>
    );
}