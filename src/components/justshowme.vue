<template>
  <component :is="getComponentType()" :unit="unit" class="justshowme-unit">
    <!--<justshowme v-for="childUnit in unit.units" :key="childUnit.id" :unit="childUnit" />-->
  </component>
</template>

<script>
import justshowmeComponentMixin from '@/components/mixins/justshowmeComponentMixin'

export default {
  mixins: [ justshowmeComponentMixin ],
  name: 'justshowme',
  props: {
    unit: Object
  }
}
</script>