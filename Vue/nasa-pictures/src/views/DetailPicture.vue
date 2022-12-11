<template>
    <div>
  <img :src='img' decoding="async" :alt='img' />
  </div>
</template>

<script>

import { getData } from '@/composables/getData'

export default {
     name: 'detailPicture',
  props: ['img'],
  setup(props){
    console.log(props.img)
    const imgLink = props.img;
    return {imgLink}
  },
  
}
</script>

<style>

</style>