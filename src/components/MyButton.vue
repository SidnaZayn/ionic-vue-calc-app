<script setup lang="ts">
const props = defineProps({
  label: {
    type: String,
    required:true,
  },
});
</script>

<template>
  <div>
    <ion-button class="btn">{{ props.label }}</ion-button>
  </div>
</template>

<style scoped>
.btn{
 width: 100%;
}
</style>
