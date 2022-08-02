import { Button, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemon } from "../services/api";
import { AppDispatch } from "../store";
import { State } from "../store/features/rootReducer";
import { setPokemon as setPokemonReduce } from "../store/features/pokemonSlice";
export interface Pokemon {
  name?: string;
  sprites?: {
    front_default: string;
  };
}

export default function Home() {
  const [pokemon, setPokemon] = useState<Pokemon>({} as Pokemon);
  const [name, setName] = useState<string | number>("");

  const pokemonReduce: Pokemon = useSelector((state: State) => state.pokemon);
  const dispatch = useDispatch<AppDispatch>();

  const get = async () => {
    const response = await getPokemon(name);
    setPokemon(response);
  };

  useEffect(() => {
    console.log("Enviando pokemon para o reduce");
    dispatch(setPokemonReduce(pokemon));
  }, [pokemon]);

  // useEffect(() => {
  //   console.log(pokemon);
  // }, [pokemon]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <>
      <TextField
        id="outlined-name"
        label="Name"
        value={name}
        onChange={handleChange}
      ></TextField>
      <Typography variant="body2">{pokemonReduce.name}</Typography>
      <img
        src={pokemonReduce.sprites?.front_default}
        alt={pokemonReduce.sprites?.front_default}
      />
      <Button onClick={get}>Pesquisar</Button>
    </>
  );
}
