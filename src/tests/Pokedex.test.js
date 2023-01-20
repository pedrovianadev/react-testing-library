import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testa se o texto Encountered Pokémon <Pokedex.js />', () => {
  it('verifica se tem um parágrafo com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);

    const heading = screen.getByRole('heading', { name: /encountered pokémon/i, level: 2 });

    expect(heading).toBeInTheDocument();
  });
});

it('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado', () => {
  renderWithRouter(<App />);
  const btnPkmn = screen.getByRole('button', { name: /próximo Pokémon/i });
  for (let i = 0; i < 8; i += 1) {
    userEvent.click(btnPkmn);
  }
  const capture = screen.getByText(/dragonair/i);
  expect(capture).toBeInTheDocument();
});

it('Testa os botões de filtro', () => {
  renderWithRouter(<App />);
  const buttons = screen.queryAllByTestId('pokemon-type-button');
  userEvent.click(buttons[1]);

  const pokemon = screen.getByText(/charmander/i);
  expect(pokemon).toBeInTheDocument();

  const drgBtn = screen.getByRole('button', { name: /dragon/i });
  userEvent.click(drgBtn);

  const dragonair = screen.getByText(/dragonair/i);
  expect(dragonair).toBeInTheDocument();

  const Allbuttons = screen.getByRole('button', { name: /all/i });
  userEvent.click(Allbuttons);

  const pokemon1 = screen.getByText(/pikachu/i);
  expect(pokemon1).toBeInTheDocument();
});
