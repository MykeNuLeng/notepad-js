class NoteListView {
  constructor(noteList = new NoteList) {
    this.noteList = noteList;
  }

  display() {
    var returnString = "";
    var arrLength = this.noteList.notes.length;
    for (var i = 0; i < arrLength; i++) {
      returnString = returnString + '<li><div>' + (this.noteList.notes[i].view) + '</div></li>';
    }
    return '<ul>' + returnString + '</ul>';
  }
}
