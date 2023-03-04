export const getPokemon = async () => {
    const info = await fetch("https://pokeapi.co/api/v2/type/")
    
    .then((res) => res.json())
    .catch((e) => "error");
    console.log(info.results);
    return info;
};
getPokemon()