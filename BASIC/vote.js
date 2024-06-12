let age = 38;
let hasvoterid = true;
let iscitizen = false;


if(age>=18 && hasvoterid && iscitizen){
    console.log("you can vote");
}
else if(!hasvoterid&&!iscitizen){
    console.log("you are not eligible for voting");
}
else if(!hasvoterid){
    console.log("sorry, you are not registered in voting list please register your self")
}
else if(!iscitizen){
    console.log("sorry,you are not citizen of this country so you can not vote");
}
