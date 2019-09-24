import Vue from 'vue';
import Vuex from 'vuex';

import Axios from 'axios';

Vue.use(Vuex);

const axios = Axios.create({
  baseURL: 'https://swapi.co/api/'
});

export default new Vuex.Store({
  state: {
    characters: [],
    loading: false,
    currentCharacter: {},
    characterInfoLoading: false,
    isCharacterModalOpen: false,
    isBlured: false,
    nextPage: null
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    },
    TOGGLE_LOADING(state) {
      state.loading = !state.loading;
    },
    SET_CHARACTER_MODAL_STATE(state, status) {
      state.isCharacterModalOpen = status;
    },
    SET_BLUR(state, status) {
      state.isBlured = status;
    },
    SET_CURRENT_CHARACTER(state, character) {
      state.currentCharacter = character;
    },
    SET_CHARACTER_INFO_LOADING(state, status) {
      state.characterInfoLoading = status;
    },
    SET_MORE_CHARACTERS(state, characters) {
      state.characters = state.characters.concat(characters);
    }
  },
  actions: {
    async getCharacters({ commit, state }, url = '') {
      commit('SET_CHARACTERS', []);
      commit('TOGGLE_LOADING');
      const { data } = await axios.get(`people/${url}`);

      if (data.next) {
        state.nextPage = data.next;
      }

      const speciesPromises = [];
      data.results.forEach(c => {
        speciesPromises.push(axios.get(c.species));
      });

      Promise.all(speciesPromises).then(res => {
        for (let i = 0; i < data.results.length; i++) {
          data.results[i].species = res[i].data.name;
        }
        commit('TOGGLE_LOADING');
        commit('SET_CHARACTERS', data.results);
        return;
      });
    },
    async getCurrentCharacter({ commit, getters }, character) {
      const currentCharacter = getters.currentCharacter;
      if (currentCharacter.name === character.name) return;

      commit('SET_CHARACTER_INFO_LOADING', true);
      const { data } = await axios.get(character.homeworld);
      character.homeworldName = data.name;

      const filmsUrls = character.films;
      const filmsPromises = [];
      filmsUrls.forEach(filmUrl => {
        filmsPromises.push(axios.get(filmUrl));
      });

      character.filmsTitles = [];

      Promise.all(filmsPromises).then(res => {
        for (let i = 0; i < res.length; i++) {
          character.filmsTitles.push(res[i].data.title);
        }
        commit('SET_CURRENT_CHARACTER', character);
        commit('SET_CHARACTER_INFO_LOADING', false);
        return;
      });
    },
    async getMore({ commit, state }) {
      const nextPage = await axios.get(state.nextPage);

      if (nextPage.data.next) {
        state.nextPage = nextPage.data.next;
      }

      const speciesPromises = [];
      nextPage.data.results.forEach(c => {
        speciesPromises.push(axios.get(c.species));
      });

      Promise.all(speciesPromises).then(res => {
        for (let i = 0; i < nextPage.data.results.length; i++) {
          nextPage.data.results[i].species = res[i].data.name;
        }
        commit('SET_MORE_CHARACTERS', nextPage.data.results);
        return;
      });
    }
  },
  getters: {
    characters: s => s.characters,
    currentCharacter: s => s.currentCharacter,
    isLoading: s => s.loading,
    isCharaterInfoLoading: s => s.characterInfoLoading,
    isModalOpen: s => s.isCharacterModalOpen,
    isBlured: s => s.isBlured,
    hasMore: s => {
      return s.characters.length !== 0 && s.nextPage;
    }
  }
});
