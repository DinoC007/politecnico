import React from "react";
import styled from "styled-components";
import Card from "../components/assets/Card";
const SectionBlog=styled.div`
    background-color: #d57474;
    display: flex;
    flex-direction: column;
    width: 50%;
    text-align: center;
    padding: 5em;

`;


export default function useBlog(){
    return(
        <>
        <SectionBlog>
            <p className="TComuBlog">Eventos-Blog</p>
        <Card blog titulo="Evento y blogs Instituto" texto="Today we have put together a small collection of 10 box shadows that you can use to give your images a bit more flair. The image shadows are created using the box-shadow property and with most examples we also use the :before and :after pseudo elements.
            With all of the examples below, I have added a border with padding around the image to make the shadow stand out more, the CSS code used the the border is as follows:" btnurl="#" />
        <Card blog titulo="Eventos y titulo de blog" texto="Today we have put together a small collection of 10 box shadows that you can use to give your images a bit more flair. The image shadows are created using the box-shadow property and with most examples we also use the :before and :after pseudo elements.
            With all of the examples below, I have added a border with padding around the image to make the shadow stand out more, the CSS code used the the border is as follows:" btnurl="#" />
        </SectionBlog>
        
        </>
    );
}