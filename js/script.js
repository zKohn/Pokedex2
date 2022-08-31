// GLOBAL VARIABLES

const pokemonName = document.querySelector('.pokemon_name');
const pokemonNumber = document.querySelector('.pokemon_number');
const pokemonImage = document.querySelector('.pokemon_image');
const loadingImage = document.querySelector('.loading_image');

const form = document.querySelector('.pokemon_form');
const input = document.querySelector('.input_search');

const buttonPrev = document.querySelector('.btn-prev');
const buttonNext = document.querySelector('.btn-next');
const buttonRotate = document.querySelector('.rotate');

let searchPokemonIndex = 1;
let position = 1;


// UTILITY FUNCTIONS

const alocateImage = (data) => {
    let pos = 'front_default';

    if(position == 2)
        pos = 'back_default';

    pokemonImage.style.display = 'block';

    if( data['sprites']['versions']['generation-v']['black-white']['animated'][pos] )
        pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated'][pos];
    else if( data['sprites'][pos] )
        pokemonImage.src = data['sprites'][pos];
    else
        pokemonImage.style.display = 'none';
}

const loading = ({loaded = true}) => {
    if(loaded)
        loadingImage.style.display = 'none';
    else{
        pokemonName.innerHTML = 'Loading...';
        pokemonNumber.innerHTML = '';
        loadingImage.style.display = 'block';
    }
}

const renderPokemon = async (data) => {
    if(!data){
        pokemonImage.style.display = 'none';
        pokemonName.innerHTML = 'Not Found :(';
        pokemonNumber.innerHTML = '';
        return
    }
    alocateImage(data);
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = searchPokemonIndex = data.id;
    input.value='';
}


// MAIN FUNCTIONS

const fetchPokemon = async (pokemon) => {
    // espera a função fetch, que é assíncrona
    const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`);

    // transformação da resposta em .json
    if(APIResponse.status!=200)
        return

    const data = await APIResponse.json();
    return data;
}

const renderProcess = async (pokemon) => {
    // Antes de renderizar o pokemon, renderiza Loading na tela 
    loading({loaded: false});

    // Aguarda a chegada de dados, depois renderiza o pokemon e finaliza o loading
    const data = await fetchPokemon(pokemon);

    await renderPokemon(data);

    loading({loaded: true});
}


// LISTENERS

form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderProcess(input.value);
});

buttonPrev.addEventListener('click', () => {
    if(searchPokemonIndex>1)
    renderProcess((--searchPokemonIndex).toString());
});

buttonNext.addEventListener('click', () => {
    renderProcess((++searchPokemonIndex).toString());
});

buttonRotate.addEventListener('click', () => {
    if(position == 1)
        position = 2
    else
        position = 1
    renderProcess(searchPokemonIndex.toString());
});

renderProcess(searchPokemonIndex.toString());