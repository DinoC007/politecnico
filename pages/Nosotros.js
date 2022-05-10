import React, {useState, useEffect} from "react";
import styled from "styled-components";
import HeaderPage from "../components/assets/HeaderPage";
import Layout from "../components/Layout";

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


export default function Carrera(){

    const [bPage, setBPage]=useState(false);
    const [estadoPage, setEstadopage]=useState(false);

    const scrollpage=()=>{
        
        if(window.scrollY>=10){
            console.log(window.scrollY);
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
        <Pimg> <img src="https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/240503503_1816453598549449_4535030750637481398_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=wMfTtM_vLGQAX8O8d9H&_nc_ht=scontent-lim1-1.xx&oh=00_AT-gGLlRpQ4046GVwINA8pkTyEDWEjRPx5XDdy58yp0JDg&oe=626568CE" alt="" /> </Pimg>
        <Ptitulo><p>Nosotros</p></Ptitulo>
        <Pcontenido>
            <p>Morbi vulputate nulla sollicitudin efficitur viverra. Vivamus odio turpis, varius vitae nunc vitae, laoreet elementum augue. Morbi lobortis dignissim ligula, vel viverra metus laoreet sed. Aliquam condimentum enim vitae augue feugiat, sed pretium odio consequat. In id consequat nulla, sit amet iaculis purus. Etiam faucibus pretium porttitor. Maecenas nec mollis elit. Mauris dictum eros eget augue mattis luctus. Curabitur pharetra feugiat dui a fringilla. Aenean commodo auctor est a accumsan. Donec dignissim ligula eget dapibus dapibus. Donec ipsum massa, efficitur eget orci vitae, accumsan efficitur tellus. Morbi tristique suscipit quam, vitae maximus risus commodo a. Maecenas pulvinar gravida sapien, sed aliquam nibh sodales quis. Donec porta elit euismod augue aliquam, vitae ullamcorper justo hendrerit.</p>
        </Pcontenido>

        </ContainerPage></Layout></>
        :<><HeaderPage></HeaderPage>
        <Layout>
        <ContainerPage>
        <Pimg></Pimg>
        <Ptitulo></Ptitulo>
        <Pcontenido>
            <p>Morbi vulputate nulla sollicitudin efficitur viverra. Vivamus odio turpis, varius vitae nunc vitae, laoreet elementum augue. Morbi lobortis dignissim ligula, vel viverra metus laoreet sed. Aliquam condimentum enim vitae augue feugiat, sed pretium odio consequat. In id consequat nulla, sit amet iaculis purus. Etiam faucibus pretium porttitor. Maecenas nec mollis elit. Mauris dictum eros eget augue mattis luctus. Curabitur pharetra feugiat dui a fringilla. Aenean commodo auctor est a accumsan. Donec dignissim ligula eget dapibus dapibus. Donec ipsum massa, efficitur eget orci vitae, accumsan efficitur tellus. Morbi tristique suscipit quam, vitae maximus risus commodo a. Maecenas pulvinar gravida sapien, sed aliquam nibh sodales quis. Donec porta elit euismod augue aliquam, vitae ullamcorper justo hendrerit.</p>
        </Pcontenido>
        </ContainerPage></Layout></>

        }
        
        
      
        </>
    );
}