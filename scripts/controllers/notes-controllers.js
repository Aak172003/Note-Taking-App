// Controller (I/O) + Events  + talk to services

// Destructuring 
import { noteOperations } from "../services/note-service .js";
window.addEventListener('load', init);

function init() {
    showCounts();
    bindEvents();
    disableButton();

}

// Arrow Function   // setAttribute - > 
const disableButton = () => document.querySelector('#delete').setAttribute("disabled", true);



function bindEvents() {
    document.querySelector('#add').addEventListener('click', addNote)
}

function showCounts() {

    document.querySelector('#total').innerText = noteOperations.total();
    document.querySelector('#mark').innerText = noteOperations.mark();
    document.querySelector('#unMark').innerText = noteOperations.unMark();

}

function addNote() {
    // read id , title , description, date of Completion 
    // DOM

    // 1st Way 

    // const id = document.querySelector('#id').value;
    // const title = document.querySelector('#title').value;
    // const desc = document.querySelector('#desc').value;
    // const cdate = document.querySelector('#cdate').value;
    // const cpicker = document.querySelector('#cpicker').value;



    // 2nd Way

    // id
    const fields = ['id', 'title', 'desc', 'cdate', 'cpicker'];
    const noteObject = {}; // object Literal  // God Object

    for (let field of fields) {
        // push into noteObjects array

        // id pr traverse , then goes its value 
        noteObject[field] = document.querySelector(`#${field}`).value;
    }

    noteOperations.add(noteObject);

    // call PrintNotes Function 
    printNotes(noteObject);
    showCounts();
}

// Printing 
// pass the avove values 

function printIcon(myClassName = 'trash', fn, id) {
    const iTag = document.createElement('i')
    iTag.setAttribute('note-id', id)
    iTag.className = `fa-solid fa-${myClassName} me-5 hand `;
    iTag.addEventListener('click', fn);

    return iTag;
}

function toogleMark() {
    // itag is this , because it call function 
    // console.log('toogleMark.....', this);

    const icon = this;
    const tr = icon.parentNode.parentNode;
    // tr.className = 'alert table-danger';
    tr.classList.toogleMark('alert table-danger')


}

function edit() {
    console.log("edit");

}

function printNotes(noteObject) {
    // Pass tbody id = "notes"
    const tbody = document.querySelector('#notes');

    const row = tbody.insertRow();  // tr

    for (let key in noteObject) {
        const td = row.insertCell();      // create td  
        td.innerText = noteObject[key];   // insert into td
    }

    const td = row.insertCell();
    td.appendChild(printIcon('trash', toogleMark, noteObject.id));
    td.appendChild(printIcon('user-pen ', edit, noteObject.id))
}
