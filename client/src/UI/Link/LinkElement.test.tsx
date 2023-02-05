import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LinkElement from './LinkElement';

describe('<LinkElement />', () => {
  test('it should mount', () => {
    render(<LinkElement link=""> </LinkElement>);
    
    const link = screen.getByTestId('LinkElement');

    expect(link).toBeInTheDocument();
  });
});