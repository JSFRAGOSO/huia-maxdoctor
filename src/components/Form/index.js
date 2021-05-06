import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import Button from '../../components/Button/index';
import InputMask from "react-input-mask";
import './styles.css'

export default function Form(){

  const [crm, setCrm] = useState('')
  const [ufs, setUfs] = useState([])
  const [selectedUf, setselectedUf] = useState('')
  
  const [mensagemCrm, setmensagemCrm] = useState('')
  const [mensagemUf, setmensagemUf] = useState('')

  useEffect(() =>{
    async function loadUfs(){
      const response = await api.get('/api/v1/localidades/estados');
      setUfs(response.data)
    }  
    loadUfs()
  }, []);

  function checkMandatoryFields(){
    let erro = false

    if(!crm){
      setmensagemCrm('Campo obrigatório')
      erro = true
    }else if(crm.includes('_')){
      setmensagemCrm('CRM deve possuir 5 dígitos');
      erro = true
    }

    if(!selectedUf){
      setmensagemUf('Campo obrigatório');
      erro = true
    }

    return erro;
  }

  function handleSubmit(){
    setmensagemCrm('')
    setmensagemUf('')

    

    if(checkMandatoryFields() === false)
      alert('Sucesso!')
  }

  return (
    <div className="Form">
      <div className="input-block">
        <label htmlFor="description" >CRM</label>
        <InputMask 
          mask="99999"
          name = "crm"
          id="crm"
          placeholder="00000"
          value={crm}
          onChange={e => setCrm(e.target.value)}
          />
      </div>
      {mensagemCrm && <span>{mensagemCrm}</span>}
      <div className="input-block">
        <div className="input-group">
          
            <label htmlFor="description" >UF</label>
            <select 
              defaultValue="Selecionar"
              name = "uf"
              id="uf"
              value={selectedUf}
              onChange={e => setselectedUf(e.target.value)}
            >
                <option color="#BDBBBF" value="Selecionar" hidden ={true} >Selecionar</option> 
                {
                  ufs.map(uf => (
                    <option key={uf.id} value={uf.sigla}>{uf.sigla}</option>
                  ))
                }
            </select>
          
        </div>
      </div>
      {mensagemUf && <span>{mensagemUf}</span>}
      <Button onclick={handleSubmit} description="CONTINUE"/>
      <p>
        CANAL DE COMPRA EXCLUSIVO PARA A CLASSE MÉDICA
      </p>
    </div>
  )
}