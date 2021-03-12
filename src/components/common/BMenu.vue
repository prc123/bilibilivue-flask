<template>
  <div class="menu">
    <div class="menu-wrapper">
      <ul class="nav-menu">
        <BMenuItem v-for="(i, index) in regionTags" :item="i" :key="index" ></BMenuItem>
		 <!-- <li v-for="(item, index) in regionTags" :item=item :key="index">
                  <span>{{item.name}}</span>
                </li> -->
      </ul>
      <div class="menu-r">
        <a
          href=""
          target="_blank"
          href="http://search.bilibili.com/all?keyword=%E8%B9%A6%E8%BF%AA"
          title="蹦迪"
          class="random-p"
        >
          <div class="random-p-movie">
            <img
              src="//i2.hdslb.com/bfs/active/84f323e3a77a6eafee656f832847603751f3857d.gif"
              alt="蹦迪"
            />
          </div>
        </a>
        <a
          id="mobile_p"
          class="mobile-p"
          href="//app.bilibili.com"
          target="_blank"
          @mouseover="showMobileLink = true"
          @mouseout="showMobileLink = false"
        >
          <transition name="fade">
            <div class="mobile-p-box" v-show="showMobileLink">
              <div class="mobile-p-qrcode"></div>
            </div>
          </transition>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import BMenuItem from "components/common/BMenuItem";
import { ERR_OK, regionTags } from 'api/config'
export default {
  data() {
    return {
      showMobileLink: false,
      regionTags,
    };
  },
 	methods:{
	changeContent (index) {
		console.log(index)
      if (index === 0) {
        this.$router.push({
          path: '/home'
        })
      } else {
        this.$router.push({
          path: `/channel/`
        })
      }
    },
	},

  	components: {
		BMenuItem
	}
//   created() {
// console,log(regionTags)
//   },
//   methods: { _getclassify() {

//   } },
};
</script>

<style lang="stylus" scoped>
.menu {
  width: 100%;
  background: #fff;

  .menu-wrapper {
    position: relative;
    width: 980px;
    margin: 0 auto;
    padding: 6px 0;
    z-index: 100;

    .nav-menu {
      zoom: 1;
      display: inline-block;
      vertical-align: top;
	  width: 860px;
      height: 50px;
    }

    .menu-r {
      position: absolute;
      right: 0px;
      top: 0px;
      height: 50px;
      padding: 6px 0;

      .random-p {
        width: 80px;
        height: 44px;
        margin: 3px 12px;
        display: inline-block;
        vertical-align: top;
        overflow: hidden;

        img {
          display: block;
          max-width: 100%;
          height: 100%;
          margin: 0 auto;
        }
      }

      .mobile-p {
        display: inline-block;
        vertical-align: top;
        margin: 3px 0;
        width: 58px;
        height: 44px;
        background: url('../../assets/images/app-link.png') center center no-repeat;
        position: relative;
        overflow: visible;

        .mobile-p-box {
          position: absolute;
          overflow: hidden;
          top: 44px;
          width: 259px;
          height: 174px;
          right: -20px;
          background: url('../../assets/images/app-box.png') center center no-repeat;
          transition: 0.2s;
          transition-property: opacity;

          &.fade-enter-active, &.fade-leave {
            opacity: 1;
          }

          &.fade-enter, &.fade-leave-active {
            opacity: 0;
          }

          .mobile-p-qrcode {
            position: absolute;
            top: 30px;
            width: 100px;
            height: 100px;
            left: 80px;
            background: url('../../assets/images/app-qrcode.png') center center no-repeat;
          }
        }
      }
    }
  }
}
</style>