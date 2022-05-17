import { Layout } from "../../components/layouts";
import type { NextPage } from "next";
import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { NoFavorites } from "../../components/ui";
import { useEffect, useState } from "react";
import { localFavorites } from "../../utils";
import { FavoritePokemons } from "../../components/pokemon";

const FavoritesPage: NextPage = () => {
    const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

    useEffect(() => {
        setFavoritePokemons(localFavorites.pokemons());
    }, []);

    return (
        <>
            <Layout title="Pokemons Favoritos">
                {!favoritePokemons.length
                    ? <NoFavorites />
                    : <FavoritePokemons pokemons={favoritePokemons} /> }
            </Layout>
        </>
    );
};

export default FavoritesPage;
