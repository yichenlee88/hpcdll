<template>
  <Carousel :autoplay="7000" :wrap-around="true">
    <Slide v-for="(Item, i) in slides" :key="i">
        <img :src="Item.src" v-bind:style="{width: myWidth}"/>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
  </Carousel>
  <div class="row featurette">
    <div class="col-md-5 order-md-3">
      <h2 class="featurette-heading">
        高效能運算
      </h2>
      <p class="lead">本研究室採用NVIDIA GPU進行平行加速運算，並搭建伺服器機櫃以利於資料及建置。透過應用程式平行化機制及其推出的CUDA技術，能在有限或較短的時間內可以完成複雜或大量運算工作以大幅提高應用程式的處理能力。
        本研究室與NVIDIA合作，成立 NVIDIA-Taipei Tech Embedded GPU Joint Lab.，並運用NVIDIA TX1 GPU Embedded System進行各種嵌入式裝置應用，如擴增實境沙盤等。 </p>
    </div>
    <div class="col-md-6 order-md-1">
      <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="350" height="350" :src="require('@/assets/Home/highComputing.png')" preserveAspectRatio="xMidYMid slice" focusable="false"/>
    </div>
  </div>
  <div class="row featurette">
    <div class="col-md-5 order-md-3">
      <h2 class="featurette-heading">
        深度學習
      </h2>
      <p class="lead">本研究室在深度學習領域頗有心得，舉凡如使用通過選取候選區域，並對相應區域進行卷積運算的Faster R-CNN，乃至基於單一迴歸的目標檢測方法YOLO，皆有實作。此外，結合過去本研究室已深厚耕耘的CUDA平行計算來進行硬體加速，
      在高維度的遙測影像分析上能達到實時(Real-time)的速度。目前已在遙測影像的船舶偵測領域中，以深度學習的方法榮獲國際期刊刊登其研究論文。</p>
    </div>
    <div class="col-md-6 order-md-1">
      <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="350" height="350" :src="require('@/assets/Home/deepLearning.png')" preserveAspectRatio="xMidYMid slice" focusable="false"/>
    </div>
  </div>
  <div class="row featurette">
    <div class="col-md-5 order-md-3">
      <h2 class="featurette-heading">
       遙測影像
      </h2>
      <p class="lead">本實驗室使用合成孔徑雷達(Synthetic Aperture Radar, SAR)影像來針對遙測技術進行研究。在地表環境和特定目標監測的應用上，SAR訊號已被證實具有高度偵測和識別能力。隨著高解析度的SAR影像硬體建置的能力提昇，可進一步對SAR影像進行前處理、
      SAR影像特徵萃取、SAR影像目標物辨識等其他研究項目。目前已發表不少期刊論文，如利用全波方法(Full-Wave Approach)模擬SAR影像的成像等。</p>
    </div>
    <div class="col-md-6 order-md-1">
      <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="350" height="350" :src="require('@/assets/Home/satellite.png')" preserveAspectRatio="xMidYMid slice" focusable="false"/>
    </div>
  </div>
  <div class="row featurette">
    <div class="col-md-5 order-md-3">
      <h2 class="featurette-heading">
       大數據
      </h2>
      <p class="lead">本研究室在大數據領域的研究主要聚焦於Apache所開源的Hadoop Ecosystem及其底下的軟體專案應用。另外，我們結合Hadoop、深度學習及高效能運算裝置GPU，
      藉由其分散式計算平台的特性，加速架構的運行，同時提升其穩定度。目前執行科技部計畫中之軟體定義資料中心(Software-Defined Data Center，簡稱SDDC)部分即使用Hadoop Ecosystem完成。</p>
    </div>
    <div class="col-md-6 order-md-1">
      <img class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="350" height="350" style="margin-top: 3rem" :src="require('@/assets/Home/hadoop.png')" preserveAspectRatio="xMidYMid slice" focusable="false"/>
    </div>
  </div>
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

<style>
.row{
  margin-bottom: 3rem;
}

.featurette-heading {
    margin-top: 2rem;
}

.lead{
    font-size: 1.25rem;
    font-weight: 300;
    margin-left: 1rem;
}

.p{
    margin-top: 0;
    margin-bottom: 1rem;
}

.text-muted{
    --bs-text-opacity: 1;
    color: #6c757d!important;
}
.p{
  display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
}
</style>