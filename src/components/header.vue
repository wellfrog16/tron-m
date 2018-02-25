<template>
  <div id="header">
    <div class="row">
      <header class="col-xs-12">
        <div class="col-xs-1 col-md-1 col-lg-1 logo" :class="{logoIe:isIe}">
          <router-link :to="{name:'productList'}">
            <img src="../../static/images/logo.png" alt="logo" class="col-xs-6  col-xs-offset-6"></router-link>
        </div>
        <div class="title">量子<span class="dian"></span>创睦互动案例库</div>
        <!--<div class="search col-xs-3 col-sm-2 col-md-2 col-lg-1 col-xs-offset-9 col-sm-offset-10 col-md-offset-10 col-lg-offset-11">-->
          <!--<div class="searchIcon col-xs-6 col-sm-6 logoIe" :class="{logoIe:isIe}">-->
            <!--<img src="../../static/images/useron.png" alt="搜索" class="" @click="search" @mouseover="userover($event)"-->
                 <!--@mouseout="useron($event)">-->
          <!--</div>-->
          <!--<div class="nav col-xs-6 " @click="nav" :class="{navActive:navActive}">-->
            <!--<div>-->
              <!--<span></span>-->
              <!--<span></span>-->
              <!--<span></span>-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      </header>
    </div>
  </div>
</template>
<script>
  import { bus } from '../assets/judge';

  export default {
    name: 'header',
    data() {
      return {
        title: '佳能购机送花',
        navActive: false,
        isIe:true
      };
    },
    mounted(){
      if(!this.isIE()){
        this.isIe = false;
      }
    },
    methods: {
      //登录
      userover: function (e) {
        e.target.src = 'static/images/userover.png';
      },
      useron: function (e) {
        e.target.src = 'static/images/useron.png';
      },
      search: function () {

      },
      nav: function () {
        this.navActive = !this.navActive;
      },
      isIE: function () { //ie?
        if (!!window.ActiveXObject || 'ActiveXObject' in window)
          return true;
        else
          return false;
      },
    },
    created() {
      bus.$on('change', (val) => {this.title = val;});
    },
  };
</script>

<style lang="scss">
  header {
    position: relative;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #cccccc;
    .dian{
      border: 3px solid;
      height: 5px;
      display: inline-block;
      border-radius: 50%;
      margin: 0 10px;
      margin-bottom: 8px;
    }
    .title {
      display: block;
      font-size: 36px;
      font-weight: bold;
      position: absolute;
      letter-spacing: 4px;
      top: 0;
      width: 100%;
      text-align: center;
      line-height: 90px;
      z-index:99;
    }
    .logoIe {
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      -webkit-transform: translateY(-50%); /* for Chrome || Safari */
      -moz-transform: translateY(-50%); /* for Firefox */
      -ms-transform: translateY(-50%); /* for IE */
      -o-transform: translateY(-50%);
    }
    .logo{
      position: absolute;
      top:50%;
      transform: translateY(-50%);
    }
    .search {
      height: 100%;
      /*display: flex;*/
      /*justify-content: center;*/
      /*align-items: center;*/
      z-index: 9999;
      .searchIcon {
        text-align: center
      }
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
    .navActive {
      div {
        margin-top: -4px !important;
        margin-left: 2px;
        span:nth-child(1) {
          transform-origin: 50% 50%;
          -webkit-transform-origin: 50% 50%; /* for Chrome || Safari */
          -moz-transform-origin: 50% 50%; /* for Firefox */
          -ms-transform-origin: 50% 50%; /* for IE */
          -o-transform-origin: 50% 50%;
          transform: rotate(-45deg) translateX(-2px);
          -webkit-transform: rotate(-45deg) translateX(-2px); /* for Chrome || Safari */
          -moz-transform:rotate(-45deg) translateX(-2px); /* for Firefox */
          -ms-transform: rotate(-45deg) translateX(-2px); /* for IE */
          -o-transform: rotate(-45deg) translateX(-2px);
          -webkit-transition: all 0.5s ease-in-out;
          /* for Chrome || Safari */
          -moz-transition:all 0.5s ease-in-out; /* for Firefox */
          -ms-transition: all 0.5s ease-in-out; /* for IE */
          -o-transition: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
        }
        span:nth-child(2) {
          display: none !important;
        }
        span:nth-child(3) {
          transform-origin: 50% 50%;
          -webkit-transform-origin: 50% 50%; /* for Chrome || Safari */
          -moz-transform-origin: 50% 50%; /* for Firefox */
          -ms-transform-origin: 50% 50%; /* for IE */
          -o-transform-origin: 50% 50%;
          transform: rotate(45deg) translateX(-2.5px);
          -webkit-transform: rotate(45deg) translateX(-2.5px); /* for Chrome || Safari */
          -moz-transform:rotate(45deg) translateX(-2.5px); /* for Firefox */
          -ms-transform: rotate(45deg) translateX(-2.5px); /* for IE */
          -o-transform: rotate(45deg) translateX(-2.5px);
          -webkit-transition: all 0.5s ease-in-out;
          /* for Chrome || Safari */
          -moz-transition:all 0.5s ease-in-out; /* for Firefox */
          -ms-transition: all 0.5s ease-in-out; /* for IE */
          -o-transition: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
        }
      }

    }

  }

  .row {
    margin-right: 0px !important;
    margin-left: 0px !important;
  }

  @media screen and (max-width: 1200px) {
    .logo {
      img {
        width: 60px;
      }
    }
  }

  @media screen and (max-width: 750px) {
    header {
      height: 60px !important;
    }
    .title {
      display: none !important;
    }
    .searchIcon {
      img {
        width: 30px;
      }
    }
  }
</style>
