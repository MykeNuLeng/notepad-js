function testNoteListView() {
  var noteListView = new NoteListView();
  noteListView.noteList.addNote("Im looking dummy thicc")

  assert.isTrue(noteListView.display() === '<ul><li><div>Im looking dummy thicc</div></li></ul>')
}

testNoteListView()

function testTwoNotes() {
  var noteListView = new NoteListView();
  noteListView.noteList.addNote("Im looking dummy thicc")
  noteListView.noteList.addNote("Honestly, wheres the lie")

  assert.isEqual(noteListView.display(), '<ul><li><div>Im looking dummy thicc</div></li><li><div>Honestly, wheres the lie</div></li></ul>')
}

testTwoNotes()
