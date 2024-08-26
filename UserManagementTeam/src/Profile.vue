<template>
  <div class="profile-container flex justify-center items-center min-h-screen">
    <div class="profile-card card w-full max-w-md h-[600px] bg-base-100 custom-card-shadow rounded-3xl p-8">
      <div class="profile-content card-body mt-10"> 
        <div class="profile-info">
          <p class="text-2xl font-bold mb-2">User Name</p>
          <label class="block text-2xl mb-10 p-2 rounded-lg bg-white text-black border-2 custom-label-border">
            {{ profile.name }}
          </label> 
          
          <p class="text-2xl font-bold mb-2">Email</p>
          <label class="block text-2xl mb-10 p-2 rounded-lg bg-white text-black border-2 custom-label-border">
            {{ profile.email }}
          </label> 
          
          <p class="text-2xl font-bold mb-2">Phone</p>
          <label class="block text-2xl p-2 rounded-lg bg-white text-black border-2 custom-label-border">
            {{ profile.phone }}
          </label>
        </div>
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

