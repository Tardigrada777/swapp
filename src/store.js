import Vue from 'vue';
import Vuex from 'vuex';

import Axios from 'axios';

Vue.use(Vuex);

const axios = Axios.create({
  baseURL: 'https://swapi.co/api/'
});

export default new Vuex.Store({
  state: {
    characters: []
  },
  mutations: {
    SET_CHARACTERS(state, characters) {
      state.characters = characters;
    }
  },
  actions: {
    async getCharacters({ commit, dispatch }) {
      const { data } = await axios.get('people/');

      commit('SET_CHARACTERS', data.results);
      dispatch('getSpecies');
    },
    async getSpecies({ commit, state }) {
      const characters = state.characters.map(c => {
        if (c.species.length === 0) {
          c.species = 'Unknown';
          return c;
        }
        axios
          .get(c.species[0])
          .then(res => {
            c.species = res.data.name;
          })
          .catch(err => console.log(err));
        return c;
      });
      commit('SET_CHARACTERS', characters);
    }
  },
  getters: {
    characters: s => s.characters
  }
});
