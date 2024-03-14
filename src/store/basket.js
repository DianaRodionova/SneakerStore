import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import { useRootStore } from './index';
import {IDLE, LOADING, SUCCEEDED, FAILED} from '@/utils/statuses';

export const useBasketStore = defineStore('basket', () => {

  const sneakers = ref([]);
  const status = ref(IDLE);
  const sum = ref(0);
  const tax = ref(0);

  function calcAmount() {
    sum.value = sneakers.value.reduce(function(sum, current) {
      return sum + current.price;
    }, 0);

    tax.value = Math.round(sum.value*0.05);
  };

  function sneakersAdded(data) {
    sneakers.value.push(data);
  };

  function sneakersDeleted(id) {
    sneakers.value = sneakers.value.filter((item) => item.id !== id);
  };

  async function getSneakers() {
    try {
      status.value = LOADING;
      const { data } = await axios.get('https://718221a4b6e751d3.mokky.dev/sneakers-basket');
      sneakers.value = data;
      calcAmount();
      status.value = SUCCEEDED;
    }
    catch (e) {
      status.value = FAILED;
    }
  };

  async function addToBasket (item) {
    try {
      const response = await axios.post('https://718221a4b6e751d3.mokky.dev/sneakers-basket', {
                                                                                                parentId: item.id,
                                                                                                title: item.title,
                                                                                                price: item.price,
                                                                                                imageUrl: item.imageUrl,
                                                                                              });
      sneakersAdded(response.data);
      calcAmount();
      const rootStore = useRootStore();
      rootStore.updateSneakers(item.id, {isAdded: true});
    }
    catch (e) {
      alert(e.message);
    }
  };

  async function deleteSneakers(id, parentId) {
    try {
      const response = await axios.delete(`https://718221a4b6e751d3.mokky.dev/sneakers-basket/${id}`);
      sneakersDeleted(id);
      calcAmount();
      const rootStore = useRootStore();
      rootStore.updateSneakers(parentId, {isAdded: false});
    }
    catch (e) {
      alert(e.message);
    }
  };

  async function createOrder() {
    try {
      const response = await axios.post('https://718221a4b6e751d3.mokky.dev/orders', {items: sneakers.value, sum: sum.value});
      sneakers.forEach((item) => { deleteSneakers(item.id, item.parentId); });
    }
    catch (e) {
      alert(e.message);
    }
  };

  return { sneakers, status, sum, tax, calcAmount, sneakersAdded, sneakersDeleted, getSneakers, addToBasket, deleteSneakers, createOrder }
})
