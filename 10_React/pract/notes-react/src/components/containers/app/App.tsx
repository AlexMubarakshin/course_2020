import React from 'react';

import './App.css';

import TextArea from '../../elements/textarea';
import SidebarList from '../../elements/sidebar__list';

import { Note, createEmptyNote } from '../../../core/models/note';

type AppState = {
  notes: Note[];
  selectedItemId?: string;
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    notes: [],
  }

  createNote = (): void => {
    this.setState(({ notes }) => {
      const previousNotes = [...notes];
      previousNotes.push(createEmptyNote());

      return ({
        notes: previousNotes,
      });
    })
  }

  render() {
    return (
      <main>
        <div id="sidebar">
          <SidebarList>

          </SidebarList>

          <div className="sidebar-footer">
            <button onClick={this.createNote} id="note-create__button">Создать заметку</button>
          </div>
        </div>

        <TextArea placeholder="Начните писать" />
      </main>
    );
  }
}

export default App;
