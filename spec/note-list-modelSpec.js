function testNoteList() {
  var noteList = new NoteList;
  noteList.addNote("New note");

  assert.isTrue(noteList.notes[0].view === "New note")
}

testNoteList();

function testNoteListArr() {
  var noteList = new NoteList;

  assert.isTrue(noteList.notes.length === 0)
}

testNoteListArr();
