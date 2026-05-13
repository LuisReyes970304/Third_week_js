const formNote = document.querySelector("form");
const inputNote = formNote.querySelector(".input");
const notes = document.querySelector(".notes");

document.addEventListener("DOMContentLoaded", () => {
    const getData = localStorage.getItem("data");
    if(getData && getData.trim() != "") {
        notes.innerHTML = getData;
    };
});

formNote.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = inputNote.value.trim();
    inputNote.value = "";
    if(data != "") {
        createNote(notes, data);
    } else { 
        return;
    }
});

function createNote(notes, data) {
    notes.innerHTML += `
    <li class="liNote">
        <button class="deleteNote">x</button>
        <p>${data}</p>
    </li>
    `
    localStorage.setItem("data", notes.innerHTML);
};

notes.addEventListener("click", (e) => {
    if (e.target.classList.contains("deleteNote")) {
        const liNote = e.target.parentElement;
        notes.removeChild(liNote);
        localStorage.setItem("data", notes.innerHTML);
    };
});


