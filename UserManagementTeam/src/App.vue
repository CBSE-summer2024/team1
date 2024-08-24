<template>
  <div :class="CONTAINER">
    <div>Name: {{ NAME }}</div>
    <div>Framework: {{ FRAMEWORK }}</div>
    <div>Language: {{ LANGUAGE }}</div>
    <div>CSS: {{ CSS }}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    CONTAINER: {
      type: String,
      required: true,
    },
    NAME: {
      type: String,
      required: true,
    },
    FRAMEWORK: {
      type: String,
      required: true,
    },
    LANGUAGE: {
      type: String,
      required: true,
    },
    CSS: {
      type: String,
      required: true,
    },
  },
});
</script>
