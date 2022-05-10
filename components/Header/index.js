import React, {useEffect,useState, useRef } from "react";
import styled from "styled-components";
import {FaWhatsapp} from "@react-icons/all-files/Fa/FaWhatsapp";
import {MdMailOutline} from "@react-icons/all-files/md/MdMailOutline";
import {RiFacebookCircleLine} from "@react-icons/all-files/ri/RiFacebookCircleLine";
import {RiBankLine} from "@react-icons/all-files/ri/RiBankLine";

let nombreInsituto="Instituto Superior Politecnico Del sur";


const HeaderContainer = styled.header`
    color: white;
    font-family: cursive;
    background-color: #02931c;
    //background-image: url();
    
    height: 80vh;
    width: 100%;
    
    display: flex;
    flex-direction: column;
`;

const HeaderContacto = styled.nav`
    background: #000000db;
    height: 2.5rem;
    padding: 0.5rem 10px;
    text-align: center;
    display: grid;
    grid-auto-flow: column; 
    grid-template-columns: 2fr repeat(2, 0.2fr);  
    gap: 0px 0px; 
    grid-template-areas: 
    ". . .";
    svg{
        font-size: 20px;
    }
    span{
        text-align: right;
        cursor: pointer;
    }
    span svg{
        margin-left: 1px;
    }

`;

const ContainerBanner= styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    

    .itembanner{
        
        width: 50%;
    }
    
    .imgbanner{
        border-radius: 50% 50% 0 / 50% 0 0 50%;
        
        display: flex;
        color: transparent;
        
        flex-direction:column;
        justify-content: center;
        text-align:center;
        transition:all 3s ease-out 2s;
        
        
        &.active{
            color: #fff;
            background-color: #02931c;
            border: 5px solid #fff;
        }


        i{
            svg{
                font-size: 50px;
            }
        }
        h2{
            float: left;
            color: #fff;
            position: relative;
            font-size: 25px;

            span{
                position: absolute;
                right: 0;
                width: 0;
                
                background-color: #02931c;
                border-left: 1px solid #000;
                animation: maquina 5s infinite alternate 5s steps(${nombreInsituto.length});
            }
        }
        @keyframes maquina {
            from{
                width: 100%;
            }
            to{
                width: 0;
            }
        }
    }
   

`;

export default function Header({Thead,Lhead, Ihead}){
    
//console.log(Ihead,"hola")
    const banner =useRef(null);

    const [verText, setVerText] =useState(false);
    

  

    useEffect(()=>{
        
        setVerText(true);

    },[]);

    return(
       
        <>
         <HeaderContainer ref={banner} >
             
             <HeaderContacto>
             
                 <span><MdMailOutline/> contacto@politecnicodelsur.com</span>
                 <a href="#"><FaWhatsapp /></a>
                 <a href="#"><RiFacebookCircleLine/></a>
                 

             </HeaderContacto>
             <ContainerBanner style={{background: `url(${Ihead})`}} >
                <div className="itembanner textbanner"></div>
                
                <div  className={`itembanner imgbanner ${verText? 'active' : ''}`} >
                    <i><RiBankLine/></i>
                    <h2>{Thead.toUpperCase()}<span>&#160;</span> </h2>
                    <p>{Lhead}</p>
                    
                </div>
                
                
                
             </ContainerBanner>
             
        </HeaderContainer>
       
        </>
    )
}


 