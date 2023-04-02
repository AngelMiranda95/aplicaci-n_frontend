
fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(data => {
      crearTabla(data);
      buscarpersonaje(data);
    })
    .catch(error => console.error(error));


function crearTabla(data)
{
    const personajeArray = data.results;
    const table = document.createElement('table');
    const tableHeader = document.createElement('tr');
    const nameHeader = document.createElement('th');
    const generoHeader = document.createElement('th');
    const estadoHeader = document.createElement('th');
    const fotoHeader = document.createElement('th');
    
    nameHeader.innerText = "NOMBRE";
    generoHeader.innerText = "GENERO";
    estadoHeader.innerHTML = 'ESTADO';
    fotoHeader.innerText = "FOTO";
    tableHeader.appendChild(nameHeader);
    tableHeader.appendChild(generoHeader);
    tableHeader.appendChild(estadoHeader);
    tableHeader.appendChild(fotoHeader);
    table.appendChild(tableHeader);
    
    for (let i = 0; i < personajeArray.length; i++) {
      
      const personajeRow = document.createElement('tr');
      const nameData = document.createElement('td');
      const generoData = document.createElement('td');
      const estadoData = document.createElement('td');
      const fotoData = document.createElement('td');
      nameData.innerText = personajeArray[i].name;
      generoData.innerText = personajeArray[i].gender;
      estadoData.innerText = personajeArray[i].status;
      fotoData.innerHTML = `<a href="${personajeArray[i].image}" target="_blank">Ver</a>`;
      personajeRow.appendChild(nameData);
      personajeRow.appendChild(generoData);
      personajeRow.appendChild(estadoData);
      personajeRow.appendChild(fotoData);
      table.appendChild(personajeRow);
    }

    document.body.appendChild(table);
  
}