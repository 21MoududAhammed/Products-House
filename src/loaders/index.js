const loadMeals = async() =>{
    try{
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
        const data = await res.json();
        return data.meals;
    }catch(err){
        console.log(err);
    }
}
const loadProducts = async() =>{
    try{
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

const loadMealDetails = async({params}) =>{
    try{
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.mealId}`);
        const data = await res.json();
        return data.meals[0];
    }catch(err){
        console.log(err)
    }
}

export {loadMeals, loadProducts, loadMealDetails}