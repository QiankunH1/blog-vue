<template>
  <div>
    <div class="cont">
      <div class="l_cont">
        <div class="l_top">
          <div>特别推荐</div>
          <hr style="margin-top:15px" />
          <div class="list">
            <div class="item" v-for="item in tjarticle" :key="item.index">
              <div>
                <img :src="item.img" alt />
              </div>
              <div class="title">{{item.title}}</div>
              <div class="dec">{{item.cont}}</div>
            </div>
            <!-- <div class="item">
              <div>
                <img src="" alt="">
              </div>
              <div class="title">我是标题</div>
              <div class="dec">我是标文章内容我是标文章内容我是标文章内容我是标文章内容我是标文章内容</div>
            </div>-->
          </div>
        </div>
        <div class="l_bot">
          <div>最新博文</div>
          <hr style="margin-top:15px" />
          <div>
            <div class="title">我是标题</div>
            <div class="dec">我是标文章内容我是标文章内容我是标文章内容我是标文章内容我是标文章内容</div>
          </div>
        </div>
      </div>
      <div class="r_cont">
        <div>
          <div>我的卡片</div>
          <div class="info">
            <div>网名:且听凤鸣</div>
            <div>职业:前端开发</div>
            <div>phone:18612803911</div>
            <div>e-mail:1821330332@qq.com</div>
          </div>
        </div>
        <div style="margin-top:20px">
          <div style="border-bottom:1px dashed #ffffff;line-height:40px">最新发布</div>
          <div class="new_add" style="margin-top:20px">
            <div>生活有度，人生添寿</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tjarticle: ""
    };
  },
  methods: {
    gettTjArticle() {
      this.$axios.get("?method=getTjArticle").then(res => {
        this.tjarticle = res.data;
        console.log(this.tjarticle);
      });
    }
  },
  created() {
    this.gettTjArticle();
  }
};
</script>

<style lang="scss" scoped>
.cont {
  width: 80%;
  margin: 100px auto 0px;
  display: flex;
  color: #ffffff;
  .l_cont {
    flex: 1;

    border-radius: 4px;
    box-sizing: border-box;

    .l_top {
      min-height: 370px;
      background: rgb(84, 92, 100);
      padding: 30px 20px;
      .item {
        img {
          width: 100%;
          height: 120px;
          border-radius: 6px;
        }
        .title {
          line-height: 40px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .l_bot {
      background: rgb(84, 92, 100);
      padding: 30px 20px;
      margin-top: 20px;
    }
  }
  .r_cont {
    flex-shrink: 0;
    width: 260px;
    box-sizing: border-box;
    padding: 20px 20px;
    border-left: 1px solid #ffffff;
    background: rgb(84, 92, 100);
    border-radius: 4px;
    .info {
      text-align: left;
      margin-top: 20px;
      line-height: 30px;
      color: rgb(255, 208, 75);
    }
    .new_add {
      line-height: 2;
    }
    .new_add:hover {
      color: rgb(255, 208, 75);
      cursor: pointer;
    }
  }
  .list {
    display: flex;
    justify-content: space-between;
    flex-flow: wrap;
    padding-top: 20px;
    .item {
      width: 20%;
      margin: 10px 10px;
      text-align: justify;
      .title {
        text-align: center;
      }
      .dec {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        overflow: hidden;
      }
    }
  }
}
</style>