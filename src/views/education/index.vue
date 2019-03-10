<template>
  <section class="education">
    <h5 class="title">Education</h5>
    <div class="columns">
      <div class="column col-9 col-sm-12">
        <div class="timeline">
          <div class="timeline-item" :key="index" v-for="(item, index) in local.educations">
            <div class="timeline-left"><i class="timeline-icon icon-lg tooltip" :data-tooltip="item.title"></i></div>
            <div class="timeline-content">
              <div class="tile">
                <div class="tile-content">
                  <p class="tile-subtitle">{{item.title}}</p>
                  <p class="tile-title" :key="listIndex" v-for="(list, listIndex) in item.lists">{{list.title}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Education',
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
      local: {
        educations: [
          {
            title: '2011 - 2015',
            lists: [
              { title: 'Bachelor of Science (B. Sc.) in Computer Science, Phuket Rajabhat University'}
            ] 
          },
          {
            title: '2008 - 2011',
            lists: [
              { title: 'Vocational Certificate in Business Computer'}
            ]
          }
        ]
      }
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
</style>

