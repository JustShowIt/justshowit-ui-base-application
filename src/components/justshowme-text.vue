<template>
  <div class="justshowme-text">
    {{getOptions().text}}
    <justshowme v-for="childUnit in unit.units" :key="childUnit.id" :unit="childUnit" />
  </div>
</template>

<script>
import justshowmeComponentMixin from '@/mixins/justshowmeComponentMixin'

export default {
  mixins: [ justshowmeComponentMixin ],
  name: 'justshowme-text'
}
</script>

<style scoped lang="scss">
  .justshowme-text {
    border: 1px solid rgba(0,0,0,.5);
    padding: .5em;
    margin: .5em;
    color: #e8c5a1;
  }
</style>
