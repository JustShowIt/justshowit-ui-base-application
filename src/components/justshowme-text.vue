<template>
  <div class="justshowme-text">
    <slot></slot>
    <component v-for="unit in unit.units" :key="unit.id" v-bind:is="getComponentTypeByUnit(unit)" :unit="unit">
      {{ unit.id }} - {{ unit.type }}
    </component>
  </div>
</template>

<script>
export default {
  name: 'justshowme-text',
  props: {
    unit: Object
  },
  methods: {
    getComponentTypeByUnit (unit) {
      return unit.type ? 'justshowme-' + unit.type : 'justshowme-text'
    }
  }
}
</script>

<style scoped lang="scss">
  .justshowme-text {
    color: #fff;
  }
</style>
