<template>
  <div id="app">
    <div class="container">
      <div class="columns">
        <header-wrapper :isShowMenu="local.isShowMenu" :test="'test'"/>
        <div class="column col-xs-12 col-md-12 col-sm-12 col-9 content-side">
          <!-- <router-link to="/">Home</router-link> -->
          <!-- <router-view/> -->
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
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
        isShowMenu: false
      }
    }
  },
  created () {
  },
  methods: {
    showMenu () {
      this.local.isShowMenu = !this.local.isShowMenu
    }
  }
}
</script>

<style lang="scss">
@import 'node_modules/spectre.css/src/spectre';
@import 'node_modules/spectre.css/src/spectre-exp';
#app{
  background-color: #e4e4e4;
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
      padding: 15px;
      top: 260px;
       @media only screen and (min-width: $size-md) {
        position: relative;
        top: 0px;
      }
      
      z-index: 1;
    }
  }
  .menu-btn{
    @media only screen and (min-width: $size-md) { 
      display: none;
    }
    position: absolute;
    bottom: 10px;
    right: 10px;
    z-index: 5;
    width: 40px;
    height: 40px;
  }
}
</style>

