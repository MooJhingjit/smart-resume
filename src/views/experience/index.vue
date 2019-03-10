<template>
  <section class="experience">
    <h5 class="title">Experience</h5>
    <div class="columns">
      <div class="column col-9 col-sm-12">
        <div class="timeline">
          <div class="timeline-item" :key="index" v-for="(item, index) in local.experiences">
            <div class="timeline-left"><i class="timeline-icon icon-lg tooltip tooltip-right" :data-tooltip="item.title"></i></div>
            <div class="timeline-content">
              <div class="tile">
                <div class="tile-content">
                  <p class="tile-subtitle">{{item.title}} <span class="text-primary">{{item.companyName}}</span></p>
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
  name: 'Experience',
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
        experiences: [
          {
            title: 'June 2017 - Present',
            companyName: 'Dot Property Co., Ltd (Full stack Javascript Programmer)',
            lists: [
              { title: 'xxxxxxxxxxxxxxxxxxxxxxxxxx'},
              { title: 'xxxxxxxxxxxxxxxxxxxxxxxxxx'}
            ] 
          },
          {
            title: 'November 2016 - April 2017',
            companyName: 'Military service',
            lists: []
          },
          {
            title: 'July 2016 - October 2016',
            companyName: 'Smart Solution and Service Co., Ltd. (Javascript Programmer)',
            lists: [
              { title: 'Receiver requirement for designed and developed web application from user.'},
              { title: 'Designed relational databaseschema.'},
              { title: 'Research, design, create, update and presentation web design layouts.'},
              { title: 'Developed, coded, tested and debugged web application using latest web technologies'},
              { title: 'Maintain and support web application'},
              { title: 'train and development of other staffs.'}
            ]
          },
          {
            title: 'May 2015 - June 2016',
            companyName: 'Glad Enterprises Co., Ltd. (PHP Programmer)',
            lists: [
              { title: 'Development of website functionality using latest web technologies.'},
              { title: 'Create and maintain back office system for the convenience of all staff.'},
              { title: 'Convert design layouts to HTML, CSS and templates.'},
              { title: 'Develop documentation and other training resources.'},
              { title: 'Assist with the training and development of other staffs.'},
              { title: 'Hardware maintenance.'}
            ]
          },
          {
            title: 'March 2014 - May 2014',
            companyName: 'Phuket solution co., Ltd. (Training as PHP Programmer)',
            lists: [
              { title: 'Work with the web designer and project manager and stay on target.'},
              { title: 'Assist in the designing, development, and deployment of projects.'},
              { title: 'Create and maintain software documentation.'}
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

