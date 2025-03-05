const API_URL = "http://localhost:5000/notes"; // Sesuaikan dengan backend

document.addEventListener("DOMContentLoaded", () => {
    loadNotes();

    document.getElementById("note-form").addEventListener("submit", (e) => {
        e.preventDefault();
        addOrUpdateNote();
    });
});

// Ambil semua catatan dari backend dan tampilkan di halaman
function loadNotes() {
    fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("Data dari backend:", data); // Debugging
            const notesList = document.getElementById("notes-list");
            notesList.innerHTML = "";
            data.forEach((note) => {
                const li = document.createElement("li");
                li.innerHTML = `
                    <strong>${note.title}</strong>: ${note.content}
                    <div>
                        <button class="edit" onclick="editNote(${note.id}, '${note.title}', '${note.content}')">Edit</button>
                        <button class="delete" onclick="deleteNote(${note.id})">Hapus</button>
                    </div>
                `;
                notesList.appendChild(li);
            });
        })
        .catch((error) => console.error("Error fetching notes:", error));
}

// Tambah atau Edit catatan ke backend
function addOrUpdateNote() {
    const noteId = document.getElementById("note-id").value;
    const title = document.getElementById("note-title").value;
    const content = document.getElementById("note-content").value;

    const method = noteId ? "PUT" : "POST";
    const url = noteId ? `${API_URL}/${noteId}` : API_URL;

    fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title, content }),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(noteId ? "Catatan diperbarui:" : "Catatan ditambahkan:", data);
            document.getElementById("note-form").reset();
            document.getElementById("note-id").value = "";
            loadNotes();
        })
        .catch((error) => console.error("Error saving note:", error));
}

// Hapus catatan dari backend
function deleteNote(id) {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
        .then(() => loadNotes())
        .catch((error) => console.error("Error deleting note:", error));
}

// Edit catatan - Mengisi form dengan data yang akan diedit
function editNote(id, title, content) {
    document.getElementById("note-id").value = id;
    document.getElementById("note-title").value = title;
    document.getElementById("note-content").value = content;
}
