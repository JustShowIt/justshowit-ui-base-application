<template>
  <div class="unit">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'unit',
  props: {
    options: Object
  },
  methods: {
  }
}
</script>

<style scoped lang="scss">
  .unit {
    background: rgba(0,0,0,.1);
    padding: .3em;
    border: 1px solid rgba(255,255,255,.2);
    box-shadow: 0 0 1em 0 rgba(0,0,0,.5);
  }
</style>
