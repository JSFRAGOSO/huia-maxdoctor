import React from 'react';
import cart from '../../assets/cart.png'
import boxes from '../../assets/boxes.png'
import truck from '../../assets/truck.png'
import motorcycle from '../../assets/motorcycle.png'
import sofa from '../../assets/sofa.png'
import './styles.css';
export default function Footer(){

  return (
    <div id="Footer">
      <div>
        <img src={cart} alt="Logo"/>
        <span>FACILIDADE DE COMPRA</span>
      </div>
      <div>
        <img src={boxes} alt="Logo"/>
        <span>QUANTIDADE NÃO LIMITADA</span>
      </div>
      <div>
        <img src={truck} alt="Logo"/>
        <span>FRETE GRÁTIS</span>
      </div>
      <div>
        <img src={motorcycle} alt="Logo"/>
        <span>AGILIDADE</span>
      </div>
      <div>
        <img src={sofa} alt="Logo"/>
        <span>COMODIDADE</span>
      </div>
    </div>
  )
}