const getCharacters = async () => {
    const info = await
   fetch("https://rickandmortyapi.com/api/character")
    .then((res) => res.json())
    .catch((e) => "error");
    return info;
    };

                        //queryKey       async function
const query = useQuery("getCharacters", getCharacters);
const { status, isLoading, isSuccess, isError, error, data } = query;