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
    isBlured: false
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
    }
  },
  actions: {
    async getCharacters({ commit }, url = '') {
      commit('TOGGLE_LOADING');
      const { data } = await axios.get(`people/${url}`);

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
      commit('SET_CURRENT_CHARACTER', character);
      commit('SET_CHARACTER_INFO_LOADING', false);
      return;
    }
  },
  getters: {
    characters: s => s.characters,
    currentCharacter: s => s.currentCharacter,
    isLoading: s => s.loading,
    isCharaterInfoLoading: s => s.characterInfoLoading,
    isModalOpen: s => s.isCharacterModalOpen,
    isBlured: s => s.isBlured
  }
});
