<template>
  <div class="justshowme-unit">
    <justshowme v-for="childUnit in unit.units" :key="childUnit.id" :unit="childUnit" />
  </div>
</template>

<script>
import justshowmeComponentMixin from '@/mixins/justshowmeComponentMixin'

export default {
  mixins: [ justshowmeComponentMixin ],
  name: 'justshowme-unit'
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
