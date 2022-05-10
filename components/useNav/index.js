import Link from "next/link";
import React,{useRef, useEffect} from "react";
import styled from "styled-components";
import Image from "next/dist/client/image";




const NavMenu=styled.nav`
    background-color: black;
    height: 80px;
    width: 100%;
    
    display: flex;
    
    justify-content: flex-end;
    padding: 5px;
    font-family: cursive;
    position: sticky;
    top: 0;
    z-index: 10;

    ul{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-content:space-around;
        width: 970px;
        margin: 0 100px;
        padding: 15px;
        list-style: none;
        li{
            position: relative;

         &:hover ~ ul{
            display: flex;
         }    
        }
    }

    a{
        color:#fff;
        
    }
    a:hover{
        color: #ea9d00;
        border-bottom: 1px solid #fff;
        transition: opacity 1s ease 0s;
    }
    .subCarreras{
        
        display: none;
        flex-direction: column;
        background-color: #ea9d00;
        position: absolute;
        width: 220px;
        height: 160px;
        top: 100%;
        margin: 0;
        left: 0;

        a:hover{
            color: green;
        }
    }

    .hamburger-lines {
        height: 26px;
        width: 32px;
        position: absolute;
        top: 17px;
        left: 20px;
        z-index: 2;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        cursor: pointer;
    }

.hamburger-lines .line {
  display: none;
  height: 4px;
  width: 100%;
  border-radius: 10px;
  background: #fff;
}



    @media (max-width:  720px) {
        background-color: black;
        position: relative;
        width: 100%;
        
        ul{
        display: none;
        flex-direction: column;
    
        position: absolute;
        top: 100%;
        background-color: #000000ed;
        width: 100%;
        left: 0;
        margin-left: 0px;






        li{

            position: relative;
            padding: 20px 0;
         
         &:hover{
            border-bottom: 1px solid #fff;
         }

        }
         a:hover{
         border-bottom: none;
          }



        }
        .active-menu{
            display: flex;
        }


        .hamburger-lines .line {
            display: block;

    
        &:hover{
            background: #ccc;
            }    
        }
      .sub:hover > ul {
        display: flex;
        position: relative;
        width: 100%;
      }
        
    }


    .sub:hover > ul { display: flex; }




`;


export default function useNav(){
    const btnmenu=useRef();
    const menuresponsive=()=>{
        if(btnmenu.current.classList.contains('active-menu')){
            btnmenu.current.classList.remove('active-menu');
        }else{
            btnmenu.current.classList.add('active-menu');
        }
    }

    
    

    return(
        <>
        <NavMenu>
        <div className="hamburger-lines" onClick={()=>menuresponsive()} >
              <span className="line line1"></span>
              <span className="line line2"></span>
              <span className="line line3"></span>
        </div>
        
            <ul ref={btnmenu}>
                <li>
                    <Link href="/">
                     <a>Inicio</a>
                    </Link>
                </li>  
                <li className="sub">
                    <a>Carreras</a>
                    
                    <ul className="subCarreras" >
                        <li> <a href="#">Construccion Civil</a></li>
                        <li><a href="#">Gestion Ambiental</a></li>
                    </ul>
                </li>
                <li>
                    <Link href="#">
                        <a>acerca</a>
                    </Link>
                </li>
                <li>
                    <a href="#">Nosotros</a>
                </li>
                <li>
                    <a href="#">Buscar Certifidado</a>
                </li>
            </ul>
            
        </NavMenu>
        </>
    );
}