import { FC } from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: JSX.Element;
  authoized: boolean;
}


export const ProtectedRoute: FC<Props> = (props: Props) => {

  if (props.authoized) {
    return Navigate({ to: '/login' });
  }

  return props.children;
}

