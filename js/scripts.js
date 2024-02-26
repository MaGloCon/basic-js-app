let pokemonRepository = (function () {
let pokemonList = [{
    name: 'Bulbasaur',
    height: 0.7,
    type: ['grass', 'poison']
},
{
    name: 'Charizard',
    height: 1.7,
    type:['fire']
},
{
    name: 'Pikachu',
    height: 0.4,
    type: ['electric']
}
];

function add(pokemon) {
    if (typeof pokemon === 'object') {
        pokemonList.push(pokemon);
    }
}

function getAll() {
    return pokemonList;
}

return {
    add: add,
    getAll: getAll
};
}) ();

// Add new Pokémon to the list
    pokemonRepository.add(
        {name: 'Arcanine', height: 1.9, type: ['fire']}
    );

// Print Pokémon name and corresponding height from pokemonList
pokemonList.forEach (function (pokemon) {
    //print name and height with message if the height is more than to 1 m
    //otherwise print only name and height 
    if (pokemon.height > 1) {
        document.write('<p>', pokemon.name + ' (height: ' + pokemon.height + ' m)' + ' - Wow, that\'s a big one! </p>');
    } else {
        document.write('<p>', pokemon.name + ' (height: ' + pokemon.height + ' m)' + ' </p> ');
    }
});


