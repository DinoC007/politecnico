import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from '../components/Layout'
import Estudiar from '../components/home/Estudiar'
import Carreras from '../components/home/Carreras'
import ComuBlog from '../components/home/ComuBlog'
import Galeria from '../components/home/Galeria'

export default function Home({dataheads, dataAsset, dataCarrera}) {
  const imgBanner="http://localhost:8055/assets/"+dataheads.img_Instituto
  // Htitulo={dataheads.Nombre_instituto} Hlema={dataheads.lema_instituto} Himg={imgBanner}
  //console.log(dataCarrera)
  return (
    <Layout home Htitulo={dataheads.Nombre_instituto} Hlema={dataheads.lema_instituto} Himg={imgBanner}>
      <Estudiar  Testudiar={dataAsset.Titulo_asset}  Cestudiar={dataAsset.Contenido_assest} />
      <Carreras dataCarreras={dataCarrera}/>
      <ComuBlog/>
      <Galeria/>
    </Layout>
  )
}


export async function getServerSideProps() {
  try {
    //const instituto =await fetch('http://localhost:8055/items/institutos/1');
   // const home= await fetch('http://localhost:8055/items/homeassets/1');

  //  Promise.all([instituto,home]).then(values=>{
  //    return promise.all(values.map(r=>r.json()));
  //  }).then(values=>{
  //    console.log(values)
  //  })
  // 
  //  console.log(values)

    /*const dataFull=[];

    const dataHome = await Promise.all([
      fetch('http://localhost:8055/items/institutos/1').then(res => res.json()),
      fetch('http://localhost:8055/items/homeassets/1').then(res => res.json())
  ])
  const dataInstituto=dataHome[0];
  const dataAsset=dataHome[1];

  console.log(dataInstituto, "holaaaaaaaaaaaaaaaaaaaaaaaaaa")*/
 
  
      //http://localhost:1337/api/carreras
      const res =await fetch('http://localhost:8055/items/institutos/1?fields=*,pk_comunicado.*,pk_asset.*,pk_blog.*,pk_carrera.*');
      const heads =await res.json();
      const dataheads=heads.data;
      
      const dataAsset=dataheads.pk_asset[0];

      const dataCarrera=dataheads.pk_carrera;

      console.log(dataCarrera)
      //console.log(posts.data)
      //para los home Assset
      //const rest =await fetch('http://localhost:8055/items/homeassets/1');
      //const home =await res.json();
      //const datahome=home.data;
      //console.log(datahome)
      //onsole.log(dataFull,"hola")
      return {
        props: {
            dataheads,
            dataAsset,
            dataCarrera
            
        }, // will be passed to the page component as props
                  

      }
      
      

  } catch (error) {
      console.log(error)
      
  }

}

