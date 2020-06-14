<div class="row">
  <jf-button type="primary">按钮</jf-button>
  <jf-button type="success">开始</jf-button>
  <jf-button type="info">结束</jf-button>
  <jf-button type="warning">结束</jf-button>
  <jf-button type="danger">结束</jf-button>
</div>
  <div class="row">
    <jf-button disabled type="primary">按钮</jf-button>
    <jf-button disabled type="success">开始</jf-button>
    <jf-button disabled type="info">结束</jf-button>
    <jf-button disabled type="warning">结束</jf-button>
    <jf-button disabled type="danger">结束</jf-button>
  </div>
  <div class="row">
    <jf-button @click="handleButtonClick" type="primary">按钮</jf-button>
  <jf-button @click="handleButtonClick" type = "success" > 开始</jf - button >
    <jf-button @click="handleButtonClick" type = "info" > 结束</jf - button >
      <jf-button @click="handleButtonClick" type = "warning" > 结束</jf - button >
        <jf-button @click="handleButtonClick" type = "danger" > 结束</jf - button >
    </div >
  <div class="row">
    <jf-button plain type="primary">按钮</jf-button>
    <jf-button plain type="success">开始</jf-button>
    <jf-button plain type="info">结束</jf-button>
    <jf-button plain type="warning">结束</jf-button>
    <jf-button plain type="danger">结束</jf-button>
  </div>
  <div class="row">
    <jf-button plain round type="primary">按钮</jf-button>
    <jf-button plain round type="success">开始</jf-button>
    <jf-button plain round type="info">结束</jf-button>
    <jf-button plain round type="warning">结束</jf-button>
    <jf-button plain round type="danger">结束</jf-button>
  </div>
  <div class="row">
    <jf-button plain circle type="primary">按</jf-button>
    <jf-button plain circle type="success">开</jf-button>
    <jf-button plain circle type="info">结</jf-button>
    <jf-button plain circle type="warning">束</jf-button>
    <jf-button plain circle type="danger">束</jf-button>
  </div>
  <div class="row">
    <jf-button plain icon="delete" circle type="primary"></jf-button>
    <jf-button plain icon="delete" circle type="success"></jf-button>
    <jf-button plain icon="delete" circle type="info"></jf-button>
    <jf-button plain icon="delete" circle type="warning"></jf-button>
    <jf-button plain icon="delete" circle type="danger"></jf-button>
  </div>
  <div class="row">
    <jf-button plain icon="close" round type="primary">按钮</jf-button>
    <jf-button plain icon="close" round type="success">开始</jf-button>
    <jf-button plain icon="close" round type="info">结束</jf-button>
    <jf-button plain icon="close" round type="warning">结束</jf-button>
    <jf-button plain icon="close" round type="danger">结束</jf-button>
  </div>
  
  methods: {
  handleButtonClick(e) {
    console.log('handleButtonClick: ', e)
  }
}