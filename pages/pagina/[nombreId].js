import React, {useState,useEffect} from "react";
import Page from "../../components/Page";

export default function Pagina({paginaValido}) {
    
  console.log(paginaValido)


    return (
        <>
        
       
        <Page
            imgpage={`http://localhost:8055/assets/`+paginaValido.imgPage}
            titulopage={paginaValido.tituloPage}
            contenidopage={paginaValido.ContenidoPage}
        />
        </>
    );
}

/*export async function getServerSideProps() {
  try {
      //http://localhost:1337/api/carreras
      const res =await fetch('http://localhost:8055/items/page');
      const posts =await res.json();
      console.log(posts)
      //console.log(posts.data)
      
      
      return {
        props: {
            posts:posts
        }, // will be passed to the page component as props
                  

      }
      

  } catch (error) {
      console.log(error)
      
  }

}*/
 

export async function getServerSideProps(context){
  const versingle=context.params.nombreId;
  console.log( "hola sigle", versingle)  
  try {
    //estableciendo conexion con api
    const res =await fetch('http://localhost:8055/items/page');
    const paginas= await res.json();
    //console.log(paginas)
    
  const rutasPaginas=paginas.data.map((pagina)=>{
    return{
      ...pagina,
      ruta: pagina.tituloPage.split(' ').join('-').toLowerCase()
    }
    
  })
  console.log("Este el tipo",rutasPaginas.tipo)
  const paginaEncontrado=rutasPaginas.filter(pagina=>pagina.ruta== versingle)
  //numbers.filter(number => number > 10 );
  let paginaValido = paginaEncontrado[0]
  console.log("esta es valido",paginaValido)
    return {
      props:{

        paginaValido
      }
    }

  } catch (error) {
    console.log(error)
  }


}






/*export async function getServerSideProps(context) {

  const { pagina } = context.query
  try {
      const peticion = await fetch('http://localhost:8055/items/page')
      const paginas = await peticion.json()

      const paginasNuevos = paginas.results.map((pagina) => {
          return {
              ...pagina,
              ruta: pagina.tituloPage.split(' ').join('-').toLowerCase()
          }
      })
      //Pagina Singular
      const paginaEncontrado = paginasNuevos.filter(pagina => pagina.ruta == context.params.pagina)
      let paginaValido = paginaEncontrado[0]
      return {
          props: { paginaValido }, // will be passed to the page component as props
      }
  } catch (error) {

  }

}*/