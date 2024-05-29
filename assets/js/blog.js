
let blogArray = JSON.parse(localStorage.getItem('blogPost')) || [];
console.log(blogArray);
// initiated a value to store the id for html reference
const container=document.querySelector('#container');


// loops through each character in the array blogArray 
for(let i=0; i<blogArray.length; i++){

    console.log(blogArray[i].username);
    const sectionEl= document.createElement("section"); // to create html elements through javascript
    const h2El = document.createElement("h2"); 
    h2El.textContent= blogArray[i].title;   // add text information to element
    sectionEl.appendChild(h2El);    // sends to html 

    const h4El = document.createElement("h4");
    h4El.textContent= blogArray[i].content;
    sectionEl.appendChild(h4El);

    const pEl = document.createElement("p");
    pEl.textContent= blogArray[i].username;
    sectionEl.appendChild(pEl);

    container.appendChild(sectionEl);   // sends everything to container since container exists within the html
    sectionEl.classList.add("card");    
}



