import React from "react";
import styled from "styled-components";
import UseNav from "../components/useNav";
import Header from "../components/Header";
import Footer from "./Footer";
import { loadGetInitialProps } from "next/dist/shared/lib/utils";

export default function Layout({ children,home,Htitulo,Himg,Hlema }) {
    

    return(
        <>
        { home ? (<> <Header Thead={Htitulo}  Lhead={Hlema} Ihead={Himg}></Header> <UseNav></UseNav></>) :(<> <UseNav></UseNav></>) }
        
        
        <div>{children}</div>
        
        <Footer></Footer>
        </>

    );
    
}