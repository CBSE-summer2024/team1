<!-- src/History.vue -->
<template>
  <div :class="CONTAINER">
    <h2 class="text-2xl font-bold mb-4">Order History</h2>
    <div v-for="order in orders" :key="order.id" class="border-b py-2">
      <p><strong>Order Date:</strong> {{ order.date }}</p>
      <p><strong>Items Purchased:</strong> {{ order.items.join(', ') }}</p>
      <p><strong>Order Status:</strong> {{ order.status }}</p>
      <p><strong>Total Amount:</strong> ${{ order.total }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Order } from '@/interfaces/Order';

export default defineComponent({
  props: {
    CONTAINER: {
      type: String,
      required: true,
    },
    orders: {
      type: Array as PropType<Order[]>,
      required: true,
    },
  },
});
</script>
