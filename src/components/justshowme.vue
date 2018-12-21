<template>
  <component v-bind:is="getComponentTypeByUnit(unit)" :unit="unit" class="justshowme-unit">
    <!--<component v-for="unit in initialUnits" :key="unit.id" v-bind:is="getComponentTypeByUnit(unit)" :unit="unit" />-->
    <justshowme v-for="unit in unit.units" :key="unit.id" v-bind:is="getComponentTypeByUnit(unit)" :unit="unit" />
  </component>
</template>

<script>
export default {
  name: 'justshowme',
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