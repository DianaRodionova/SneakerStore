import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import {IDLE, LOADING, SUCCEEDED, FAILED} from '@/utils/statuses';

export const useRootStore = defineStore('root', () => {

  const sneakers = ref([]);
  const favoriteSneakers = ref([]);
  const status = ref(IDLE);

  function sneakersUpdated(id, data) {
    const item = sneakers.value.find((item) => item.id === id);
    Object.assign(item, data);
  };

  async function getSneakers() {
    try {
      status.value = LOADING;
      const { data } = await axios.get('https://718221a4b6e751d3.mokky.dev/sneakers');
      sneakers.value = data;
      favoriteSneakers.value = data.filter((item) => item.isFavorite === true);
      status.value = SUCCEEDED;
    }
    catch (e) {
      status.value = FAILED;
    }
  };

  async function updateSneakers(id, data) {
    try {
      const response = await axios.patch(`https://718221a4b6e751d3.mokky.dev/sneakers/${id}`, data);
      sneakersUpdated(id, data);
    }
    catch (e) {
      alert(e.message);
    }
  };

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

  return { sneakers, favoriteSneakers, status, sneakersUpdated, getSneakers, updateSneakers, sortSneakers, searchSneakers }
})

