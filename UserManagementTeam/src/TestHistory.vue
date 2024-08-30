<template>
    <div>
      <History :CONTAINER="'container-class'" :orders="mockOrders" />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import History from './History.vue';
  import { Order } from '@/interfaces/Order';
  
  export default defineComponent({
    components: {
      History,
    },
    data() {
      return {
        mockOrders: [] as Order[],
      };
    },
    mounted() {
      this.mockOrders = this.fetchMockOrders();
    },
    methods: {
      fetchMockOrders(): Order[] {
        return [
          {
            id: 1,
            date: '2024-08-01',
            items: ['Item A', 'Item B'],
            status: 'Delivered',
            total: 100,
          },
          {
            id: 2,
            date: '2024-08-15',
            items: ['Item C', 'Item D'],
            status: 'In Transit',
            total: 150,
          },
          {
            id: 3,
            date: '2024-08-20',
            items: ['Item E'],
            status: 'Cancelled',
            total: 50,
          },
        ];
      },
    },
  });
  </script>
  