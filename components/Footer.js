import React from "react";
import styled from "styled-components";

const ContainerFooter=styled.footer`
  background-color: black;
  color:#ccc;

  ul{
    list-style: none;
  }
  


`;
const FooterContenido=styled.div`
  width: 970px;
  margin: auto;
  display: grid; 
  grid-template-columns: repeat(3, 1fr); 
  grid-template-rows: repeat(3, auto); 
  gap: 0px 0px; 
  grid-template-areas: 
    "infoFooter logoFooter contactoFooter"
    "bolsa-de-trabajo bolsa-de-trabajo bolsa-de-trabajo"
    "derecho derecho derecho"; 
  place-content: center;
  justify-content: center;
  
`;

const InfoFooter=styled.div`
    grid-area: infoFooter;
`;
const LogoFooter=styled.div`
    grid-area: logoFooter;
    img{
        width: 100%;
    }
`;

const ContactoFooter=styled.div`
    grid-area: contactoFooter;
`;
const BolsaTrabajo=styled.div`
    grid-area: bolsa-de-trabajo;
    text-align: center;
`;
const Derecho=styled.div`
    grid-area: derecho;
    text-align: center;
`;

export default function Footer(){

    return(
    <>
    <ContainerFooter>
        <FooterContenido>
        <InfoFooter>
            <ul>
                <li>Direccion: Calle belen av.conquistadores</li>
                <li><a href="#">Capacitaciones</a></li>
                <li>¡Somos Calidad...!</li>
            </ul>
        </InfoFooter>
        <LogoFooter>
            <img src="https://istpolitecnicodelsur.edu.pe/wp-content/uploads/2022/03/transparente-Politecnico-del-Sur-300x217.png" alt="" />
        </LogoFooter>
        <ContactoFooter>
            <ul>
                <li>Facebook <i></i></li>
                <li>whatsapp <i></i> </li>
                <li>correo <span>Contacto@intutitopolitecnico.com</span> </li>
            </ul>
        </ContactoFooter>
        <BolsaTrabajo> <a href="#">Nuestra Bolsa de Trabajo - oportunidades laborales</a></BolsaTrabajo>
        <Derecho> <span>Todos los Derechos reservados intituto politecnico- desarrollado por <a href="#">DevDino</a></span></Derecho>
        </FooterContenido>
    </ContainerFooter>
    </>
    
    );
}