let main = document.querySelector('#main');
let notes = document.querySelector('#notes');
let createNote = document.querySelector('#createNote');
let newAddPara= document.querySelector('#new');
console.log(createNote,main,notes,newAddPara)

let notesPara= document.querySelector('.para');
createNote.addEventListener('click', showPara);

function show(){
    newAddPara.innerHTML= localStorage.getItem("notes");
}
show();
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
    // newButton.addEventListener('click', deleteF);
}

// function deleteF(){
//     let para = document.querySelector('p');
//     console.log(para);
//     newAddPara.removeChild(para);
//     updateStorage();


// }

newAddPara.addEventListener('click', function(e){
    if(e.target.tagName==="IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==="P"){
        notesPara=document.querySelectorAll('.para');
        notesPara.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

function updateStorage(){
    localStorage.setItem('notes',newAddPara.innerHTML);
}