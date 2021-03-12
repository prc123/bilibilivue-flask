import Vue from 'vue'
import Router from 'vue-router'
import Index from 'components/index/index'
import Home from 'components/home/home'
import ChannelView from 'components/channel-view/channel-view'
Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {
      path: '/',
      component: Index,
      redirect: 'Home',
      children: [
        {
          path: 'Home',
          component: Home
        },
        {
          path: 'channel',
          component: ChannelView,
          // children: [
          //   {
          //     path: ':sindex',
          //     component: ChannelPage
          //   }
          // ]
        }

       ]
    // },
    // {
    //   name: 'video',
    //   path: '/video/:bvid',
    //   component: Video
    // },
    // {
    //   name: 'search',
    //   path: '/search',
    //   component: Search,
    //   children: [
    //     {
    //       path: ':keyword',
    //       component: SearchResult
    //     }
    //   ]
    // },
    // {
    //   name: 'rank',
    //   path: '/rank',
    //   component: Rank,
    //   children: [
    //     {
    //       path: ':index',
    //       component: VideoList
    //     }
     // ]
     }
  ]
})
