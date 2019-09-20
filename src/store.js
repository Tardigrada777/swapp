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
    async getCharacters({ commit }) {
      const { data } = await axios.get('people/');

      data.results.forEach(async c => {
        if (c.species.length === 0) return (c.species = 'Unknown');

        try {
          const species = await axios.get(c.species[0]);
          return (c.species = species.data.name);
        } catch (error) {
          console.log(error);
          return (c.species = 'Unknown');
        }
      });

      commit('SET_CHARACTERS', data.results);
    }
  },
  getters: {
    characters: s => s.characters
  }
});
