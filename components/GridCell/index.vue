<template>
  <v-card
    :class="`d-flex align-center justify-center card ${
      !!positionDefault(index) || index == 0 ? 'pos-default' : ''
    }`"
    width="40"
    height="40"
  >
    <span>{{ positionDefault(index) }}</span>
  </v-card>
</template>

<script lang="ts" setup>
import { Piece } from "@/models";
const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
});

const piece = ref<Piece>();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

const emit = defineEmits(["freePosition"]);

const positionDefault = (index: number) => {
  return (index.toString().length == 1 && index != 0) || index == 10
    ? letters[index - 1]
    : index != 0 && index % 11 == 0
    ? numbers[index / 11 - 1]
    : "";
};

onMounted(() => {
  piece.value = new Piece(props.index);

  if (!positionDefault(props.index)) {
    emit("freePosition", props.index);
  }
});
</script>

<style scoped>
.card {
  background: #224fc0df;
  border: 1px solid #23245b;
  cursor: pointer;
  &:hover {
    background: #2e55b5;
    border: 2px solid #ffffff;
  }
}

.pos-default {
  color: #ffffff;
  font-weight: bold;
  background: #224fc0;
  &:hover {
    background: #224fc0;
    border: 1px solid #23245b;
    cursor: default;
  }
}
</style>
