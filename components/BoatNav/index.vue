<template>
  <v-card
    color="red"
    :width="size"
    height="38"
    :style="`margin-top: 1px; position: absolute; top: ${boat.positions.top}px`"
  >
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
  return props.boat.size * 39 + "px";
});
</script>
