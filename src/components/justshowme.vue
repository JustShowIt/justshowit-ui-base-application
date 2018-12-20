<template>
  <div class="justshowme-unit">
    <component v-for="unit in unit.units" :key="unit.id" v-bind:is="getComponentTypeByUnit(unit)" :unit="unit" />
  </div>
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