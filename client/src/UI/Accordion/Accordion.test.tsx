import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Accordion from './Accordion';

describe('<Accordion />', () => {
  test('it should mount', () => {
    render(<Accordion content={[{header: '1', text: '1'}, {header: '2', text: '2'}, {header: '3', text: '3'}]}/>);
    
    const accordion = screen.getByTestId('Accordion');

    expect(accordion).toBeInTheDocument();
  });
});