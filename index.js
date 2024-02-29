let main = document.querySelector('#main');
let notes = document.querySelector('#notes');
let createNote = document.querySelector('#createNote');
let newAddPara= document.querySelector('#new');
console.log(createNote,main,notes,newAddPara)


createNote.addEventListener('click', showPara);

function showPara(){
    let newPara = document.createElement('p');
    // newPara.innerHTML="";
    newPara.setAttribute('contenteditable', true);
    newPara.classList.add('para');
    newAddPara.appendChild(newPara);
}