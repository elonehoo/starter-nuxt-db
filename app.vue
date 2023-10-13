<script lang="ts" setup>
const { $client } = useNuxtApp();

const { data: todos, refresh } = await $client.todo.list.useQuery();
</script>

<template>
  <div>
    <h1>App</h1>
    {{ todos }}
  </div>
</template>

