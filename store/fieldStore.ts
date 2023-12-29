export const useFieldStore = defineStore("field", () => {
  const positions = ref([]);

  const addPosition = (position) => {
    positions.value.push(position);
  };

  const removePosition = (position) => {
    positions.value = positions.value.filter((pos) => pos !== position);
  };

  const getPositions = () => {
    return positions.value;
  };

  return {
    addPosition,
    removePosition,
    getPositions,
  };
});
