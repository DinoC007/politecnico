import React from "react";
import styled from "styled-components";
import Card from "../components/assets/Card";

const SectionComunicao=styled.div`
    display: flex;
    background-color: #cdd4d9;
    flex-direction: column;
    width: 50%;
    text-align: center;
    padding: 5em;

    
    
`;

export default function useComunicado(){
    return(
        <>
        <SectionComunicao>
            <p className="TComuBlog">Comunicado</p>
        <Card titulo="Comunicado principal" img="https://istpolitecnicodelsur.edu.pe/funcion/wp-content/uploads/2022/03/polislider3-1024x512.png" 
          texto="I am Dexter Schaffer – a hardcore New Yorker, who revels in a creative challenge. I always look for projects that challenge me and take me out of my comfort zone.
          From new brand launches to editorial undertakings, my portfolio contains projects from across the globe." btnurl="#" />
        </SectionComunicao>
        
        </>
    );
    


}