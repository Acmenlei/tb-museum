<script setup lang='ts'>

</script>

<template>
  <div class="info flex">
    <div class="open-time">
      <h2>开放时间</h2>
      <h1>9:00-17:00</h1>
      <p>周二至周日 （16:30停止入馆) 周一闭馆</p>
      <p>(含国家法定节假日)</p>
      <br />
      <p>咨询电话：(0311) 966518</p>
    </div>
    <div class="info-nav">
      <div class="info-nav-item">票务预约</div>
      <div class="info-nav-item">展厅导览</div>
      <div class="info-nav-item">参观路线</div>
      <div class="info-nav-item">参观须知</div>
      <div class="info-nav-item">讲解服务</div>
      <div class="info-nav-item">交通指南</div>
    </div>
    <img class="slide-icon pointer hover" src="@/assets/img/slide-icon.png" alt="">
  </div>
</template>

<style lang='scss' scoped>
.info {
  .open-time {
    h1 {
      font-weight: bold;
    }
    flex: 1;
    padding: 20px 10px 20px 40px;
    border-bottom: 1px solid #ccc;
    p {
      font-size: 13px;
    }
  }

  .info-nav {
    flex: 2;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);

    .info-nav-item {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #ccc;
      border-top: none;
      border-right: none;
      text-align: center;

      &:nth-child(3n) {
        border-right: 1px solid #ccc;
      }
    }
  }

  .slide-icon {
    width: 40px;
    position: fixed;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>