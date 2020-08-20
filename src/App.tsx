import React from 'react';
import './App.css';
import styled from 'styled-components';
import { AppContainer } from './styles';
import { Column } from './Column';
import { Card } from './Card';
import { AddNewItem } from './AddNewItem';

const Button = styled.button`
  background-color: linear-gradient(#333, #fff);
`;

export const App = () => {
  return (
    <AppContainer>
      <Column text='To Do'>
        <Card text='Generate app scaffold' />
      </Column>
      <Column text='In Progress'>
        <Card text='Learn Typescript' />
        <Card text='Learn Elasticsearch' />
        <Card text='Learn Java' />
        <Card text='Learn Rust' />
        <Card text='Learn React' />
      </Column>
      <Column text='Done'>
        <Card text='Begin to static typing' />
      </Column>
      <AddNewItem toggleButtonText='+ Add another list' onAdd={console.log} />
    </AppContainer>
  );
};
