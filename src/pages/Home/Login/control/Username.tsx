import { FC, useEffect, memo } from 'react';
import { Input, InputProps, useStore } from 'react-login-page';

export interface UsernameProps extends InputProps {
  label?: React.ReactNode;
 
}
export const Username: FC<UsernameProps> = memo((props) => {
  const { keyname = 'username',value,setValue , name, rename, label = '', ...elmProps } = props;
  // const { dispatch } = useStore();

  const key = (keyname || name) as string;

  // useEffect(() => dispatch({ [`$${key}`]: label }), [label]);

  return (
    <Input
      placeholder="Mobilo No"
      spellCheck={false}
      index={1}
      {...elmProps}
      name={name || rename || keyname}
      keyname={key}
      type='tel'
      value={value}
      // required={''}
      onChange={(v)=>{
        const value = v.target.value;
       console.log(!isNaN(+value)); 
        console.log('value',v.target)
        if(!isNaN(+value))
        setValue(v.target.value)}}
    
    />
  );
});

Username.displayName = 'Login.Username';
