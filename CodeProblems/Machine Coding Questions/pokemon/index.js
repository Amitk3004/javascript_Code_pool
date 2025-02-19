const d = document.querySelector('#dropbox');
const loading = document.querySelector('#loading');
const ability = document.querySelector('#ability');

/* loading text should be hidden initailly */
loading.style.display = 'none';

/* event Listeners setup */
d.addEventListener('change', handleSelect);


/* intital call */
getPokemons();


/* implemetation for fetching list of pokemons from api endpoint */
async function getPokemons() {
  loading.style.display = 'block';
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/');
  const response = await res.json();
  loading.style.display = 'none'
  populateOptions(response.results);
}

/* implementation for populating options inside dropdown */
function populateOptions(list) {
  list.forEach((pokemon) => {
    const o = document.createElement('option');
    o.text = pokemon.name;
    o.value = pokemon.name;
    o.dataset.detail = JSON.stringify(pokemon);
    d.add(o);
  });
}

/** implementation to handle change of selection on dropdown to fetch details of selected pokemon and showing abailities on screen.
 * @param e element refrence of the selected option
 */
async function handleSelect(e) {
  const selected = JSON.parse(e.target.selectedOptions[0].dataset.detail);

  loading.style.display = 'block'
  ability.innerHTML = '';
  const res = await fetch(selected.url);
  const response = await res.json();
  loading.style.display = 'none'
  response.abilities.forEach((ab) => {
    const li = document.createElement('li');
    li.textContent = ab.ability.name;
    ability.append(li);
  });
}

