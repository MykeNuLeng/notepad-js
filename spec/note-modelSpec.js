function testCreateNote(text) {
  var note = new Note(text);

  assert.isTrue(note.view === text)
}

testCreateNote("Hello world!");
