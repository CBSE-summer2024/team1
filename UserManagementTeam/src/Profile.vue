<template>
  <div class="flex justify-center items-center min-h-screen">
    <div class="card w-full max-w-md bg-base-100 shadow-2xl rounded-3xl p-8">
      <div class="card-body"> 
        <p class="text-2xl font-bold mb-2">User Name</p>
        <label class="block text-2xl mb-10 p-2 rounded-lg bg-white text-black border-2 border-transparent bg-clip-border">
          {{ profile.email.split('@')[0] }}
        </label> 
        
        <p class="text-2xl font-bold mb-2">Email</p>
        <label class="block text-2xl mb-10 p-2 rounded-lg bg-white text-black border-2 border-transparent bg-clip-border">
          {{ profile.email }}
        </label> 
        
        <p class="text-2xl font-bold mb-2">Phone</p>
        <label class="block text-2xl p-2 rounded-lg bg-white text-black border-2 border-transparent bg-clip-border">
          {{ profile.phone }}
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { User } from "./interfaces/ProfileData";

export default defineComponent({
  props: {
    profile: {
      type: Object as () => User,
      required: true
    }
  }
});
</script>
