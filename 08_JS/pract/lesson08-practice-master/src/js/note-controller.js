import Actions from './constants/actions';


// eslint-disable-next-line no-unused-vars
import NoteModel from './note-model';

// eslint-disable-next-line no-unused-vars
import NoteView from './note-view';

class NoteController {

  /**
   * Creates an instance of NoteController.
   * 
   * @param {NoteModel} model
   * @param {NoteView} view
   * 
   * @memberof NoteController
   */
  constructor(model, view) {
    this.model = model;

    this.view = view;

    this.init();

    this.view.on(Actions.CREATE_NOTE, this.create.bind(this));
    this.view.on(Actions.TEXTAREA_CHANGE, this.update.bind(this));
    this.view.on(Actions.SET_NOTE_VIEW, this.changeNoteView.bind(this));
    this.view.on(Actions.REMOVE_NOTE, this.remove.bind(this));
  }

  init() {
    const notes = this.model.load();

    this.view.init(notes);

    this.model.SelectedItemId = this.model.notes[0];
  }

  /**
   * Remove note handler
   *
   * @param {{ id: string; text: string; }} note
   */
  remove(note) {
    if (note.id === this.model.SelectedItemId) {
      this.view.hideTextarea();
    }

    this.model.remove(note);
    this.view.renderSidebar(this.model.notes);
  }

  /**
   * Create note handler
   *
   */
  create() {
    const note = this.model.create();

    this.view.renderSidebar(this.model.notes);

    this.changeNoteView(note);
  }

  /**
   * Update note handler
   *
   * @param {{ id: string; text: string; }} note
   */
  update(note) {
    this.model.update(note);

    this.view.renderSidebar(this.model.notes);
  }

  /**
   * Change note in view handler
   *
   * @param {{ id: string; text: string; }} note
   */
  changeNoteView(note) {
    this.model.SelectedItemId = note.id;

    this.view.setNote(note);
    this.view.showTextarea();
  }
}

export default NoteController;
