const formNote = document.querySelector("form");
const inputNote = formNote.querySelector(".input");
const notes = document.querySelector(".notes");

formNote.addEventListener("submit", (e) => {
    e.preventDefault();
    let data = inputNote.value.trim();
    inputNote.value = "";
    const liNote = document.createElement("li");
    liNote.innerHTML = `<p>${data}</p> <button class="deleteNote">Delete</button>`
    const deleteNote = liNote.querySelector(".deleteNote");
    deleteNote.addEventListener("click", () => {
        notes.removeChild(liNote);
    });
    notes.appendChild(liNote);
});