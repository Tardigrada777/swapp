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
    }
  },
  actions: {
    async getCharacters({ commit, dispatch }) {
      commit('TOGGLE_LOADING');
      const { data } = await axios.get('people/');
      dispatch('getSpecies', data.results).then(res => {
        commit('TOGGLE_LOADING');
        commit('SET_CHARACTERS', res);
      });
    },
    async getSpecies({ commit }, characters) {
      characters.map(c => {
        if (c.species.length === 0) {
          c.species = 'Unknown';
          return c;
        }
        axios
          .get(c.species[0])
          .then(res => {
            c.species = res.data.name;
            return c;
          })
          .catch(err => console.log(err));
      });

      return characters;
    }
  },
  getters: {
    characters: s => s.characters,
    isLoading: s => s.loading,
    isModalOpen: s => s.isCharacterModalOpen,
    isBlured: s => s.isBlured
  }
});
