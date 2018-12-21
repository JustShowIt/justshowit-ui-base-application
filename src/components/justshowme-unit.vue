<template>
  <div class="justshowme-unit">
    <slot></slot>
    <!--<component v-for="unit in initialUnits" :key="unit.id" v-bind:is="getComponentTypeByUnit(unit)" :unit="unit" />-->
    <justshowme v-for="unit in unit.units" :key="unit.id" v-bind:is="getComponentTypeByUnit(unit)" :unit="unit" />
  </div>
</template>

<script>
export default {
  name: 'justshowme-unit',
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
  .justshowme-unit {
    background: rgba(0,0,0,.1);
    padding: .5em;
    border: 1px solid rgba(255,255,255,.2);
    box-shadow: 0 0 1em 0 rgba(0,0,0,.5);
  }
</style>
