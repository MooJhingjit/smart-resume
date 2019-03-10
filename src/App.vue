<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <header-wrapper :isShowMenu="local.isShowMenu" :test="'test'"/>
        <div class="column col-xs-12 col-md-12 col-sm-12 col-9 content-side">
          <div class="content-bg"></div>
          <!-- <router-link to="/">Home</router-link> -->
          <transition :name="local.transitionName" mode="out-in">
            <router-view/>
          </transition>
        </div>
      </div>
    </div>
    <div class="menu-btn bg-primary s-circle flex-item-center" @click="showMenu()">
      <i class="fas fa-bars"></i>
    </div>
  </div>
</template>

<script>
import headerWrapper from '@Components/header'
export default {
  components: {
    headerWrapper
  },
  name: 'App',
  data () {
    return {
      local: {
        isShowMenu: false,
        transitionName: 'slide',
        currentRoute: {
          to: null,
          from: null,
          index: 0
        }
      }
    }
  },
  created () {
  },
  methods: {
    showMenu () {
      this.local.isShowMenu = !this.local.isShowMenu
    },
    isLargeNumber (element) {
      return element.name === this.local.currentRoute.to
    }
  },
  watch: {
    '$route' (to, from) {
      this.local.isShowMenu = false
      this.local.currentRoute.to = to.name
      this.local.currentRoute.from = from.name
      this.local.transitionName = (this.local.currentRoute.index < this.$router.options.routes.findIndex(this.isLargeNumber)) ? 'slide-left' : 'slide-right'
      this.local.currentRoute.index = this.$router.options.routes.findIndex(this.isLargeNumber)

    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/spectre.css/src/spectre';
@import 'node_modules/spectre.css/src/spectre-exp';
body{
  background: #fefcea; /* Old browsers */
  background: -moz-radial-gradient(center, ellipse cover, #fefcea 0%, #d3d3d3 100%); /* FF3.6-15 */
  background: -webkit-radial-gradient(center, ellipse cover, #fefcea 0%,#d3d3d3 100%); /* Chrome10-25,Safari5.1-6 */
  background: radial-gradient(ellipse at center, #fefcea 0%,#d3d3d3 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
}
#app{
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#fefcea+0,d3d3d3+100 */

filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#fefcea', endColorstr='#d3d3d3',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  width: 100vw;
  .flex-item-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .d-flex-column{
    flex-direction: column;
  }
  &>.container{
    position: relative;
    z-index: 1;
    height: 100vh;
    &>.columns{
      height: 100%;
      display: flex;
    }
    .content-side{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      
      height: initial;
      section{
        padding: 30px;
        width: 100%;
        &>.title{
          text-shadow: 0px 1px 0px #BCBCBC;
          font-size: 1.4em;
        }
      }
      position: absolute;
      top: 155px;
       @media only screen and (min-width: $size-md) {
        position: relative;
        top: 0px;
        left: 300px;
        width: 100%;
      }
      
      z-index: 1;
    }
  }
  .menu-btn{
    @media only screen and (min-width: $size-md) { 
      display: none;
    }
    position: fixed;
    bottom: 10px;
    right: 10px;
    z-index: 5;
    width: 40px;
    height: 40px;
  }
  .postit {
    line-height: 1;
    text-align: center;
    width: -webkit-fill-available;
    height: 100%;
    // margin: 25px;
    padding: 15px;
    // min-height: 245px;
    // max-height: 245px;
    // padding-top: 35px;
    text-align: left;
    position: relative;
    border: 1px solid #E8E8E8;
    border-top: 10px solid #fdfd86!important;
    font-family: 'Reenie Beanie'!important;
    // font-size: 22px;
    border-bottom-right-radius: 60px 5px;
    display: inline-block;
    background: #ffff88;
    background: -moz-linear-gradient(-45deg, #ffff88 81%, #ffff88 82%, #ffff88 82%, #ffffc6 100%);
    background: -webkit-gradient(linear, left top, right bottom, color-stop(81%,#ffff88), color-stop(82%,#ffff88), color-stop(82%,#ffff88), color-stop(100%,#ffffc6));
    background: -webkit-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%);
    background: -o-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%);
    background: -ms-linear-gradient(-45deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%);
    background: linear-gradient(135deg, #ffff88 81%,#ffff88 82%,#ffff88 82%,#ffffc6 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 );
  }
  .postit:after {
    content: "";
    position: absolute;
    z-index: -1;
    right: -0px;
    bottom: 20px;
    width: 200px;
    height: 25px;
    background: rgba(0, 0, 0, 0.2);
    box-shadow: 2px 15px 5px rgba(0, 0, 0, 0.40);
    -moz-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    -webkit-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    -o-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    -ms-transform: matrix(-1, -0.1, 0, 1, 0, 0);
    transform: matrix(-1, -0.1, 0, 1, 0, 0);
  }
  .postit{
    .title{
      text-align: center;
      font-size: 1.4em;
      font-weight: bold;
    }
    p{
      text-indent: 15px;
      line-height: 35px;
      font-size: 1.1em;
    }
  }

  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition-duration: 0.3s;
    transition-property: height, opacity, transform;
    transition-timing-function: cubic-bezier(0.4, 1, 1, 1);
    overflow: hidden;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0.7;
    transform: translateY(100vh);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0.7;
    transform: translateY(-100vh);
  }
}
</style>

