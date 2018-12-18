<template>
  <div class="justshowme">
    <input class="justshowme-address-input" type="text" :value="value" :placeholder="placeholder" @keyup.enter="submit(value)" />
  </div>
</template>

<script>
export default {
  name: 'JustShowMe',
  props: {
    value: {
      type: String,
      default: 'http://localhost:9001/test'
    },
    placeholder: {
      type: String,
      default: 'http://'
    }
  },
  methods: {
    submit (address) {
      console.log(address);
    }
  }
}
</script>

<style scoped lang="scss">
  .justshowme {
    position: fixed;
    width: 100%;
    height: 50px;
    background: rgba(0,0,0,.5);
    padding: 1em;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .justshowme-address-input {
      border: 0;
      background: rgba(255,255,255, 0.1);
      padding: 0 1em;
      height: 3em;
      color: #777;
      outline: none;

      &:focus {
        background: rgba(255,255,255, 0.25);
        color: #ccc;
      }
    }
  }
</style>
