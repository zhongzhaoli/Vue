<template>
  <div id="index">
    <title>首页-云屯务集</title>
    <div class="header">
      <span>首页</span>
    </div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="img of swiper_img_arr">
        <div class="swiper_img_div" :style="{backgroundImage: 'url(' + img + ')'}"></div> 
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="job_type_div">
      <div class="job_type_content">
        <div class="job_type">
          <img src="@/assets/images/job-type/all.png" alt="">
          <span>全部</span>
        </div>
        <div class="job_type">
          <img src="@/assets/images/job-type/ly.png" alt="">
          <span>礼仪模特</span>
        </div>
        <div class="job_type">
          <img src="@/assets/images/job-type/cx.png" alt="">
          <span>销售促销</span>
        </div>
        <div class="job_type">
          <img src="@/assets/images/job-type/zc.png" alt="">
          <span>主持人</span>
        </div>
        <div class="job_type">
          <img src="@/assets/images/job-type/ch.png" alt="">
          <span>活动策划</span>
        </div>
        <div class="job_type">
          <img src="@/assets/images/job-type/jj.png" alt="">
          <span>家教</span>
        </div>
        <div class="job_type">
          <img src="@/assets/images/job-type/fws.png" alt="">
          <span>服务生</span>
        </div>
        <div class="job_type">
          <img src="@/assets/images/job-type/dl.png" alt="">
          <span>校园代理</span>
        </div>
      </div>
    </div>
    <div class="now_job">
      <div class="now_job_content">
        <p class="now_job_title">最近兼职</p>
        <div class="job_content">企业较为急性的兼职需求，近十天内的兼职需求</div>
        <div class="loading_div" v-if="job_index.length == 0">
          <img src="@/assets/images/loading.gif" alt="">
        </div>
        <div class="job_mes" v-for="i of job_index">
          <img :src="i.user_img" alt="">
          <div class="job_text_mes">
            <div class="job_text_div col-xs-11">
              <h4>{{ i.job_title }}</h4>
              <span class="job_money">￥{{ i.admin_change_money }}元 / 天</span>
              <span class="job_number">报名人数：{{ i.job_has_num }} / {{ i.job_num }}</span>
            </div>
            <div class="col-xs-1 read_btn">
              <i _ngcontent-c4="" class="fa fa-angle-right posi_left"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <swiper :options="swiperOption2" class="our_cg_content">
      <swiper-slide v-for="i of evaluate_sj">
        <div class="swiper-slide cg_card">
          <img class="cg_photo_img" :src="i.user.user_img" alt="">
          <h5 class="cg_name">{{ i.user.name }}</h5>
          <span class="cg_pl">{{ i.evaluate.text }}</span>
          <button class="btn btn-success">查看详细</button>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
    <div class="our_team">
      <div class="our_team_content">
        <p class="our_team_title">平台介绍</p>
        <div class="team_content">为深圳市乃至珠三角的中小型企业打造在校大学生专业技术、兼职服务，形成整合式、系统式、现代化的一站式综合商务服务平台。</div>
      </div>
    </div>
    <div class="pengan">
      <div class="now_job_content">
        <p class="now_job_title">鹏安驾校</p>
        <div class="job_content">深圳鹏安驾校为您学车提供详尽的驾校报名咨询、驾校学车手续办理、鹏安驾校保障您的学车通过率，为您学车保驾护航，<a href="javascript:void(0)">通过平台报名有优惠。</a></div>
        <div class="pengan_img">
          <img src="@/assets/images/pengan.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="call_our_div">
      <div class="call_our">
        <div class="call_our_text">
          <p>服务热线:18682390466 QQ:525966315</p>
          <p>服务时间 09:00 - 20:30</p>
          <div>
            <span>Copyright © 2018-2020 www.yuntunwj.com</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { Apiget, Apipost } from '../../request/api';
export default({
  components: {
    swiper,
    swiperSlide,
  },
  data () {
    return {
      swiper_img_arr: [
        require("../../assets/images/slider/0.jpg"),
        require("../../assets/images/pengan.jpg"),
        require("../../assets/images/slider/3.jpg"),
      ],
      job_index: [],
      evaluate_sj: [],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        autoplay:true,//设置自动循环播放
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        }
      },
      swiperOption2: {
        slidesPerView: 2,
        spaceBetween: 10,
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true,//修改swiper的父元素时，自动初始化swiper
      }
    }
  },
  methods: {
    job_index_fun(){
      Apiget("/job_index")
      .then((response) => {
        this.job_index = response;
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
    },
    evaluate_sj_fun(){
      Apiget("/evaluate_show")
      .then((response) => {
        this.evaluate_sj = response;
      })
      .catch((error) => {
        alert(error.response.data.message);
      })
    }
  },
  created() {
    console.log(this.$store.state.count);
    this.job_index_fun();
    this.evaluate_sj_fun();
  }
});
</script>
<style>
  @import "./Index.css";
</style>