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
import { useFieldStore } from "@/store";

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  boatId: {
    type: String,
    default: "",
  },
  fieldId: {
    type: String,
    default: "",
  },
});

const useField = useFieldStore();

const piece = ref<Piece>(new Piece(props.index));

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
  if (!positionDefault(props.index)) {
    emit("freePosition", props.index);
  }

  overEffect();
});

watch(
  () => document.getElementById(props.fieldId)?.getBoundingClientRect(),
  () => {
    overEffect();
  }
);

const overEffect = () => {
  const positionPiece = document
    .getElementById(props.fieldId)
    ?.getBoundingClientRect();
  const positionBoat = document
    .getElementById(props.boatId)
    ?.getBoundingClientRect();

  piece.value.isHovered = piece.value.isOverlapping(
    positionPiece!,
    positionBoat!
  );

  if (piece.value.isHovered) {
    document.getElementById(props.fieldId)?.classList.add("covered");
    useField.addPosition(props.index);
  } else {
    document.getElementById(props.fieldId)?.classList.remove("covered");
  }
};
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

.covered {
  background: #959595 !important;
  border: 1px solid #a44f21 !important;
  cursor: default;
}
</style>
