<template>
  <div :class="['column col-xs-12 col-md-12 col-sm-12 col-3 bg-dark menu-side', {'full': local.isShowMenu}]">
    <div class="columns d-flex d-flex-column">
      <div class="profile column col-12 text-center">
        <div class="img-info">
          <img alt="" class="s-circle width-full avatar-before-user-status" src="https://instagram.fbkk22-2.fna.fbcdn.net/vp/a7e8fe06ad23cd01a4b8884b522dcdcf/5D212C7B/t51.2885-15/sh0.08/e35/s640x640/34299015_1898652000433661_4794453429676146688_n.jpg?_nc_ht=instagram.fbkk22-2.fna.fbcdn.net">
        </div>
        <div class="name-info">
          <p class="h5">Pokkrong Jhingjit</p>
          <p class="h6">Full stack developer</p>
        </div>
      </div>
      <div class="profile-detail column col-12 d-flex d-flex-column">
        <div class="menu-list">
          <dl class="list">
            <router-link tag="dd" active-class="active" :to="{ name: item.name } " :key="index" v-for="(item, index) in local.menuLists">
              <i :class="item.icon"></i> {{item.title}}
            </router-link>
          </dl>
        </div>
        <div class="footer text-center d-flex d-flex-column text-gray">
          <div class="contact flex-item-center d-flex-column">
            <div class="columns contact-result">
              <p>moo.jhingjit@gmail.com</p>
            </div>
            <div class="columns">
              <div class="column col-auto"><img class="s-circle" alt="mail" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAN4AAADkCAMAAADAWGpOAAAAkFBMVEX/////Syb/SSL/0Mn/PAT/Rh3/Wz3/e2b/NwD/NgD/SCH/RBr/7+z/Qhb//fz/4dz/US7/sqf/Pw7/9vX/nY7/xLv/Z03/2NL/c1z/9PL/pZf/m4z/6eX/bVT/x7//49//ZEj/vrT/jHr/hXL/k4P/gGv/UCz/XUD/dV//JwD/raH/saX/uK7/iHb/Vzb/zcZjHd4QAAAE3ElEQVR4nO2c61riMBRFk9JqekNMFbyAiuBlkMH3f7spjGgpOW0KTRNm9vrtl80ypaQ5p2EMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+L/oP88lT1mXiYjhfjruJyuaxnwbx4LabuDV3IoilmPQ6iJr6qcdzAp50kLbhSvBNYvjSNx11H27k1mmvHfndi69Enq4MXzLz7yjOo7gTv2JkMDD6lZ8WonK/qIOv+9wvRsYTg1GJ7/EdP2nc73nHjnN/YTAr3c3iUfpoLm3N75Id92Jjt5dM8DKef2Eqbc2sbMe5XJoKm8q9MO7Jkak4xl4UgcGNqbTneD+Ne8KY37nCLv/2mYobRqo4zzfkd6O048LU1/3MU+Z5oZHV0qR8H9vOnqm1GaGXX5+f7YdRdt3rcR4+tBzVH1J2NvS4uG41qf9E2lnR4+G0xaD+m+oebVOPi/b8srMKO0t6PGxrOZGtquxs6XFx2UrK7SqojLGlx0Ubq/lkUG1nT4+Lu6MzktcaO4t6x/uNozo7m3pcXB2VMI6Vy1pn9Li4PyJgnNbb2dXj/vzg8R+lhp1lvcP9LqTe+Hb1uP980OgjX3P4zvQ89QfyZwcMTtntXa+d6XlPA/WXRb40Hnsk1HbyphzRmV7wkhC3OnnecOgeYSfuRuXNsu70ztk4IPzeG438Sdqxnk09lgTqZYZssl/3QNnli1i7eizhar9Uvxpwvb89/Nfug1nXo/2GmsNOQ7VduHnAsq3HbolHmPRJqxywJObu6/HYuh75eK3lt6Tm7mtzw74ey4itn/itttr4Qc3dduvNAT1yays+q/FbUHP3vXHqgh657RpUV8Pv1HNX3PZ2Qo/2q2oQIe0KBm7okUWBigaKK8quWHJyRY/0oxpg7nXs3NFj7+qCXBQoGwzm+4XljV2pnO2OHukXK/zKLQ+EnUt6ymI4VzZQKJoCNnay/Jcu6Wl/6pn2/8EpPc1rTt0UoGxzcktPy4+wCyLFPdYxvZ0Wt6Lfz/2eaHlQ/0K6plf7e3bT6PffOT16NbL5YA1Xp+7pkWvJdQMMtbZZEc8WDuqxBbV7ck3MXXxGPfm6qEc+xxFFEtrOTT12ScyfkqpdCzf12CUxfw3tXNUr9V1X2VXuiLqqx6715k9W7/c6q8cedOavrhrhrh77DNW1g6Jd3RgO65F1rR+72kqgy3qsVz1/GnVcp/WqK+Y6VXi39ciqsqad63p0P4deh4jreuxCfX0Kvf4X5/XYo6pTTLf7zH09Va+Ydu/gCeixcblArd/Zegp6LPF2/Br07Z6EHksGPwVOL2zQdX0aeiwbbm+gsd/knY4T0WPswxMylb44b/RG8cno5b+Ay6vFZ8N3l09I7xCg1xLQax/otQT02gd6LQG99oFeS0CvfaDXEv+43lv0T+uVz2uxoydMHV80i53QM3UU26V0QM9bmUoaCwf00uNf/acYBvb1hLmT30bCul562HvHesxSy3peavIMxP7OgRUW9MwcqvVN8hpb1PPCdo9k2ieb/NTKu9ZLI4MH9m1ZShl43esFMpx3ctxwf/meCj8nNHYaYYHeL7EmnSw6O4uXZeNRL8fo4ZXbqIucx6TTc6IBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA4/gDN+5JLSQHKhcAAAAASUVORK5CYII="></div>
              <div class="column col-auto"><img class="s-circle" alt="phone" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK4p21RcqPvN5KfqQuw0WkHs0pEYCImZD-_BULdGpTyZW1xYBDVg"></div>
              <div class="column col-auto"><img class="s-circle" alt="line" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/LINE_logo.svg/768px-LINE_logo.svg.png"></div>
            </div>
          </div>
          <div class="address">
            <p>142 Two Pacific Place Building,</p>
            <p>24th Floor, Room 2403</p>
            <p>Sukhumvit Road, Khlong Toei, Bangkok 10110</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
  },
  props: {
    isShowMenu: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      local: {
        isShowMenu: false,
        menuLists: [
          {name: 'AboutMe', title: 'About me', icon: 'fas fa-address-book', isActive: false},
          {name: 'Education', title: 'Education', icon: 'fas fa-user-graduate', isActive: false},
          {name: 'WorkExperience', title: 'Work experience', icon: 'fas fa-user-tie', isActive: false},
          {name: 'Skill', title: 'Skills', icon: 'fas fa-thumbs-up', isActive: false},
          {name: 'Portfolio', title: 'Portfolio', icon: 'fas fa-tasks', isActive: false}
        ]
      }
    }
  },
  created () {
    this.local.isShowMenu = this.isShowMenu
  },
  methods: {},
  watch: {
    isShowMenu: {
      handler: function () {
        this.local.isShowMenu = this.isShowMenu
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'node_modules/spectre.css/src/_variables';
.menu-side.full{
  height: 100vh;
}
.menu-side{
  position: fixed;
  &>.columns{
    height: 100%;
  }
  @media only screen and (min-width: $size-md) { 
    height: 100vh;
    position: fixed;
    min-width: 300px;
    max-width: 300px;
  }
  transition: all 0.5s ease;
  z-index: 2;
  padding: 15px;
  height: 153px;
  overflow: hidden;
  .profile{
    flex: inherit;
    display: flex;
    flex-direction: row;
    align-items: center;
    // justify-content: center;
    .img-info{
      flex:0;
      height: 130px;
      width: 130px;
      img{
        width: inherit;
        height: inherit;
      }
    }
    .name-info{
      flex:1;
      display: flex;
      flex-direction: column;
      align-items: center;
      p{
        margin: 5px 0;
      }
    }
    @media only screen and (min-width: $size-md) {
      flex-direction: column;
    }
  }
  // @media only screen and (min-width: $size-md) {
  //   // max-height: unset;
  // }
  .profile-detail{
      overflow: scroll;
      margin-top: 15px;
      flex: 1;
      .menu-list{
        flex: 2;
        border-top: 1px solid $secondary-color-light;
        // flex: 3;
        .list{
          align-self: center;
          display: flex;
          flex-direction: column;
          @media only screen and (max-width: $size-md) { 
            text-align: center
          }
          i{
            font-size: 1.2em;
            margin-right: 10px;
          }
          dd{
            transition: all 0.3s ease;
            cursor: pointer;
            font-size: 1em;
            padding: 20px 0;
            color: $light-color;
            // text-align: center;
            margin: 0;
            height: 65px;
            &:hover{
              // margin-left: 5px;
              font-size: 1.2em;
            }
            a{
              text-decoration: none;
              color: $light-color !important;
            }
          }
          dd.router-link-exact-active{
            font-size: 1.2em;
            i{
              color: #ffff93;
            }
          }
          dd.router-link-exact-active:before{
            content: "\00BB";
            margin-right: 10px;
            font-size: 1em;
            color: #ffff93;
          }
          
        }
      }
      .footer{
        border-top: 1px solid $secondary-color-light;
        margin-top: 15px;
        flex: none;
        justify-content: center;
        .contact{
          margin: 15px 0;
          img{
            transition: all 0.5s ease;
            width: 30px;
            height: 30px;
            cursor: pointer;
            &:hover{
              transform: scale(1.2);
            }
          }
        }
        .address{
          p{
            margin:0;
            font-size: 0.8em;
          }
        }
      }

  }
}
</style>

