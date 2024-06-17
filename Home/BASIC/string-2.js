let string = "my name is ansh chovatiya and this is string folder";

let ans = string.search("name");
console.log(ans);

console.log(string.match("is"));
console.log(string.match("Is"));
let array = string.matchAll("is");

for(let v of array){
    console.log(v);
}

console.log(string.startsWith("my"));
console.log(string.startsWith("mry"));
console.log(string.endsWith("folder"));
console.log(string.endsWith("foldder"));
// string=string.replace("is","not");
// console.log(string);
string=string.replaceAll ("is","not");
console.log(string);

// returns character at specified index
console.log(string.charAt(3));
// returns ascii value at specified index
console.log(string.charCodeAt(3));
// returns character at specified index
console.log(string.at(3));