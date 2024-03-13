import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useRootStore = defineStore('root', () => {

  const sneakers = ref([]);

  async function sortSneakers(item) {
    try {
      const { data } = await axios.get(`https://718221a4b6e751d3.mokky.dev/sneakers?sortBy=${item}`);
      sneakers.value = data;
    }
    catch (e) {
      alert(e.message);
    }
  };

  async function searchSneakers(item) {
    try {
      const { data } = await axios.get(`https://718221a4b6e751d3.mokky.dev/sneakers?title=*${item}`);
      sneakers.value = data;
    }
    catch (e) {
      alert(e.message);
    }
  };

  return { sortSneakers, searchSneakers }
})

