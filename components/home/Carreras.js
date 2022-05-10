import React,{useState, useRef, useEffect} from "react";
import styled from "styled-components";
const CarreraSection=styled.section`
    background-color: #dee4e9;
    padding-bottom:12px ;
    h3{
        font-size: 30px;   
        text-align: center;
    }
`;
const ContenidoCarrera=styled.div`
    width: 970px;
    margin: auto;
    place-items: center;
    position: relative;
    display: grid;
    gap: 20px;
    grid-template-areas:
        "civil ambiental"
    ;
   

 @media (max-width: 720px) {
    grid-template-areas:
        "civil" 
        "ambiental" 
    ;
 }


`;
const Carrera=styled.div`
    grid-area: ${props=>props.civil ? 'civil' : 'ambiental'};
    background-color: ${props=>props.civil ? "#e3653d":"#4caf50"};
    display: flex;
    flex-direction:column;
    align-items: center;
    text-align: center;
    font-family: cursive;
    font-size: 18px;
    max-width: max-content;
    border: 2px solid #ccc;
    border-radius: 15px;
    
    padding: 2em;
    box-sizing: border-box;
    position: relative;

    img{
        width: 200px;
        min-width: auto;
        height: 200px;
        border-radius: 50%;
        margin-bottom: 14px;
        border: 3px solid #fff;
        box-shadow: 0px 6px 5px #ccc;
    }
    &:hover ~ img{
        box-shadow: 10px  0px  10px #fff;
    }
`;


const BotonMas=styled.a`
    display: block;
    height: 30px;
    width: 80%;
    min-width: 60px;
    background-color: transparent;
    border : 3px solid;
    border-radius: 15px;
    border-color:${props=>props.civil ? "#4caf50" : "#e3653d"} ;
    color: #fff;

    &:hover{
        background-color: ${props=>props.civil ? "#4caf50" : "#e3653d"};
        border-color: #fff;
    }

`;
const Tcarrera=styled.p`
    font-size: 25px;
    font-weight: 700;
    color: #ccc;
`;

const VerInfo=styled.div`
    position: absolute;
    background-color: #000000c9;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    color: #fff;
    align-items: center;
    padding: 2em;
    border-radius: 15px;
    cursor: pointer;
`;



export default function Carreras({dataCarreras}){
    console.log(dataCarreras)
    const [verBotonCivil,setVerBotonCivil]=useState(Boolean);
    const cardCarrera= useRef(null);
    
    const funBoton=(estado)=>{
        setVerBotonCivil(estado)
    }
    

   
  

    return(
        <>
            <CarreraSection>
                <h3>Nuestras Carreras</h3>
                <ContenidoCarrera>
                
                <Carrera civil useRef={cardCarrera} onMouseOver={()=>funBoton(true)} onMouseOut={()=>funBoton(false)}>
                
                    { verBotonCivil ? <VerInfo>
                        <p>Los eventos adicionales, como moverse entre descendientes de son filtrados, así que onEnter/Leave solamente se ejecuta si el cursor ingresa a  o lo deja absolutamente.</p>
                        <BotonMas href="#" civil>Ver mas</BotonMas>
                        </VerInfo> : "" }
                    
                    <Tcarrera>Construcion Civil</Tcarrera>
                    <img src="https://istpolitecnicodelsur.edu.pe/funcion/wp-content/uploads/2022/03/polislider3-1024x512.png" alt="" />
                    
                    
                </Carrera>
                <Carrera>
                    <Tcarrera>Gestion Ambiental</Tcarrera>
                    <img src="https://istpolitecnicodelsur.edu.pe/funcion/wp-content/uploads/2022/03/polislider2-1024x512.png" alt="" />
                    <BotonMas href="#">Ver mas</BotonMas>
                </Carrera>
                </ContenidoCarrera>
            </CarreraSection>
        </>
    )
}