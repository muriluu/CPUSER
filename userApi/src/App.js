import React, {  useState } from 'react';
import './App.css';

function App() {

  

  return (
    <div className="container">
      <h1>Usuários</h1>
      <div className="card-container">
        teste
      </div>
      
      <div className="margin-card">
      <h2>Adicionar Novo Usuário</h2>
    

      </div>
      
     
        <div className="margin-card">
          <h2>Editar Usuário</h2>
          
            <label htmlFor="firstName">Primeiro Nome:</label>
           
            <label htmlFor="lastName">Último Nome:</label>
            
            <button type="submit">Atualizar Usuário</button>
         
        </div>
      
    </div>
  );
}

export default App;
