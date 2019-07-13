<template>
  <div class="justshowme-video">
    <video controls>
      <source :src="this.getOptions().url" type="video/mp4"> 
      <a :href="this.getOptions().url" v-html="this.getOptions().url"></a>
    </video>
    <justshowme v-for="childUnit in unit.units" :key="childUnit.id" :unit="childUnit" />
  </div>
</template>

<script>
import justshowmeComponentMixin from '@/mixins/justshowmeComponentMixin'

export default {
  mixins: [ justshowmeComponentMixin ],
  name: 'justshowme-video'
}
</script>

<style scoped lang="scss">
  .justshowme-video {
    color: #e8c5a1;
  }
</style>
