import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from './helpers/renderWithRouter';
import pokemonList from '../data';

describe('Testa o componente <Pokemon.js />', () => {
  it('Testa se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const card = screen.getByRole('img', { name: /pikachu sprite/i });

    expect(card).toBeInTheDocument();
    expect(card.src).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
    expect(card.alt).toBe('Pikachu sprite');
    expect(screen.getByTestId('pokemon-name')).toHaveTextContent(/Pikachu/i);
    expect(screen.getByTestId('pokemon-type')).toHaveTextContent(/Electric/i);
    expect(screen.getByTestId('pokemon-weight')).toHaveTextContent(/Average weight: 6.0 kg/i);
  });

  it('Testa se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes deste Pokémon.', () => {
    renderWithRouter(<App />);

    const nav = screen.getByRole('link', { name: /More details/i });

    expect(nav).toHaveAttribute('href', '/pokemon/25');
  });

  it('Testa se ao clicar no link de navegação do Pokémon é feito o redirecionamento', () => {
    renderWithRouter(<App />);

    const moreDetails = screen.getByRole('link', { name: /More details/i });

    const { id } = pokemonList[0];

    expect(moreDetails.href).toContain(`/pokemon/${id}`);
  });

  it('Testa se existe um ícone de estrela nos Pokémon favoritados', () => {
    renderWithRouter(<App />);

    userEvent.click(screen.getByRole('link', { name: /More details/i }));
    userEvent.click(screen.getByRole('checkbox', { name: /Pokémon favoritado?/i }));

    const star = screen.getByRole('img', { name: /pikachu is marked as favorite/i });

    expect(star).toBeInTheDocument();
    expect(star.src).toBe('http://localhost/star-icon.svg');
    expect(star.alt).toBe('Pikachu is marked as favorite');
  });
});
