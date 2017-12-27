<template>
  <div class="productDetail">
    <header class="col-xs-12">
      <div :class="{header:!searchShow,header1:searchShow}" class="col-xs-1 col-md-1 col-lg-1 logo">
        <img src="../../static/images/logo.png" alt="logo" class="col-xs-6  col-xs-offset-6">
      </div>
      <div class="title" :class="{header:!searchShow,header1:searchShow}">{{title}}</div>
      <div :class="{header:searchShow,header1:!searchShow}" class="searchInput col-xs-9 col-md-10 col-lg-11">
        <div class="closeIcon col-xs-2 col-md-2 col-lg-1 col-sm-2" @click="close">
          <div class="col-xs-10 col-md-6 col-sm-8 closeBg">
            <div class="closeX">
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <input type="text" placeholder="请输入搜索内容" class="searchContent col-xs-12">
      </div>
      <div class="search col-xs-3 col-sm-2 col-md-2 col-lg-1">
        <div class="searchIcon col-xs-6 col-sm-6">
          <img src="../../static/images/search.png" alt="搜索" class="" @click="search">
        </div>
        <div class="nav col-xs-6 " @click="nav" :class="{navActive:navActive}">
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
    <section class="col-xs-12 kv">
      <div class="kv1">

      </div>
      <img src="../../static/images/kvMobile.jpg" alt="" class="kvMobile">
      <!--<img src="../../static/images/KV.jpg" alt="" class="kvImg">-->
      <!--跳转链接-->
      <ul class="linkIcon">
        <li v-for="(item,index) in imgArr" v-if="imgArr" @click="weiboShare(index,2)">
          <img :src="item.url" alt="" @mouseover="item.hover($event)" @mouseout="item.mouseout($event)"
               @click="share(index)">
          <div v-if="index == 1" class="Mobile" :class="{weChat:mobile,Mobile1:!mobile}">
            <img src="" alt="" class="qrCode">
            <div class="triangle"></div>
          </div>
          <ul v-if="index == 2" class="share">
            <li v-for="(item,index) in icon" v-if="icon" :class="{active:activeIcon}" @click="weiboShare(index,1)">
              <img :src="item.url" alt="" @mouseover="item.hover($event)" @mouseout="item.mouseout($event)">
              <div v-if="index == 1" class="Mobile " :class="{weChat:wexin,Mobile1:!wexin}">
                <img src="" alt="" class="qrCode">
                <div class="triangle"></div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <ul class="look col-xs-offset-1">
        <li><a href="javascript:;">点击查看</a></li>
      </ul>
      <!--左右跳转链接-->
      <div class="page">
        <img v-for="item in pages" v-if="pages" :src="item.url" alt="" @mouseover="item.hover($event)"
             @mouseout="item.mouseout($event)">
        <div class="previous" v-show="previous">Previous
          <div class="arrows"></div>
        </div>
        <div class="next" v-show="next">Next
          <div class="arrows1"></div>
        </div>
      </div>
      <div class="page2 col-xs-offset-9 col-xs-3">
        <div class="col-xs-4">
          <img src="../../static/images/pre.png" alt="">
        </div>
        <div class="col-xs-4">
          <img src="../../static/images/next.png" alt="">
        </div>
      </div>
    </section>
    <!--按钮-->
    <section class="category col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2">
      <ul class="button">
        <li><a href="javascript:;">html</a></li>
        <li><a href="javascript:;">css</a></li>
        <li><a href="javascript:;">javascript</a></li>
        <li><a href="javascript:;">Node.js</a></li>
        <li><a href="javascript:;">Canon</a></li>
      </ul>
      <div class="text">
        <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
        <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测</p>
        <p>测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试测试</p>
      </div>
    </section>
    <section class="casedemo col-sm-12 col-xs-10 col-xs-offset-1 col-sm-offset-0">
      <img src="../../static/images/casedemo-1.jpg" alt="" class="casedemo1">
      <img src="../../static/images/kvMobile.jpg" alt="" class="casedemo2">
    </section>
  </div>
</template>

<script>
  export default {
    name: 'productDetail',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        title: '佳能购机送花',
        searchShow: false,
        imgArr: [
          {
            url: 'static/images/pclink.png',
            isHover: false,
            hover: (e) => {e.target.src = 'static/images/pclink-over.png';},
            mouseout: (e) => {e.target.src = 'static/images/pclink.png';},
          },
          {
            url: 'static/images/mobilelink.png',
            isHover: false,
            hover: (e) => {e.target.src = 'static/images/mobilelink-over.png';},
            mouseout: (e) => {e.target.src = 'static/images/mobilelink.png';},
          },
          {
            url: 'static/images/share.png',
            isHover: false,
            hover: (e) => {e.target.src = 'static/images/share-over.png';},
            mouseout: (e) => {e.target.src = 'static/images/share.png';},
          },
        ],
        icon: [
          {
            url: 'static/images/weibo.png',
            isHover: false,
            hover: (e) => {e.target.src = 'static/images/weibo-over.png';},
            mouseout: (e) => {e.target.src = 'static/images/weibo.png';},
          },
          {
            url: 'static/images/weixin.png',
            isHover: false,
            hover: (e) => {e.target.src = 'static/images/weixin-over.png';},
            mouseout: (e) => {e.target.src = 'static/images/weixin.png';},
          },
        ],
        activeIcon: false,
        previous: false,
        next: false,
        pages: [
          {
            url: 'static/images/pre.png',
            isHover: false,
            hover: (e) => {
              e.target.src = 'static/images/pre-over.png';
              this.previous = true;
            },
            mouseout: (e) => {
              e.target.src = 'static/images/pre.png';
              this.previous = false;
            },
          },
          {
            url: 'static/images/next.png',
            isHover: false,
            hover: (e) => {
              e.target.src = 'static/images/next-over.png';
              this.next = true;
            },
            mouseout: (e) => {
              e.target.src = 'static/images/next.png';
              this.next = false;
            },
          },
        ],
        navActive: false,
        wexin: false,
        mobile:false
      };
    },
    mounted() {
      this.shareWX();
    },
    methods: {
      //分享点击事件
      share: function (i) {
        if (i == 2) {
          this.activeIcon = !this.activeIcon;
          event.stopPropagation();
        }

      },
      search: function () {
        this.searchShow = !this.searchShow;
      },
      close: function () {
        this.searchShow = !this.searchShow;
      },
      //生成二维码
      shareWX: function () {
        this.$axios.get('http://test.tron-m.com/api/qr/json.do?text=' + encodeURIComponent('http://test.tron-m.com/CanonMobilePro/')).then((response) => {
          $('.qrCode').attr('src', 'data:img/png;base64,' + response.data.msg);
        }, (error) => {
          console.log(error);
        });
      },
      weiboShare: function (i,type) {  //3个参数：1要分享的内容，2分享的地址，3appkey
        if (i == 0) {
          let txtVal = '佳能圣诞';
          let url = 'http://www.canon.com.cn/special/lifestyle';
          window.open('http://v.t.sina.com.cn/share/share.php?appkey=&title=' + encodeURIComponent(txtVal) + '&url=' + encodeURIComponent(url) + '&pic=http://test.tron-m.com/superzhe/shengdan/images/link-1.jpg');
        }
        if (i == 1 && type == 1) {
          this.wexin = !this.wexin;
        }
        if(i == 1 && type == 2){
          this.mobile = !this.mobile
        }
      },
      nav: function () {
        this.navActive = !this.navActive;
      },
    },
  };
</script>
<style lang="scss">
  .productDetail {
    max-width: 1920px;
    header {
      position: relative;
      height: 90px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid #cccccc;
      .title {
        font-size: 36px;
        font-weight: bold;
        position: absolute;
        letter-spacing: 4px;
        top: 0;
        width: 100%;
        text-align: center;
        line-height: 90px;
        z-index: -1 !important;
      }
      .searchIcon {
        cursor: pointer;
        text-align: center;
      }
      .closeIcon {
        cursor: pointer;
        position: absolute;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 9;
        .closeBg {
          height: 100%;
          background-color: #000;
          .closeX{
            width: 100%;
            position: absolute;
            top: 50%;
            margin-top: -4px !important;
            margin-left: 2px;
            span{
              display: block;
              background-color: #fff;
              width: 40%;
              height: 4px;
              margin: 0 auto;
              border-radius: 36px;
            }
            span:nth-child(1) {
              transform-origin: 50% 50%;
              transform: rotate(-45deg) translateX(-2.5px);
              -webkit-transition: all 0.5s ease-in-out;
              transition: all 0.5s ease-in-out;
            }
            span:nth-child(2) {
              transform-origin: 50% 50%;
              transform: rotate(45deg) translateX(-2.5px);
              -webkit-transition: all 0.5s ease-in-out;
              transition: all 0.5s ease-in-out;
            }
          }
        }
      }
      .searchInput {
        position: relative;
        height: 100%;
        font-size: 16px;
        z-index: -1;
      }
      .search {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        .nav {
          background-color: #49c5b6;
          height: 100%;
          position: relative;
          cursor: pointer;
          div {
            width: 100%;
            position: absolute;
            top: 50%;
            margin-top: -12px;
            span {
              display: block;
              background-color: #fff;
              width: 40%;
              height: 4px;
              margin: 0 auto;
              border-radius: 36px;
            }
            span:nth-child(2) {
              margin: 6px auto 6px auto;
            }
          }

        }
      }
    }
    .searchContent {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      padding: 0 20px;
      border: 0;
      background-color: transparent;
      font-size: 13px;
      text-transform: uppercase;
      line-height: normal;
      text-align: right;
    }
    .kv {
      position: relative;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      /*height: 500px;*/
      width: 100%;
      /*min-width: 750px;*/
      .kv1 {
        margin: 0 auto;
        height: 500px;
        background: url("../../static/images/KV.jpg") no-repeat;
        /*background-size: cover;*/
        background-position: top;
      }
      .kvMobile {
        display: none;
        width: 100%;
      }
      .linkIcon {
        position: absolute;
        left: 80px;
        bottom: 45px;
        li {
          float: left;
          margin-left: 15px;
          position: relative;
          img {
            cursor: pointer;
          }
          .Mobile {
            background-color: #49c5b6;
            width: 70px;
            height: 70px;
            position: absolute;
            top: -80px;
            left: -17px;
            .qrCode {
              width: 60px;
              height: 60px;
              margin: 5px 5px;
            }
            .triangle {
              width: 8px;
              height: 8px;
              background-color: #49c5b6;
              transform: rotate(45deg);
              position: absolute;
              bottom: -4px;
              left: 29px;
            }
          }
          .share {
            position: absolute;
            right: -100px;
            top: 0;
            -webkit-transition: all 1.5s ease-in-out;
            transition: all 1.5s ease-in-out;
            li {
              margin-left: 15px;
              opacity: 0;
              -webkit-transform: scale(0.5) rotate(-45deg);
              transform: scale(0.5) rotate(-45deg);
              -webkit-transition: all 0.2s ease-in-out;
              transition: all 0.2s ease-in-out;
            }
            li:nth-child(1) {
              -webkit-transition-delay: 0.2s;
              transition-delay: 0.2s;
            }
            li:nth-child(2) {
              -webkit-transition-delay: 0.4s;
              transition-delay: 0.4s;
            }
            .active {
              opacity: 1;
              -webkit-transform: scale(1) rotate(0deg);
              transform: scale(1) rotate(0deg);
              -webkit-transition: all 0.4s ease-in-out;
              transition: all 0.4s ease-in-out;
            }
          }
        }
      }
      .page {
        position: absolute;
        right: 80px;
        bottom: 45px;
        img:nth-child(1) {
          margin-right: 20px;
        }
        img {
          cursor: pointer;
        }
        .previous {
          background-color: #49c5b6;
          padding: 5px 10px;
          color: #fff;
          letter-spacing: 1px;
          position: absolute;
          top: -36px;
          left: -20px;
          .arrows {
            width: 12px;
            height: 12px;
            background-color: #49c5b6;
            transform: rotate(45deg);
            position: absolute;
            bottom: -4px;
            left: 29px;
          }
        }
        .next {
          background-color: #49c5b6;
          padding: 5px 10px;
          color: #fff;
          letter-spacing: 1px;
          position: absolute;
          top: -36px;
          right: -8px;
          .arrows1 {
            width: 12px;
            height: 12px;
            background-color: #49c5b6;
            transform: rotate(45deg);
            position: absolute;
            bottom: -4px;
            left: 18px;
          }
        }
      }
      .page2 {
        display: none;
        position: absolute;
        /*right: 80px;*/
        bottom: 45px;
        div:nth-child(2) {
          margin-left: 0.6rem;
        }
        img {
          cursor: pointer;
          height: 0.8rem;
          width: 0.8rem;
        }
      }
    }
    .kv:after {
      clear: both;
      visibility: hidden;
      content: '';
      display: block;
    }
    .category {
      margin-top: 40px;
      margin-bottom: 40px;;
      text-align: center;
      .button {
        margin: 0 auto;
        padding-bottom: 36px;
        li {
          position: relative;
          display: inline-block;
          /*float: left;*/
          margin: 0 5px 12px 0;
          font-size: 14px;
          a {
            display: block;
            height: 34px;
            padding: 0 20px;
            line-height: 34px;
            color: #202121;
            border: 1px solid #202121;
            border-radius: 36px;
            overflow: hidden;
            -webkit-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }
          a:hover {
            color: #49c5b6;
            border-color: #49c5b6;
            /*text-decoration: none;*/
            /*-webkit-transition: color 0.3s ease-in-out;*/
            /*transition: color 0.3s ease-in-out;*/
          }
        }
      }
      p {
        font-size: 16px;
        letter-spacing: 1px;
        line-height: 30px;
      }
    }
    .casedemo {
      img {
        width: 100%;
        padding: 0 70px;
        margin-bottom: 160px;
      }
    }
    .navActive {
      div {
        margin-top: -4px !important;
        margin-left: 2px;
        span:nth-child(1) {
          transform-origin: 50% 50%;
          transform: rotate(-45deg) translateX(-2px);
          -webkit-transition: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
        }
        span:nth-child(2) {
          display: none !important;
        }
        span:nth-child(3) {
          transform-origin: 50% 50%;
          transform: rotate(45deg) translateX(-2.5px);
          -webkit-transition: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
        }
      }

    }
    .weChat {
      opacity: 1;
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
    }
    .Mobile1 {
      opacity: 0;
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;
    }
    .header {
      opacity: 1;
      z-index: 999 !important;
      -webkit-transition: all 0.8s ease-in-out;
      transition: all 0.8s ease-in-out;

    }
    .header1 {
      opacity: 0;
      -webkit-transition: all 0.5s ease-in-out;
      transition: all 0.5s ease-in-out;

    }
    .logo {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      z-index: 999;
    }
    .look {
      position: absolute;
      left: 80px;
      bottom: 45px;
      display: none;
      li {
        a {
          display: block;
          width: 90px;
          height: 0.8rem !important;
          line-height: 0.8rem;
          text-align: center;
          font-size: 14px;
          color: #fff;
          letter-spacing: 2px;
          border: 1px solid #fff;
          border-radius: 36px;
        }
      }
    }
    .casedemo2 {
      display: none;
    }
  }
  @media screen and (min-width: 750px) and (max-width: 1200px) {

  }
  @media screen and  (max-width: 1200px){
    .logo{
      img{
        width: 40px;}
    }
  }
  @media screen and (max-width: 750px) {
    .casedemo {
      img {
        height: 100%;
        padding: 0 !important;
        margin-bottom: 160px;
      }
    }
    .title {
      display: none;
    }
    .casedemo1, .linkIcon {
      display: none;
    }
    .casedemo2, .look {
      display: block !important;
    }
    .kv1, .page {
      display: none !important;
    }
    .page2, .kvMobile {
      display: block !important;
    }
    .page2 {
      left: 0rem !important;
      bottom: 0.78125rem !important;
    }
    header {
      height: 60px !important;
    }
    .logo {
      width: 40px;
    }
    .productDetail .category {
      margin-bottom: 30px;
      margin-top: 30px;
    }
    .button {
      padding-bottom: 0 !important;
      text-align: left;
    }
    .text {
      text-align: left
    }
    .productDetail .look {
      left: 0rem;
      bottom: 0.78125rem;
    }
    .searchIcon {
      img {
        height: 25px;
      }
    }
  }
</style>
