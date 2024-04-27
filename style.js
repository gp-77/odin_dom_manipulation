const container = document.querySelector("#container");

// Add the following elements to the container using ONLY JavaScript 
// and the DOM methods shown above:

// a <p> with red text that says “Hey I’m red!”
const para = document.createElement("p");

para.style.color = "red";
para.textContent  = "Hey I am red!";
// para.createTextNode("Hey I am red!");

container.appendChild(para);

const h3 = document.createElement("h3");

h3.style.color = "blue";
h3.textContent = "I'm a blue h3!";
container.appendChild(h3);

const div = document.createElement("div");

div.style.backgroundColor = "pink";
div.style.border = "thick solid black"
div.style.borderColor = "black";

const h1 = document.createElement("h1");
h1.textContent = "I'm in a div";

const para2 = document.createElement("p");
para2.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(para2);

container.appendChild(div);


// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);
// // const element = document.getElementById(container);
// container.appendChild(para);