let cart = [
    83,693,29,392,29
]


let ans = cart.reduce((total,currentValue,index,array)=>{
    return total + currentValue;
},0);

console.log(ans);