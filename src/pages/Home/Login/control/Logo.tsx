import { PropsWithChildren } from 'react';
import { Block, BlockProps, BlockTagType } from 'react-login-page';
import Loge from './../../../../assets/iiitdmj-logo.png';

export const Logo = <T extends BlockTagType = 'div'>(props: PropsWithChildren<Partial<BlockProps<T>>>) => {
  const { keyname = 'logo', name, ...elmProps } = props;
  if (!elmProps.children) {
    elmProps.children =  <img src={Loge} alt="College-logo" width={200} /> ;   //'⚛️';
  }
  return <Block {...elmProps} keyname={name || keyname} className={`login-page4-logo ${elmProps.className || ''}`} />;
};

Logo.displayName = 'Login.Logo';
