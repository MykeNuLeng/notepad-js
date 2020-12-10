class SingleNoteView {
  constructor(note) {
    this.note = note
  }

  view() {
    var returnString = ''
    returnString = '<div>' + this.note.view + '</div>'
    return returnString
  }
}
