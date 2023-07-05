
// ES6 Feature -> clss , import & export
// create an object then send krega 
// destructing is happened in export 
export class Note {
    constructor(noteObject) {
        for (let key in noteObject) {
            this[key] = noteObject[key];
        }
    }
}


// Defalut 
export default Note;
// ye jaisa hai class waisa hi bhejega 