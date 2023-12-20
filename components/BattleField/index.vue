<template>
  {{ field.freePositions }}
  <v-card width="474" class="py-3">
    <v-row class="d-flex align-center justify-center ma-2 background-field">
      <GridCell
        v-for="(_, i) in 121"
        :key="i"
        :index="i"
        @freePosition="field.setFreePosition($event)"
        :id="`position_` + i"
      />
      <Boat style="position: absolute;" />
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
import { Field } from "~/models";

const field = ref<Field>(new Field("Player 1"));
</script>

<style scoped>
.background-field {
  background-image: url("/images/background-field.gif");
  background-size: cover;
  background-repeat: no-repeat;
  width: 93%;
}
</style>
