import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import { FavoritePokemon } from '../pages';
import App from '../App';

describe('Testa o componente <FavoritePokemon.js />', () => {
  test('Testa se é exibido na tela a mensagem No favorite pokemon found', () => {
    renderWithRouter(<FavoritePokemon />);

    const warning = screen.getByText(/No favorite Pokémon found/i);
    expect(warning).toBeInTheDocument();
  });

  test('Testa se são exibidos na tela apenas os Pokémon favoritados', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /more details/i });
    userEvent.click(moreDetails);

    const favorite = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });
    userEvent.click(favorite);

    const favoritePokemons = screen.getByRole('link', { name: /favorite pokémon/i });
    userEvent.click(favoritePokemons);

    const pokemon = screen.getByText(/pikachu/i);
    expect(pokemon).toBeInTheDocument();
  });
});
