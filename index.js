let main = document.querySelector('#main');
let notes = document.querySelector('#notes');
let createNote = document.querySelector('#createNote');
let newAddPara= document.querySelector('#new');
console.log(createNote,main,notes,newAddPara)


createNote.addEventListener('click', showPara);

function showPara(){
    let newPara = document.createElement('p');
    newPara.setAttribute('contenteditable', true);
    // newButton.setAttribute('contenteditable', false);
    newPara.classList.add('para');
    
    let newButton = document.createElement('img');
    // newPara.innerHTML="";
    // newButton.innerText="delete";
    newButton.src="./pr.png"
    newButton.classList.add('newbutton')
    newAddPara.appendChild(newPara).appendChild(newButton);
    newButton.addEventListener('click', deleteF);
}

function deleteF(){
    let para = document.querySelector('p');
    console.log(para);
    newAddPara.removeChild(para);
}
