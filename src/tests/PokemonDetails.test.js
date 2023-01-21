import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './helpers/renderWithRouter';
import App from '../App';

describe('Testa o componente <PokemonDetails.js />', () => {
  test('Testa se as informações detalhadas do Pokémon selecionado são mostradas na tela', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /more details/i });

    userEvent.click(details);

    const pikaDetails = screen.getByText(/pikachu details/i);

    expect(pikaDetails).toBeInTheDocument();

    const detailsNull = screen.queryByRole('link', { name: /more details/i });

    expect(detailsNull).toBe(null);

    const summary = screen.getByRole('heading', { level: 2, name: /summary/i });

    expect(summary).toBeInTheDocument();

    const textSmr = screen.getByText(/This intelligent Pokémon roasts hard berries with electricity to make them tender enough to eat./i);

    expect(textSmr).toBeInTheDocument();
  });

  test('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /more details/i });

    userEvent.click(details);

    const location = screen.getByRole('heading', { level: 2, name: /game locations of pikachu/i });

    expect(location).toBeInTheDocument();

    const viridianF = screen.getByText(/kanto viridian forest/i);

    expect(viridianF).toBeInTheDocument();

    const powerPlant = screen.getByText(/kanto power plant/i);

    expect(powerPlant).toBeInTheDocument();

    const locationImg = screen.getAllByRole('img');

    expect(locationImg).toHaveLength(3);

    expect(locationImg[1].alt).toBe('Pikachu location');

    expect(locationImg[1].src).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');

    expect(locationImg[2].alt).toBe('Pikachu location');

    expect(locationImg[2].src).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('Testa se o usuário pode favoritar um Pokémon através da página de detalhes', () => {
    renderWithRouter(<App />);

    const details = screen.getByRole('link', { name: /more details/i });

    userEvent.click(details);

    const favorite = screen.getByRole('checkbox', { name: /pokémon favoritado?/i });

    userEvent.click(favorite);

    const favoritePkmn = screen.getByRole('link', { name: /favorite pokémon/i });

    userEvent.click(favoritePkmn);

    const pikachu = screen.getByText(/pikachu/i);

    expect(pikachu).toBeInTheDocument();
  });
});
