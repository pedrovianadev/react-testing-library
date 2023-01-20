import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('Testa o componente <NotFound.js />', () => {
  test('Testa se é exibido na tela um h2 com o texto Page requested not found', () => {
    const { getByRole } = render(<NotFound />);
    const heading = getByRole('heading', { level: 2, name: 'Page requested not found' });

    expect(heading).toBeInTheDocument();
  });

  test('Testa se a página exibe uma img com respectivo src', () => {
    const { getByRole } = render(<NotFound />);
    const img = getByRole('img', { name: /Pikachu crying because the page requested was not found/i });

    expect(img).toBeInTheDocument();
    expect(img.src).toBe('https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
