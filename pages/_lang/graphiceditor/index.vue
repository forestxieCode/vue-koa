<template>
  <section class="graphiceditor">
      <flowMain/>
  </section>
</template>
<script>
import flowMain  from '~/components/public/flow/flowMain'
export default {
  layout:'homeLayout',
  components:{
      flowMain
  }
}
</script>
<style lang="less">
.graphiceditor{
  width: 100%;
  height: 100%;
  min-height: 100%;
  transition: .3s;
  background-color: #f0f2f5;
  padding: 24px;
  display: block;
  -webkit-box-flex: 1;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
}
</style>
