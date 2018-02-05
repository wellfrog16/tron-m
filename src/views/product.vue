<template>
  <div id="productList1">
    <header1></header1>
    <div id="productList">
      <!--<div class="mobileClass">-->
        <!--&lt;!&ndash;项目分类&ndash;&gt;-->
        <!--&lt;!&ndash;<div data-toggle="collapse" data-target="#demo" class="ProjectClassification col-xs-offset-1 col-xs-10">&ndash;&gt;-->
          <!--&lt;!&ndash;<span>所有项目分类</span><span class="glyphicon glyphicon-menu-down"></span>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
        <!--&lt;!&ndash;<div id="demo" class="collapse col-xs-offset-1 col-xs-10 col-sm-12 col-sm-offset-0">&ndash;&gt;-->
          <!--&lt;!&ndash;<a href="javascript:;">Html5</a>&ndash;&gt;-->
          <!--&lt;!&ndash;<a href="javascript:;">Css3</a>&ndash;&gt;-->
          <!--&lt;!&ndash;<a href="javascript:;">Javascript</a>&ndash;&gt;-->
          <!--&lt;!&ndash;<a href="javascript:;">PHP</a>&ndash;&gt;-->
          <!--&lt;!&ndash;<a href="javascript:;">Node.js</a>&ndash;&gt;-->
          <!--&lt;!&ndash;<a href="javascript:;">Canon</a>&ndash;&gt;-->
          <!--&lt;!&ndash;<a href="javascript:;">Responsive Design</a>&ndash;&gt;-->
        <!--&lt;!&ndash;</div>&ndash;&gt;-->
      <!--</div>-->
      <!--<div id="demo1" class="col-xs-offset-1 col-xs-10 col-sm-12 col-sm-offset-0">-->
        <!--<a href="javascript:;">Html5</a>-->
        <!--<a href="javascript:;">Css3</a>-->
        <!--<a href="javascript:;">Javascript</a>-->
        <!--<a href="javascript:;">PHP</a>-->
        <!--<a href="javascript:;">Node.js</a>-->
        <!--<a href="javascript:;">Canon</a>-->
        <!--<a href="javascript:;">Responsive Design</a>-->
      <!--</div>-->
      <div>
        <ul class="list list-inline" v-show="flag">
          <li class="col-lg-3 col-md-4 col-xs-10 col-sm-6 col-xs-offset-1 col-sm-offset-0 "
              v-for="(item,index) in ImgArr"
              v-if="ImgArr">
            <div class="listContent" @mouseover="appear(item)" @mouseleave="disappear(item)">
              <img :src=item.imagesUrl alt="">
              <div class="mask" v-show="item.productInformation">
                <div class="productInformation" v-show="item.supernatant">
                  <h3 class="secondTitle">{{item.title}}</h3>
                  <!--<p class="ProductIntro">此产品是很牛逼的一个产品</p>-->
                  <div class="look" @click="skip(item,$event)">点击查看</div>
                </div>
              </div>
              <div class="mask" v-show="item.productInformationOne">
                <div class="productInformation">
                  <img :src="qr">
                  <div class="lookPC"><a :href="item.url" v-if="item.url" class="lookPC" target="_blank">点击查看PC端</a>
                  </div>
                </div>
              </div>
            </div>
            <!--<div class="mobileTitle"><router-link :to="{ name : 'productDetail', params : { id : 1 }}">{{item.title}}</router-link></div>-->
            <div class="mobileTitle"><a :href="item.mobileUrl">{{item.title}}</a></div>
          </li>
        </ul>
        <ul class="list list-inline" v-show="!flag">
          <li class="col-lg-3 col-md-4 col-xs-10 col-sm-6 col-xs-offset-1 col-sm-offset-0  "
              v-for="(item,index) in ImgArr" v-if="ImgArr">
            <a :href="item.mobileUrl" target="_blank">
              <img :src="item.imagesUrl" alt="" class="mobileImages">
              <div class="mobileTitle"><a :href="item.mobileUrl">{{item.title}}</a></div>
            </a>
          </li>
        </ul>
        <div class="loading"><img src="../../static/images/loading.gif" alt="" v-show="loading"></div>
      </div>
    </div>
  </div>
</template>

<script>
  import { flag,bus } from '../assets/judge';
  import header1 from '../components/header.vue';

  export default {
    name: 'productList',
    data() {
      return {
        ImgArr: [],
        masking: 1,
        loading: false,
        qr: '',
        supernatant: true,
        flag: flag,
        title:'量子创睦互动案例库'

      };
    },
    mounted() {
      bus.$emit('change', this.title);
      //页面进行初始化
      this.initOne(0);
      let vue = this, n = 0;
      //滚动到底部自动加载
      $(window).on('resize scroll', function () {
        var $currentWindow = $(window);
        var windowHeight = $currentWindow.height();//当前窗口的高度
        var scrollTop = $currentWindow.scrollTop();//当前滚动条从上往下滚动的距离
        var docHeight = $(document).height(); //当前文档的高度
        if (scrollTop + windowHeight >= docHeight) {
          n++;
          if (n == 4) {
            return false;
          } else {
            vue.initOne(n);
          }
        }
      });
    },
    methods: {
      appear: function (e) {
        e.productInformation = true;
        if (e.productInformationOne) {
          e.productInformation = false;
        }
      },
      disappear: function (e) {
        e.productInformation = false;
      },
      initOne: function (n) {
        var me = this;
        let arr = [];
        this.$axios.interceptors.request.use(config => {
          //在发送请求之前做某事，比如说 设置loading动画显示
          me.loading = true;
          return config;
        }, error => {
          //请求错误时做些事
          console.log(error);
        });
        this.$axios.interceptors.response.use(response => {
          //对响应数据做些事，比如说把loading动画关掉
          me.loading = false;
          return response;
        }, error => {
          //请求错误时做些事
          console.log(error);
        });
        this.$axios.get('static/product.json')
          .then(function (response) {

            arr = response.data;
            var _arr = arr.slice(12 * n, 12 * (n + 1));
            for ( let i = 0; i <= _arr.length - 1; i++ ) {
              if (i >= 20) {
                break;
              } else {
                me.ImgArr.push(_arr[i]);
              }
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      },
      skip: function (e, ev) {
        e.productInformationOne = true;
        let dom = $(ev.currentTarget).parent().parent().siblings().find('img');
        this.shareWX(e, e.mobileUrl, dom);
      },
      //生成二维码
      shareWX(e, url, dom) {
        let id = e.id;
        if (flag) {
          let me = this;
          this.$axios.get('http://test.tron-m.com/api/qr/json.do?text=' + encodeURIComponent(url)).then((response) => {
            dom.attr('src', 'data:img/png;base64,' + response.data.msg);
            e.supernatant = false;
          }, (error) => {
            console.log(error);
          });
        }
      },
    },
    components: {header1},

  };
</script>
<style lang="scss">
  #productList1{
    margin: 0 auto;
  }
  #productList {
    max-width: 1920px;
    margin: 0 50px;
    margin-top: 40px;
    .list {
      margin-bottom: 40px;
      li {
        //height: 420px;
        margin-top: 40px;
        position: relative;
        .listContent {
          height: 100%;
          position: relative;
          img {
            width: 100%;
          }
          //蒙版
          .mask {
            //margin-right: 30px;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, .5);
            /*display: flex;*/
            /*justify-content: center;*/
            /*align-items: center;*/
            .productInformation {
              color: #fff;
              position: relative;
              top: 50%;
              text-align: center;
              -webkit-transform: translateY(-50%); /* for Chrome || Safari */
              -moz-transform: translateY(-50%); /* for Firefox */
              -ms-transform: translateY(-50%); /* for IE */
              -o-transform: translateY(-50%);
              img{
                width:60%;
              }
            }
          }
        }
      }
    }
    .list-inline {
      li {
        padding: 0 20px;
      }
    }
    .list:after {
      display: block;
      clear: both;
      visibility: hidden;
      content: '';
    }
  }

  /*项目分类*/
  .ProjectClassification {
    height: 50px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    span:nth-child(1) {
      font-size: 18px;
      font-weight: bold;
      letter-spacing: 2px;
      line-height: 50px;
    }
    span:nth-child(2) {
      font-size: 18px;
    }
  }

  .mobileClass, .mobileTitle {
    display: none;
  }

  /*折叠区*/
  #demo {
    text-align: center;
    padding: 0px;
    font-size: 0;
    a {
      display: inline-block;
      height: 34px;
      padding: 0 20px;
      line-height: 34px;
      color: #202121;
      border: 1px solid #202121;
      border-radius: 36px;
      font-size: 16px;
      overflow: hidden;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      margin-right: 8px;
      margin-bottom: 12px;
      text-decoration: none;
    }
  }
  #demo1 {
    text-align: center;
    display: block;
    padding: 0 20px;
    font-size: 0;
    margin-bottom: -6px;
    a {
      display: inline-block;
      height: 34px;
      padding: 0 20px;
      line-height: 34px;
      color: #202121;
      border: 1px solid #202121;
      border-radius: 36px;
      font-size: 16px;
      overflow: hidden;
      -webkit-transition: all 0.3s ease-in-out;
      transition: all 0.3s ease-in-out;
      margin-right: 8px;
      margin-bottom: 12px;
      text-decoration: none;
    }
    a:hover {
      color: #49c5b6;
      border-color: #49c5b6;
    }
  }

  .secondTitle {
    font-size: 20px;
    letter-spacing: 2px;
    line-height: 30px;
    text-align: center;
  }

  .mobileTitle {
    font-size: 18px;
    font-weight: bold;
    letter-spacing: 2px;
    text-align: left;
    margin-top: 8px;
    a{
      color: #000;
    }
  }

  .look {
    cursor: pointer;
    font-size: 16px;
    letter-spacing: 2px;
    text-align: center;
    a{
      color: #fff;
    }
  }

  .lookPC {
    font-size: 16px;
    //padding-top: 50px;
    letter-spacing: 2px;
    color: #fff;
    text-align: center;
  }

  .lookPC:hover {
    color: #fff;
  }

  .mobileImages {
    width: 100%;
  }
.loading{
  text-align: center;
}
  @media screen and (max-width: 768px) {
    #productList {
      margin: 0;
      margin-top: 20px;
      .list-inline {
        li {
          padding: 0;
          margin-top: 30px;
        }
        li:nth-child(1){
          margin-top: 10px;
        }
      }
      .mobileClass, .mobileTitle {
        display: block;
      }
      #demo1 {
        display: none;
      }
    }
  }
</style>


