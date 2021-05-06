import React from 'react';
import logo from '../../assets/logo.png'
import './styles.css';
export default function Header({message}){

  return (
    <div className="Header">
      <img src={logo} alt="Logo"/>
      <h3>{message}</h3>
    </div>
  )
}