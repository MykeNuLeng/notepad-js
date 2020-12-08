function testCreateNote(text) {
  var note = new Note(text);

  assert.isTrue(note.view === text)
}

testCreateNote("Hello world!");

function testErrorHandling() {
  var note = new Note("oooooh")
  assert.throwsError('var note = new Note("oooooh")', 'note.oop("hi")')
}

testErrorHandling();
