
//===============================//
    // DOM navigation
// {
// // now html document is stored in this variable
// let doc = document;
// console.log(doc);

// let head = document.head;
// console.log(head);
// let body = document.body;
// console.log(body);

// // child nodes of parent node
// let childNode = body.childNodes;
// console.log(childNode);

// // first child tag(element)
// let first = body.firstElementChild;
// console.log(first);

// // first child node(text)
// let first2 = body.firstChild;
// console.log(first2);

// // first child tag(element)
// let last = body.lastElementChild;
// console.log(last);

// // first child node(text)
// let last2 = body.lastChild;
// console.log(last2);

// // all child tags(element)
// let child = body.children;
// console.log(child);

// // all child node(text)
// let child2 = body.childNodes;
// console.log(child2);


// // next sibling node
// let next = first.nextSibling;
// console.log(next);

// // next sibling element
// let next2 = first.nextElementSibling;
// console.log(next2);


// // previous sibling node
// let previous = next.previousSibling;
// console.log(previous);

// // previous sibling node
// let previous2 = next2.previousElementSibling;
// console.log(previous2);


// // parent element
// let parent = first.parentElement;
// console.log(parent);    
// // parent node
// let parent2 = first.parentNode;
// console.log(parent2);    

// }
//===============================//



//===============================//
    // DOM Searching
{
    // search Element through id 
    let Litag = document.getElementById("firstId");
    console.log(Litag);
    console.log(Litag.innerHTML);

    // search element through class
    let para = document.getElementsByClassName('firstClass');
    console.log(...para);
    for(let cure of para){
        console.log(cure);
        console.log(cure.innerHTML);
    }
    let cl = document.getElementsByClassName("division");
    // console.log(...cl);
    for(let temp of cl){
        console.log(temp.innerHTML);
        // text content does not consider css if display is hidden it will still show that content 
        console.log(temp.textContent);
        console.log(temp.innerText);
    }


    // search element through tag name
    let tag = document.getElementsByTagName("p");
    console.log(...tag);


    // query selector it uses selector special symbols
    let element = document.querySelector("#first");
    console.log(element);
    element.innerText = "this is new text~~~~~~~~~~~~~~~~";
}
//===============================//

