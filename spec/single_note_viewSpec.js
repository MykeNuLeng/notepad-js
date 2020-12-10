function testSingleNoteView() {
  var note = new Note("Hi")
  var singleNoteView = new SingleNoteView(note)

  assert.isEqual(singleNoteView.view(), '<div>Hi</div>')
}

testSingleNoteView()
