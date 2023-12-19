<template>
  <v-card width="474" class="py-3">
    <v-row class="d-flex align-center justify-center ma-2 background-field">
      <GridCell v-for="(value, i) in 121" :key="i" :index="i" />
    </v-row>
    <Boat />
  </v-card>
</template>

<script></script>

<style scoped>
.background-field {
  background-image: url("/images/background-field.gif");
  background-size: cover;
  background-repeat: no-repeat;
  width: 93%;
}
</style>
