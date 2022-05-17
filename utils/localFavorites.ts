const toggleFavorite = (id: number) => {

    const favorites: Array<number> = JSON.parse( localStorage.getItem("favorites") || "[]" );

    const indexOnFavorites = favorites.indexOf(id);
    if (indexOnFavorites !== -1) {
        favorites.splice(indexOnFavorites, 1);
    } else {
        favorites.push(id);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const existInFavorites = (id:number): boolean => {
    if( typeof window === 'undefined') return false;
    const favorites: Array<number> = JSON.parse( localStorage.getItem("favorites") || "[]" );
    return favorites.includes(id);
}

const pokemons = (): number[] => {
    return JSON.parse( localStorage.getItem('favorites') || '[]' );
}

export default {
    toggleFavorite,
    existInFavorites,
    pokemons
}