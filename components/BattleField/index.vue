<template>
  <v-card width="474" class="py-3">
    <v-row
      class="d-flex align-center justify-center ma-2 background-field position-relative"
    >
      <GridCell
        v-for="(_, i) in 121"
        :key="i"
        :index="i"
        @freePosition="field.setFreePosition($event)"
        :id="`position_` + i"
        :fieldId="`position_` + i"
        boatId="boat_4"
      />
      <BoatNav
        v-for="(boat, i) in field.boats"
        style="position: absolute; top: 80px"
        :id="`boat_` + i"
        :key="i"
        :boat="boat"
      />
    </v-row>
  </v-card>
</template>

<script lang="ts" setup>
import { Field, Boat } from "@/models";

const field = ref<Field>(new Field("Player 1"));
field.value.boats = [
  new Boat("boat", 5),
  new Boat("boat", 4),
  new Boat("boat", 3),
  new Boat("boat", 3),
  new Boat("boat", 3),
  new Boat("boat", 2),
  new Boat("boat", 2),
];
</script>

<style scoped>
.background-field {
  background-image: url("/images/background-field.gif");
  background-size: cover;
  background-repeat: no-repeat;
  width: 93%;
}
</style>
