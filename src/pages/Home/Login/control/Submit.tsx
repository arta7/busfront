import { FC } from 'react';
import { Button, ButtonProps } from 'react-login-page';

export const Submit: FC<ButtonProps> = (props) => {
  const { keyname = 'submit',click, ...elmProps  } = props;
  if (!elmProps.children) {
    elmProps.children = 'Login';
  }
  return <Button type="submit" {...elmProps} keyname={keyname}  onClick={click} />;
};

Submit.displayName = 'Login.Submit';
