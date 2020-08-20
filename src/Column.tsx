import React from 'react';
import { ColumnContainer, ColumnTitle } from './styles';

interface ColumnProps {
  text: string;
}

type PropsWithChildren<P> = P & {
  children?: React.ReactNode;
};

export const Column = ({
  text,
  children,
}: React.PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>
  );
};