import React from "react";

function Portfolio() {
  return (
    <div>
      <h1>Meu Portfólio</h1>
      <p>Olá! Meu nome é [seu nome] e sou um desenvolvedor de software com [x] anos de experiência.</p>
      <h2>Projetos</h2>
      <ul>
        <li>
          <a href="[link do projeto 1]">Nome do Projeto 1</a>
          <p>Descrição do projeto 1.</p>
        </li>
        <li>
          <a href="[link do projeto 2]">Nome do Projeto 2</a>
          <p>Descrição do projeto 2.</p>
        </li>
        <li>
          <a href="[link do projeto 3]">Nome do Projeto 3</a>
          <p>Descrição do projeto 3.</p>
        </li>
      </ul>
      <h2>Habilidades</h2>
      <ul>
        <li>Linguagens de programação: [lista de linguagens]</li>
        <li>Tecnologias: [lista de tecnologias]</li>
        <li>Soft skills: [lista de soft skills]</li>
      </ul>
    </div>
  );
}

export default Portfolio;
