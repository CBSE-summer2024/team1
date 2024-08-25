<template>
    <div class="profile-container">
      <div class="profile-card">
        <div class="profile-content">
          <div class="profile-info">
            <p><strong>User Name:</strong> {{ profile.name }}</p>
            <p><strong>Email:</strong> {{ profile.email }}</p>
            <p><strong>Phone:</strong> {{ profile.phone }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { User } from "./interfaces/ProfileData";
  
  const props = defineProps<User>();

  </script>
  

  