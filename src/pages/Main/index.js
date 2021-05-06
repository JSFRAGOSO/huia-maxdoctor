import React from 'react'
import Button from '../../components/Button/index';
import Header from '../../components/Header/index';

import './styles.css'

export default function Main({history}){
  return (
    <div>
      <Header message="AVALIAÇÃO DE JONAS"/>
      <div id="button">
        <Button onclick={() => history.push('/maxdoctor')} description="ACESSAR MAXDOCTOR"/>
      </div>
    </div>
  )
}