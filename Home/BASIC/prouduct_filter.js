// filter product that has price lower than 15000

const products = [
    {name:"realme",price:8000},
    {name:"poco",price:17000},
    {name:"oneplus",price:24000},
    {name:"lava",price:12000},

]

let filteredProducts = products.filter((currentValue,index,array)=>
{
    if(currentValue.price<=15000){
        return currentValue;
    }
});

console.log(filteredProducts);