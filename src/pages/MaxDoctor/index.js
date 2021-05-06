import React from 'react'
import Header from '../../components/Header/index';
import Form from '../../components/Form/index';
import Footer from '../../components/Footer/index';

export default function Maxdoctor(){
  return (
    <div>
      <Header message="PLATAFORMA DE COMPRA DIRETA DO SEU ANESTÉSICO TÓPICO"/>
      <Form/>
      <div id="Icons">
        <Footer/>
      </div>
      
    </div>
  )
}