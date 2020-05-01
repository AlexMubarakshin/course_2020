import EventEmitter from './utils/event-emitter';
import debounce from './utils/debounce';
import Actions from './constants/actions';

class NoteView extends EventEmitter {
  constructor() {
    super();

    this.textarea = document.querySelector('#note-textarea');
    this.sidebar = document.querySelector('#sidebar-notes__list');
    this.createButton = document.querySelector('#note-create__button');

    this.textarea.addEventListener('keyup', debounce(this.handleTextareaChange.bind(this)));
    this.createButton.addEventListener('click', this.onCreateNewClick.bind(this));
  }

  init(notes = []) {
    this.renderSidebar(notes);

    this.setNote(notes[0]);
  }

  /**
   * Render side bar
   *
   * @param {{ id: string; text: string; }} notes
   */
  renderSidebar(notes) {
    const notesTitles = notes.map(note => ({
      ...note,
      title: note.text.split('\n')[0],
    }));

    const fragment = document.createDocumentFragment();
    notesTitles.forEach((note) => {
      const noteItem = document.createElement('div');

      noteItem.className = 'note-item';
      noteItem.innerText = note.title;
      noteItem.dataset.id = note.id;

      noteItem.addEventListener('click', () => this.emit(Actions.SET_NOTE_VIEW, note));

      const removeIcon = document.createElement('span');
      removeIcon.className = 'note-item__remove';
      removeIcon.innerText = '❌';

      removeIcon.addEventListener('click', (e) => {
        e.stopPropagation();

        this.emit(Actions.REMOVE_NOTE, note);
      });

      noteItem.appendChild(removeIcon);

      fragment.appendChild(noteItem);
    });

    this.sidebar.innerHTML = '';
    this.sidebar.appendChild(fragment);
  }

  /**
   * Text change handler
   *
   */
  handleTextareaChange() {
    this.emit(Actions.TEXTAREA_CHANGE, {
      id: this.textarea.dataset.id,
      text: this.textarea.value
    });
  }

  /**
   * Set note in textarea
   *
   * @param {{ id: string; text: string; }} note
   */
  setNote(note) {
    this.textarea.dataset.id = note.id;
    this.textarea.value = note.text;
  }

  /**
   * On 'Create' button click handler
   */
  onCreateNewClick() {
    this.emit(Actions.CREATE_NOTE);
  }

  hideTextarea() {
    this.textarea.style.display = 'none';
  }

  showTextarea() {
    this.textarea.style.display = 'block';
  }
}

export default NoteView;
