


export const getSpecie= async (page) => {
    const info = await fetch(`${page}`)    
    .then((res) => res.json())
    .catch((e) => "error");
  
    return info;
};
getSpecie()