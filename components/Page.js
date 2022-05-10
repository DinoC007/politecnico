import React, {useState, useEffect} from "react";
import styled from "styled-components";
import HeaderPage from "./assets/HeaderPage";
import Layout from "./Layout";

const ContainerPage=styled.section`
  display: grid; 
  grid-template-columns: 920px; 
  grid-template-rows: repeat(3, auto); 
  gap: 10px 50px; 
  grid-template-areas: 
    "Pimg"
    "Ptitulo"
    "Pcontenido"; 
  place-content: center;
  place-items: center;
  justify-content: center;
  padding: 2em;
  overflow: hidden;
  margin-bottom: 4em;
  position: static;
  top: 20vh;

`;
const Pimg=styled.div`
    grid-area: Pimg;
    overflow: hidden;
    img{
        width: 100%;
        height: 400px;
        overflow: hidden;
    }
    transition: all 1s ease-out;
`;

const Ptitulo=styled.div`
    font-family: cursive;
    font-size: 30px;
    text-align: center;
    grid-area: Ptitulo;
`;

const Pcontenido=styled.article`
    grid-area: Pcontenido;
    text-align: justify;
`;


export default function Page({imgpage,titulopage,contenidopage}){

    const [bPage, setBPage]=useState(false);
    const [estadoPage, setEstadopage]=useState(false);

    const scrollpage=()=>{
        
        if(window.scrollY>=10){
            //console.log(window.scrollY);
            setBPage(true)
        }else{
            setBPage(false)
        }
        

    }
   
    
      useEffect(()=>{
            window.addEventListener('scroll',scrollpage)

        return ()=>{
            window.removeEventListener('scroll',scrollpage)
        }
      },[])

      



    return(
        <>
        {bPage?<><Layout><ContainerPage>
        <Pimg> <img src={imgpage} alt={titulopage} /> </Pimg>
        <Ptitulo><p>{titulopage}</p></Ptitulo>
        <Pcontenido>
            <p>{contenidopage}</p>
        </Pcontenido>

        </ContainerPage></Layout></>
        :<><HeaderPage imgPC={imgpage} TituloCP={titulopage}></HeaderPage>
        <Layout>
        <ContainerPage>
        <Pimg></Pimg>
        <Ptitulo></Ptitulo>
        <Pcontenido>
            <p>{contenidopage}</p>
        </Pcontenido>
        </ContainerPage></Layout></>

        }
        
        
      
        </>
    );
}