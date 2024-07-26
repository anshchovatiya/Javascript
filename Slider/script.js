let imgs = document.querySelectorAll(".img");

let counter = 0;

let positionSetting = () => {
    imgs.forEach((current,index)=>{
        current.style.left = `${index*100}%`
    })
}

positionSetting();

let Slider  = () => {
    imgs.forEach((current)=>{
          current.style.transform = `translateX(-${counter * 100}%)`
    })
}

function goLeft(){
    if(counter>=0){

        counter--;
        Slider();
    }
}
function goRight(){
    if(counter<3){
        counter++;
        Slider();
    }
}
