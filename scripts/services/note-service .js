// CRUD 

// Here actually CRUD Operation
// every file hai only one export default 
// but export can use may times 
import Note from "../models/note.js";

export const noteOperations = {

    notes: [],

    add(noteObject) {
        const note = new Note(noteObject);
        this.notes.push(note);
        // PUSH INTO Array to perform all below operations
    },
    total() {
        return this.notes.length;
    },
    mark() {
        return 0;
    },
    unMark() {
        return 0;
    },
    remove() {

    },
    search() {

    },
    sort() {

    },
    save() {

    },
    update() {

    },

}



