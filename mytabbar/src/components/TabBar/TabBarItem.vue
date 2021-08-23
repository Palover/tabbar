<template>
  <div class="tab-bar-item" @click="changePath">
    <div v-if="!isActive">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style={color:activeStyle}>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  data(){
    return {}
  },
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'#ff5777'
    }
  },
  methods:{
    changePath(){
      this.$router.replace(this.path).catch(err=>err);
    }
  },
  computed:{
    isActive() {
      return this.$route.path.indexOf(this.path) != -1
    },
    activeStyle() {
      return this.isActive?this.activeColor:''
    }
  }
}
</script>

<style scoped>
.tab-bar-item{
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.tab-bar-item img{
  width: 22px;
  height: 22px;
  margin-top: 5px;
  vertical-align: middle;
}
</style>
