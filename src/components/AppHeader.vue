<script setup lang="ts">
import { Paths } from '@/router';
import { RouterLink } from 'vue-router';
import IconTasks from './icons/IconTasks.vue';
import IconUser from './icons/IconUser.vue';
import IconMoon from './icons/IconMoon.vue';
import IconSun from './icons/IconSun.vue';
</script>
<template>
  <header class="sticky top-0 z-10 mb-4 bg-slate-200 dark:bg-slate-950">
    <div class="container mx-auto p-4">
      <div class="flex gap-4 items-center">
        <IconTasks class="w-10 h-10 text-teal-400" />
        <nav class="flex gap-6 items-center py-4 text-gray-600 dark:text-gray-300 text-lg">
          <RouterLink :to="Paths.Tasks">My Tasks</RouterLink>
          <RouterLink :to="Paths.Archive">Archive</RouterLink>
        </nav>
        <div class="ml-auto flex items-center gap-2">
          <span class="hidden sm:inline">Bob Andrews</span>
          <span class="sm:hidden">B.A.</span>
          <IconUser class="text-teal-500" />
          <span class="hidden sm:inline-block">
            System color theme:
            <IconMoon class="hidden dark:inline-block text-teal-500" />
            <IconSun class="inline-block dark:hidden text-teal-500" />
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
nav a.router-link-exact-active {
  @apply text-slate-900;
  @apply dark:text-slate-200;
  @apply underline;
  @apply underline-offset-2;
  @apply font-bold;
}
</style>
