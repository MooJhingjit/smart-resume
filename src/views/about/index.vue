<template>
  <section class="about-me">
    <h5 class="title">About me</h5>
    <div class="columns">
      <div class="column col-9 col-sm-12">
        <div class="postit">
          <p>
            Hi my name is pokkrong, you can call me "moo" I have experience in programming solutions that focus on PHP, JavaScript
            and relationnal database design. Accomplished computer programmer with 2 years' experience in PHP, JavaScript Programmer knowledge
            of programming languates for development.
          </p>
          <div class="cornershadow"></div>
        </div>
      </div>
    </div>
    <!-- <p>
      
    </p> -->
  </section>
</template>

<script>
export default {
  name: 'AboutMe',
  computed: {
  },
  props: {
    // isShowMenu: {
    //   type: Boolean,
    //   required: true
    // }
  },
  data () {
    return {
      local: {}
    }
  },
  created () {},
  methods: {},
  watch: {
    // isShowMenu: {
    //   handler: function () {
    //     this.local.isShowMenu = this.isShowMenu
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/spectre.css/src/_variables';

</style>

