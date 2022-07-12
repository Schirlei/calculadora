const lista_paises = [{"Rank":1,"Country":"Austrália","value":75},{"Rank":2,"Country":"Macau","value":74},{" Rank":3,"Country":"Hong Kong","value":73},{"Rank":4,"Country":"São Marinho","value":73},{"Rank":5 ,"Country":"Suíça","value":73},{"Rank":6,"Country":"Malta","value":71},{"Rank":7,"Country":"Cingapura","value":71},{"Rank":8,"Country":"Luxemburgo","value":71},{"Rank":9,"Country":"Japão","value" :70},{"Rank":10,"Country":"Bermudas","value":70},{"Rank":11,"Country":"Espanha","value":70},{" Rank":12,"Country":"Canadá","value":69},{"Rank":13,"Country":"Portugal","value":69},{"Rank":14,"Country":"Áustria","value":69},{"Rank":15,"Country":"Nova Zelândia","value":69},{"Rank":16,"Country":"Chipre ","value":69},{"Rank":17,"Country":"Alemanha","value":69},{"Rank":18,"Country":"Coreia do Sul","value" :69},{"Rank":19,"Country":"Noruega","value":69},{"Rank":20,"Country":"Suécia","value":68},{" Rank":21,"Country":"França","value":68},{"Rank":22,"Country":"Finlândia","value":68},{"Rank":23,"Country":"Dinamarca ","value":67},{"Rank":24,"Country":"Estados Unidos","value":67},{"Rank":25,"Country":"Countryes Baixos","value" :67},{"Rank":26,"Country":"Uruguai","value":66},{"Rank":27,"Country":"Emirados Árabes Unidos","value":66}, {"Rank":28,"Country":"Eslovênia","value":66},{"Rank":29,"Country":"Tcheca","value":65},{"Rank":30 ,"Country":"Croácia","value":65},{"Rank":31,"Country":"Catar","value":64},{"Rank":32,"Country":" Israel","value":64},{"Rank":33,"Country":"Polônia","value":64},{"Rank":34,"Country":"Grécia","value" :64},{"Rank":35,"Country":"Itália","value":64},{"Rank":36,"Country":"Islândia","value":63},{" Rank":37,"Country":"Hungria","value":63},{"Rank":38,"Country":"Estônia","value":62},{"Rank":39,"Country":"Bélgica","value":62},{"Rank":40,"Country":"Irlanda","value":62},{"Rank":41,"Country":"Chile" ,"value":61},{"Rank":42,"Country":"Bulgária","value":61},{"Rank":43,"Country":"Reino Unido","value": 61},{"Rank":44,"Country":"Eslováquia","value":60},{"Rank":45,"Country":"Lituânia","value":59},{"Rank ":46,"Co untry":"Letônia","value":59},{"Rank":47,"Country":"Romênia","value":59},{"Rank":48,"Country":"Arábia Saudita ","value":59},{"Rank":49,"Country":"Macedônia do Norte","value":59},{"Rank":50,"Country":"Bahrein","value" :59},{"Rank":51,"Country":"Omã","value":59},{"Rank":52,"Country":"Tailândia","value":58},{" Rank":53,"Country":"Malásia","value":57},{"Rank":54,"Country":"Costa Rica","value":57},{"Rank":55, "Country":"Samoa","value":57},{"Rank":56,"Country":"Geórgia","value":57},{"Rank":57,"Country":"Maldivas ","value":56},{"Rank":58,"Country":"Kuwait","value":56},{"Rank":59,"Country":"China","value": 56},{"Rank":60,"Country":"Tunísia","value":56},{"Rank":61,"Country":"Montenegro","value":56},{"Rank ":62,"Country":"Argentina","value":56},{"Rank":63,"Country":"Paraguai","value":55},{"Rank":64,"Country ":"Peru","value":55},{"Rank":65,"Country":"Sri Lanka","value":55},{"Rank":66,"Country":"Marrocos" ,"value":55},{"Rank":67,"Country":"Equador","value":54},{"Rank":68,"Country":"Turquia","value":54 },{"Rank":69, "Country":"Albânia","value":54},{"Rank":70,"Country":"Jordânia","value":53},{"Rank":71,"Country":"Bósnia e Herzegovina","value":53},{"Rank":72,"Country":"Armênia","value":53},{"Rank":73,"Country":"Mongólia","value ":53},{"Rank":74,"Country":"Senegal","value":53},{"Rank":75,"Country":"Sérvia","value":53},{ "Rank":76,"Country":"México","value":52},{"Rank":77,"Country":"Argélia","value":52},{"Rank":78, "Country":"Ruanda","value":52},{"Rank":79,"Country":"África do Sul","value":52},{"Rank":80,"Country":" Índia","value":52},{"Rank":81,"Country":"Bolívia","value":52},{"Rank":82,"Country":"Indonésia","value" :51},{"Rank":83,"Country":"Trinidad e Tobago","value":51},{"Rank":84,"Country":"Timor-Leste","value":51 },{"Rank":85,"Country":"Cazaquistão","value":51},{"Rank":86,"Country":"Vietnã","value":50},{"Rank" :87,"Country":"Moldávia","value":50},{"Rank":88,"Country":"Ucrânia","value":50},{"Rank":89,"Country" :"Egito","value":50},{"Rank":90,"Country":"Jamaica","value":50},{"Rank":91,"Country":"Madagascar","value":50},{"Rank":92,"Country":"Quirguistão","value":49},{"Rank":93,"Country":"Nepal","value" :49},{"Rank":94,"Country":"Gana","value":49},{"Rank":95,"Country":"República Dominicana","value":49},{ "Rank":96,"Country":"Tanzânia","value":49},{"Rank":97,"Country":"Quênia","value":48},{"Rank":98, "Country":"Malawi","value":48},{"Rank":99,"Country":"Rússia","value":48},{"Rank":100,"Country":"Suriname ","value":48},{"Rank":101,"Country":"Brasil","value":48},{"Rank":102,"Country":"Colômbia","value": 47},{"Rank":103,"Country":"Paquistão","value":47},{"Rank":104,"Country":"Laos","value":47},{"Rank ":105,"Country":"Filipinas","value":46},{"Rank":106,"Country":"Azerbaijão","value":46},{"Rank":107,"Country ":"Líbano","value":46},{"Rank":108,"Country":"Bangladesh","value":45},{"Rank":109,"Country":"Honduras", "value":45},{"Rank":110,"Country":"Guatemala","value":45},{"Rank":111,"Country":"El Salvador","value":45 },{"Rank":112,"Country":"Uganda","value":44},{"Rank":113,"Country":"Camboja","value":44},{"Rank":114,"Country":"Lesoto","value":44},{"Rank":115,"Country":"Zâmbia","value":44},{"Rank":116 ,"Country":"Gâmbia","value":44},{"Rank":117,"Country":"Bielorrússia","value":44},{"Rank":118,"Country":" Tajiquistão","value":43},{"Rank":119,"Country":"Gabão","value":43},{"Rank":120,"Country":"Birmânia","value" :42},{"Rank":121,"Country":"Etiópia","value":42},{"Rank":122,"Country":"Togo","value":42},{" Rank":123,"Country":"Irã","value":42},{"Rank":124,"Country":"Nicarágua","value":42},{"Rank":125,"Country":"Costa do Marfim","value":41},{"Rank":126,"Country":"Burundi","value":41},{"Rank":127,"Country":"Serra Leone","value":40},{"Rank":128,"Country":"Zimbábue","value":39},{"Rank":129,"Country":"Moçambique","value" :36},{"Rank":130,"Country":"Angola","value":36},{"Rank":131,"Country":"Afeganistão","value":35},{" Rank":132,"Country":"Camarões","value":34},{"Rank":133,"Country":"Iraque","value":34},{"Rank":134,"Country":"Nigéria","value":32},{"Rank":135,"Country":"Chade","value":30},{"Rank":136,"Country":"Cong o (Dem. República)","value":29}]
const seletor = document.querySelector('#lista-paises');

function alimenta_seletor(lista) {
  
  for (pais of lista) {
    
    const nova_opcao = document.createElement('option');
    nova_opcao.innerText = pais.Country;
    nova_opcao.value = pais.Country;
    
    seletor.appendChild(nova_opcao)
    
  }
  
}

alimenta_seletor(lista_paises);

seletor.addEventListener('change', fazerAlgumaCoisa);

function fazerAlgumaCoisa() {
  const opcao_selecionada = seletor.value;
  let indice=0
  let indice_pais_selecionado 
  for (pais of lista_paises){
      console.log("dentro do loop", pais, indice)
      if (opcao_selecionada == pais.Country){
          indice_pais_selecionado = indice
          break
      }
      else {
          indice= indice+1
      }
  }
  const pais_selecionado = lista_paises[indice_pais_selecionado]
  console.log("pais_selecionado", pais_selecionado)
  console.log("nome do pais", pais_selecionado.Country)
  console.log("value", pais_selecionado.value)
  console.log("pais anterior", lista_paises[indice_pais_selecionado-1])
  console.log("pais posterior", lista_paises[indice_pais_selecionado+1])
  let anterior = lista_paises[indice_pais_selecionado-1].Country
  let posterior = lista_paises[indice_pais_selecionado+1].Country
  let resposta = opcao_selecionada+" tem a nota "+pais_selecionado.value+". O país que está à frente no ranking é "+anterior+" e o país que está atrás no ranking é "+posterior
  document.querySelector('.output').innerText = resposta
}