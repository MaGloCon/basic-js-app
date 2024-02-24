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
},
];

// Task 3
for (let i=0; i<pokemonList.length; i++) {
    document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ' m) ');
    
    if (pokemonList[i].height <= 1.0) {
    document.write('<br>');
    }
    else{
        document.write(T='- Wow, that\'s a big one!');
        document.write('<br>');
    }
}

