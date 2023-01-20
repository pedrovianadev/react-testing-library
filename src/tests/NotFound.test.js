import React from 'react';
import { screen } from '@testing-library/react';
import NotFound from '../pages/NotFound';
import renderWithRouter from './helpers/renderWithRouter';

describe('Testa o componente <NotFound.js />', () => {
  test('Testa se é exibido na tela um h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const heading = screen.getByRole('heading', { level: 2, name: 'Page requested not found' });

    expect(heading).toBeInTheDocument();
  });

  test('Testa se a página exibe uma img com respectivo src', () => {
    renderWithRouter(<NotFound />);
    const img = screen.getByRole('img', { name: /Pikachu crying because the page requested was not found/i });

    expect(img).toBeInTheDocument();
    expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
