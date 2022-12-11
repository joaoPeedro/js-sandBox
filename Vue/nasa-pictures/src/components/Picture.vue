<template>
  <article class="picture">
     {{photo}} 
    <img :src='photo.img_src' :onload='loadedImg' decoding="async" loading='lazy' :alt='photo.name' />
    <div class="description">
      <h3>{{photo.camera.full_name}}</h3>
    <p>earth date: {{photo.earth_date}}<br>rover : {{photo.rover.name}}</p>
    <router-link :to="{name: 'DetailPicture', params: { img: photo.img_src }}">
        ver mais >
      </router-link>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Picture',
  props: ['photo'],
  setup(props){

    const loadedImg = (e) => {
      //console.log('loaded', e.target)
      e.target.style.aspectRatio = 'auto'
    }

    return {loadedImg}
  }
  
}
</script>

<style scoped lang="scss">
  .picture{
    padding: 20px 20px 60px ;
    img{
      aspect-ratio: 1 / 1;
      width: 100%;
      height: auto;
    }

    .description{
      background: #f0d1d4;
      padding: 12px;
    }
  }
</style>