import { useQuery } from "react-query";

const getCharacters = async () => {
    const info = await
   fetch("https://pokeapi.co/api/v2/type/")
    .then((res) => res.json())
    .catch((e) => "error");
    return info;
    };

                        //queryKey       async function
const query = useQuery("getCharacters", getCharacters);
const { status, isLoading, isSuccess, isError, error, data, refetch } = query;