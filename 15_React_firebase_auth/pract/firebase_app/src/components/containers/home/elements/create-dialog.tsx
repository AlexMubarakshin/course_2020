import React from 'react';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { Product } from '../../../../core/model/product';

type CreateDialogProps = {
  onClose: () => void;
  onSubmit: (product?: Partial<Product>) => Promise<void>;
}

const CreateDialog: React.FC<CreateDialogProps> = ({ onClose, onSubmit }: CreateDialogProps) => {
  const [nameFieldValue, nameFieldValueChange] = React.useState('');
  const [descriptionFieldValue, descriptionFieldValueChange] = React.useState('');
  const [imageFieldValue, imageFieldValueChange] = React.useState('');

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => nameFieldValueChange(e.target.value);
  const onDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>): void => descriptionFieldValueChange(e.target.value);
  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => imageFieldValueChange(e.target.value);

  const onSaveClick = async (): Promise<void> => {
    if (nameFieldValue && descriptionFieldValue && imageFieldValue) {
      await onSubmit({
        name: nameFieldValue,
        description: descriptionFieldValue,
        image: imageFieldValue,
      });

      nameFieldValueChange('');
      descriptionFieldValueChange('');
      imageFieldValueChange('');
    }
  };

  const isSaveActive = nameFieldValue && descriptionFieldValue && imageFieldValue;

  return (
    <Dialog open onClose={onClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Создать товар</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Название товара"
          fullWidth
          onChange={onNameChange}
          value={nameFieldValue}
        />
        <TextField
          margin="dense"
          id="description"
          label="Описание товара"
          fullWidth
          onChange={onDescriptionChange}
          value={descriptionFieldValue}
        />
        <TextField
          margin="dense"
          id="image"
          label="Ссылка на изображение"
          fullWidth
          onChange={onImageChange}
          value={imageFieldValue}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Закрыть
        </Button>
        <Button onClick={onSaveClick} color="primary" disabled={!isSaveActive}>
          Сохранить
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateDialog;
