import uuid from './utils/uuid';

const createEmptyNote = () => ({
  id: uuid(),
  text: '#Новая заметка',
});

class NoteModel {
  constructor() {
    this.notes = [];

    this.selectedItemId = null;
  }

  get SelectedItemId() {
    return this.selectedItemId;
  }

  set SelectedItemId(id) {
    this.selectedItemId = id;
  }

  /**
   * Create note
   *
   * @returns {{ id: string; text: string; }}
   */
  create() {
    const newNote = createEmptyNote();

    this.notes.unshift(newNote);

    return newNote;
  }

  /**
   * Update note
   * 
   * @param {{ id: string; text: string; }} note 
   */
  update(note) {
    this.notes = this.notes.map((item) => (item.id === note.id ? note : item));
  }


  /**
   * Remove note
   * 
   * @param {{ id: string; text: string; }} note 
   */
  remove(note) {
    const noteIndex = this.notes.findIndex((item) => (item.id === note.id));

    this.notes.splice(noteIndex, 1);
  }


  /**
   * Load notes
   *
   * @returns {Array.<{id: string; text: string;}>}
   */
  load() {
    this.notes.unshift(createEmptyNote());

    return this.notes;
  }

}

export default NoteModel;
