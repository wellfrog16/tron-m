<template>
  <div id="productList">
    <div class="title">创睦案例库</div>
    <div>
      <ul class="list list-inline">
        <li class="col-lg-3 col-md-4 col-xs-12" v-for="(item,index) in ImgArr" v-if="ImgArr">
          <div class="listContent" @mouseover="appear(item)" @mouseleave="disappear(item)">
            <img :src=item.imagesUrl alt="">
            <div class="mask" v-show="item.productInformation">
              <div class="productInformation" v-show="item.supernatant">
                <h3 class="secondTitle">{{item.title}}</h3>
                <!--<p class="ProductIntro">此产品是很牛逼的一个产品</p>-->
                <div><p @click="skip(item,$event)" class="look">点击查看{{index}}</p></div>
              </div>
              <div class="productInformation" v-show="!item.supernatant">
                <img :src="qr">
                <div class="lookPC"><a :href="item.url" v-if="item.url" class="lookPC">点击查看PC端</a></div>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div><img src="../../static/images/loading.gif" alt="" v-show="loading"></div>
    </div>
  </div>
</template>

<script>
  import {flag} from '../assets/judge'

  export default {
    name: 'productList',
    data() {
      return {
        ImgArr: [],
        masking: 1,
        loading: false,
        qr: '',
        supernatant: true,

      }
    },
    mounted() {
      console.log(flag);
      //页面进行初始化
      this.initOne(1);
      let vue = this, n = 1;
      //滚动到底部自动加载
      $(window).on("resize scroll", function () {
        var $currentWindow = $(window);
        var windowHeight = $currentWindow.height();//当前窗口的高度
        var scrollTop = $currentWindow.scrollTop();//当前滚动条从上往下滚动的距离
        var docHeight = $(document).height(); //当前文档的高度
        if (scrollTop + windowHeight >= docHeight) {
          n++;
          if (n == 4) {
            return
          } else {
            vue.initOne(n)
          }

        }
      });
    },
    methods: {
      appear: function (e) {
        e.productInformation = true;

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
          return config
        }, error => {
          //请求错误时做些事
          return Promise.reject(error)
        });
        this.$axios.interceptors.response.use(response => {
          //对响应数据做些事，比如说把loading动画关掉
          me.loading = false;
          return response
        }, error => {
          //请求错误时做些事
          return Promise.reject(error)
        });
        this.$axios.get('../../static/product.json')
          .then(function (response) {

            arr = response.data;
            me.ImgArr = [];
            for (let i = 0; i <= 8 * n - 1; i++) {
              if (i >= 21) {
                return false
              } else {
                me.ImgArr.push(response.data[i])
              }
            }
          })
          .catch(function (err) {
            console.log(err);
          });
      },
      skip: function (e,ev) {
        let dom = $(ev.currentTarget).parent().parent().siblings().find('img');
        this.shareWX(e, e.mobileUrl,dom)
      },
      //生成二维码
      shareWX(e, url,dom) {
        let id = e.id;
        if (flag) {
          let me = this;
          this.$axios.get('http://test.tron-m.com/api/qr/json.do?text=' + encodeURIComponent(url)).then((response) => {
            dom.attr('src','data:img/png;base64,' + response.data.msg);
            e.supernatant = false;
          }, (error) => {
            console.log(error)
          });
        }
      },
    }
  }
</script>
<style lang="scss">

</style>


