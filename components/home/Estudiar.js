import React from "react";
import styled from "styled-components";
import {RiFilePaper2Fill} from "@react-icons/all-files/ri/RiFilePaper2Fill"



const PorqueEstudiar=styled.section`
 text-align: center;
 background-color: aliceblue;
 
`;
const ContenidoEstudiar=styled.div`
    display: flex;
    flex-direction: column;
    width: 970px;
    height: 100%;
    margin: auto;
    
    i{
        svg{
         font-size: 80px;
     }
 }
`;

export default function Estudiar({Testudiar,Cestudiar}){

    return(
        <>
        
        <PorqueEstudiar>
            <ContenidoEstudiar>
                <h2>{Testudiar}</h2>
                <i><RiFilePaper2Fill/></i>
                <p> {Cestudiar}</p>
            </ContenidoEstudiar>
            
        </PorqueEstudiar>
        </>
    )

}
