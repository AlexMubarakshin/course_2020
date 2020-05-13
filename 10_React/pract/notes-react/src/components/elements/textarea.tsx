import React from 'react';

type TextAreaProps = {
  id?: string;
  placeholder?: string;
  autoFocus?: boolean;
}

class TextArea extends React.Component<TextAreaProps> {
  render(): React.ReactElement {
    const { id, autoFocus, placeholder } = this.props;
    return (
      <textarea
        id={id}
        autoFocus={autoFocus}
        placeholder={placeholder}
      />
    )
  }
}

export default TextArea;