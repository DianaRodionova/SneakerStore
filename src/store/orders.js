import { defineStore } from 'pinia';
import axios from 'axios';
import {IDLE, LOADING, SUCCEEDED, FAILED} from '@/utils/statuses';

export const useOrdersStore = defineStore('order', {
  state: () => ({
    orders: [],
    status: IDLE,
  }),

  actions: {
    async getOrders() {
      try {
        this.status = LOADING;
        const { data } = await axios.get('https://718221a4b6e751d3.mokky.dev/orders');
        this.orders = data.reverse();
        this.status = SUCCEEDED;
      }
      catch (e) {
        this.status = FAILED;
      }
    },
  }
})
