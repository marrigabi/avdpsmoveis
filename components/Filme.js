import React from 'react';  

interface FilmeProps {  
  titulo: string;  
  diretor: string;  
  origem: string;  
  cartaz: string;  
  ano: number;  
}  

const Filme: React.FC<FilmeProps> = ({ titulo, diretor, origem, cartaz, ano }) => {  
  return (  
    <div style={{ margin: '10px', textAlign: 'center' }}>  
      <img src={cartaz} alt={titulo} style={{ width: '100px', height: '150px' }} />  
      <h3>{titulo}</h3>  
      <p>Diretor: {diretor}</p>  
      <p>Origem: {origem}</p>  
      <p>Ano: {ano}</p>  
    </div>  
  );  
};  

export default Filme;