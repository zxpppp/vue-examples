<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import SidebarView from './views/SidebarView.vue'
</script>

<template>
  <SidebarView id="sidebar" />
  <RouterView id="router" />
</template>

<style>
#app {
  display: flex;
}
#sidebar {
  border: 1px solid red;
  width: 300px;
}
#router {
  border: 1px solid red;
  flex: 1;
}
</style>
