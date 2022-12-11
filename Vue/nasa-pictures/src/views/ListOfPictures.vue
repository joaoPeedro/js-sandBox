<template>
  <div>
    <h1>Mars Rover Photos</h1>
    <p>list of pictures : https://api.nasa.gov/</p>
    <section class='main-content'>
        <div v-if="error">{{error}}</div>
		<div v-if="data.photos">
            <div v-for='photo in data.photos' :key='photo.id'>
        <Picture :photo='photo'/>
                
            </div>
        </div>
		<div v-else>loading...</div>
    </section>
  </div>
</template>

<script>
import Picture from '@/components/Picture.vue'
import { getData } from '@/composables/getData'

export default {
    name: 'ListofPictures',
    components: {
        Picture
    },
    setup() {

        let page = 1
        const apiUrl = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${page}&api_key=DEMO_KEY`
        const {load, data, error} = getData({url: apiUrl})

        load()

        console.log(data.value)

        return {page, data, error}
    }
}
</script>

<style>
    .main-content{
        max-width: 860px;
        display: flex;
        flex-flow: column;
        margin: auto;
    }
</style>