export async function fetchRecipes (filter){
    
    const{query, limit} = filter
    
    const url = `https://api.edamam.com/search?q=Vegan&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}&from=0&to=30&`;

    const response = await fetch(url)

    const data = await response.json()
    
    console.log(data)
    
    return data?.hits;
}

export async function fetchRecipe(id){
    const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${process.env.REACT_APP_EDAMAM_APP_ID}&app_key=${process.env.REACT_APP_EDAMAM_APP_KEY}`
    
    const response = await fetch(url)
    
    const data = await response.json();
    
    return data[0];
    }