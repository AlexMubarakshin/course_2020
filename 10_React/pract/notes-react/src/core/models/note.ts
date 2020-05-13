import uuid from "../utils/generateUUID";

export type Note = {
  id: string;
  text: string;
}

export const createEmptyNote = () => ({
  id: uuid(),
  text: '#Новая заметка',
});
