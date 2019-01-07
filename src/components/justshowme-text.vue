<template>
  <div class="justshowme-text">
    {{getOptions().text}}
    <justshowme v-for="childUnit in unit.units" :key="childUnit.id" :unit="childUnit" />
  </div>
</template>

<script>
import justshowmeComponentMixin from '@/components/mixins/justshowmeComponentMixin'

export default {
  mixins: [ justshowmeComponentMixin ],
  name: 'justshowme-text',
  props: {
    unit: Object
  }
}
</script>

<style scoped lang="scss">
  .justshowme-text {
    color: #e8c5a1;
  }
</style>
