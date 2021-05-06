import React from 'react'
import './styles.css'
export default function Button({onclick, description}){
  return (
    <button onClick={onclick}>
      {description}
    </button>
  )
}