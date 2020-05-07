import React from 'react';

type HeaderProps = {
  onChange: ((event: React.ChangeEvent<HTMLInputElement>) => void);
}

function Header(props: HeaderProps) {
  return (
    <header>
      <input type="text" placeholder="Search..." onChange={props.onChange} />
    </header>
  );
}

export default Header;
