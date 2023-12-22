<template>
  <v-card color="red" :width="size" height="36" style="margin-top: 2px;">
  </v-card>
</template>

<script lang="ts" setup>
import { Boat } from "@/models";

const props = defineProps({
  boat: {
    type: Boat,
    required: true,
  },
});

const size = computed(() => {
  return props.boat.size * 40 + "px";
});

</script>