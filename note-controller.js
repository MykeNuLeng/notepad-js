let noteList = new NoteList();
noteList.addNote("lets goooooo")

function displayNotes() {
  var el = document.querySelectorAll('#app');
  var noteListView = new NoteListView(noteList)
  el[0].innerHTML = noteListView.display();
}

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(displayNotes)
