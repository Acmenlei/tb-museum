<script setup lang='ts'>
import NewsCard from "@/components/NewsCard.vue"
</script>

<template>
  <div class="news flex">
    <div class="news-item">
      <NewsCard title="本馆新闻">
        <div class="content flex">
          <img src="@/assets/img/img1.png" alt="img" />
          <ul>
            <li>缤纷活动迎新春 博物馆里年味儿浓 <span>2023-01-29</span></li>
            <li>展览上新 玫瑰国度一—叙利亚古代文物精品展 <span>2023-01-29</span></li>
            <li>缤纷活动迎新春 博物馆里年味儿浓 <span>2023-01-29</span></li>
            <li>缤纷活动迎新春 博物馆里年味儿浓 <span>2023-01-29</span></li>
            <li>寅去卯来腾瑞气，虎去免来耀吉光！在兔年新春佳节之际，河北博物院隆重推出“博物馆里闹。 <span>2023-01-19</span></li>
          </ul>
        </div>
      </NewsCard>
    </div>
    <div class="news-item">
      <NewsCard title="文博新闻">
        <ul>
          <li >文物说新春1玉兔迎春！</li>
          <li>文物说新春1玉兔迎春！</li>
          <li>文物说新春1玉兔迎春！</li>
          <li>文物说新春1玉兔迎春！</li>
          <li>文物说新春1玉兔迎春！</li>
          <li>文物说新春1玉兔迎春！</li>
          <li>文物说新春1玉兔迎春！</li>
        </ul>
      </NewsCard>
    </div>
    <div class="news-item">
      <NewsCard title="本馆公告">
        <ul>
          <li>占位符。。。</li>
          <li>占位符。。。</li>
          <li>占位符。。。</li>
          <li>占位符。。。</li>
          <li>占位符。。。</li>
          <li>占位符。。。</li>
          <li>占位符。。。</li>
        </ul>
      </NewsCard>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.news {
  .news-item {
    flex: 1;
    ul {
      li {
        width: 200px;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 28px;
      }
    }
  }

  .content {
    justify-content: space-between;
    li {
      line-height: 20px!important;
      span {
        color: #666;
      }
    }
    img {
      height: 200px;
      margin-right: 20px;
    }
  }
}
</style>