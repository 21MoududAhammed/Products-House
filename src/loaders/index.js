
const loadProducts = async() =>{
    try{
        const res = await fetch('https://dummyjson.com/products?limit=100');
        const data = await res.json();
        return data.products;
    }catch(err){
        console.log(err);
    }
}

const loadProduct = async({params}) =>{
    const {p_id} = params;
    
    try{
        const res = await fetch(`https://dummyjson.com/products/${p_id}`)
        const data = await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}



export { loadProducts, loadProduct }