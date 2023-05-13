<script setup lang="ts">
type Props = {
  count: number;
};

defineProps<Props>();
</script>
<template>
  <h1 class="text-2xl mb-4 flex items-center gap-2 font-bold">
    <slot name="headline" />
    <span
      class="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-700 ring-1 ring-inset ring-slate-700/10"
    >
      {{ count }}
    </span>
  </h1>
</template>
