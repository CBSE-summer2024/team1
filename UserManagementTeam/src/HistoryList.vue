<template>
  <div :class="CONTAINER">
    <h2 class="text-2xl font-bold mb-4">Order History</h2>
    <div v-for="order in orders" :key="order.id" class="border-b py-2">
      <p><strong>Order Date:</strong> {{ order.order_date }}</p>
      <p><strong>Order Status:</strong> {{ order.status }}</p>
      <p><strong>Total Amount:</strong> ${{ order.total_amount }}</p>
      <div>
        <strong>Items Purchased:</strong>
        <ul>
          <li v-for="item in order.order_items" :key="item.item_name">
            {{ item.quantity }} x {{ item.item_name }} @ ${{ item.price }} each
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Order } from '@/interfaces/Order';
import { getOrders } from "shared";

export default defineComponent({
  props: {
    CONTAINER: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    initialOrders: {
      type: Array as PropType<Order[]>,
      default: () => [],
    },
  },
  data() {
    return {
      orders: [] as Order[],
    };
  },
  watch: {
    userId: {
      immediate: true,
      handler(newUserId) {
        this.getHistoryData(newUserId);
      },
    },
  },
  methods: {
    async getHistoryData(userId: string) {
      try {
        const { data, error } = await getOrders(userId);
        if (error) {
          console.error("Error fetching order history:", error);
        } else {
          this.orders = data;
        }
      } catch (error) {
        console.error("Error fetching order history:", error);
      }
    },
  },
});
</script>
