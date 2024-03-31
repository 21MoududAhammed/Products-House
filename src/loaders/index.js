const loadMeals = async() =>{
    try{
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian');
        const data = await res.json();
        return data.meals;
    }catch(err){
        console.log(err);
    }
}

export {loadMeals}