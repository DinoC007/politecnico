import React from "react";
import styled from "styled-components";
import UseComunicado from "../../hooks/useComunicado";
import UseBlog from "../../hooks/useBlog";

const SectionCB=styled.section`
    display: flex;
    flex-direction: row;
    margin: auto;
    .TComuBlog{
        font-size: 25px;
        font-family: cursive;
    }

`;
const contenidoComu=styled.div`

`;

export default function ComuBlog(){

    return(
        <>
        <SectionCB>
            <UseComunicado/>
            <UseBlog/>
        </SectionCB>
        </>
    );

}