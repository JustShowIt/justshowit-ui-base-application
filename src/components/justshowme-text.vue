<template>
  <div class="justshowme-text">
    <slot></slot>

    <div v-for="(text, index) in formattedContent" :key="index">
      {{text}}
    </div>

    <!--<component v-for="unit in initialUnits" :key="unit.id" v-bind:is="getComponentTypeByUnit(unit)" :unit="unit" />-->
    <justshowme v-for="unit in unit.units" :key="unit.id" v-bind:is="getComponentTypeByUnit(unit)" :unit="unit" />
  </div>
</template>

<script>
export default {
  name: 'justshowme-text',
  props: {
    unit: Object
  },
  computed: {
    formattedContent () {
      let formattedContent = []      
      Object.keys(this.unit).forEach((option) => {
        formattedContent.push(this.unit[option])
      });
      return formattedContent
    }
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
    color: #e8c5a1;
  }
</style>
