"use strict";

const key = "e764472f4f9a8ae4d738ed734613667b";

async function buscarCidade(cidade) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}`
  ).then((response) => response.json());

  console.log(dados);
}

function buttonClick() {
  const cidade = document.querySelector(".input-cidade").value;

  buscarCidade(cidade);
}
