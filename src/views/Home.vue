<template>
  <Carousel :autoplay="7000" :wrap-around="true">
    <Slide v-for="(Item, i) in slides" :key="i">
        <img :src="Item.src" v-bind:style="{width: myWidth}"/>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
</template>

<script>
import { defineComponent } from 'vue'
import { Carousel, Pagination, Slide } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent({
    
 data () {
    return {
        myWidth: (window.innerWidth) + 'px',
        slides: [
            {
            src: require('@/assets/Home/home_slides_1.jpg'),
            },
            {
            src: require('@/assets/Home/home_slides_2.jpg'),
            }
        ]
    }
  },
  mounted () {
    window.onresize = function windowResize () {
    // 通過捕獲系統的onresize事件觸發我們需要執行的事件
    this.myWidth = (window.innerWidth - 100) + 'px';
  }},
  methods:{
    // getURL() {
    //     return (this.imgPath)
  },
  name: 'Home',
  components: {
    Carousel,
    Slide,
    Pagination,
  }
});
</script>
