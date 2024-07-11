
// const fetchData = () => { fetch("http://icanhazdadjoke.com",{headers:{Accept : "application/json",}}).then((joke)=>{return joke.json()}).then((joke)=>{document.getElementById("Joke").innerText = joke.joke})

// };


async function fetchData(){
    try{
        // it will throw value which will be received by catch block of the function
        // throw "not acceptable";
        let JokeDocumentObject = await fetch("http://icanhazdadjoke.com",{headers:{ Accept : "application/json"}})
        let Joke = await JokeDocumentObject.json();
        document.getElementById("Joke").innerText = Joke.joke;
    }
    catch(error){
        document.getElementById("Joke").innerText = error;
    }
}


fetchData();

