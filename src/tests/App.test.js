import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testa o componente <App.js />', () => {
  test('É exibido na tela um link com o texto Home', () => {
    renderWithRouter(<App />);

    const home = screen.getByRole('link', { name: /home/i });
    expect(home).toBeInTheDocument();
  });

  test('É exibido na tela um link com o texto About', () => {
    renderWithRouter(<App />);

    const about = screen.getByRole('link', { name: /about/i });
    expect(about).toBeInTheDocument();
  });

  test('É exibido na tela um link com o texto Favorite Pokémon', () => {
    renderWithRouter(<App />);

    const favorite = screen.getByRole('link', { name: /favorite pokémon/i });
    expect(favorite).toBeInTheDocument();
  });
});
