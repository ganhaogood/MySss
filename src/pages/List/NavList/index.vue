<template>
  <div class="listMenu">
    <div class="inner">
      <ul>
        <li class="item">
          <a href="javascript:;">name</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
  @import '../../../common/stylus/mixins.styl'
  .listMenu
    position fixed
    top px2rem(88)
    left 0
    bottom 0
    z-index 4
    width px2rem(162)
    background-color #ffffff
    &:after
      content ''
      position absolute
      background-color rgba(0,0,0,.15)
      top 0
      bottom 0
      width 1px
      -webkit-transform-origin 100% 50% 0
      transform-origin 100% 50% 0
      right 0
    .inner
      width 100%
      max-height px2rem(1104)
      padding-top px2rem(40)
      overflow hidden
      >ul
        padding-bottom px2rem(138)
        >.item
          width 100%
          height px2rem(76)
          line-height px2rem(76)
          text-align center
          border none
          &.active
            position relative
            &:before
              content ''
              position absolute
              top 0
              left 0
              bottom 0
              width px2rem(6)
              background-color $main
            >a
              font-size px2rem(36)
              line-height px2rem(76)
              font-weight 700
              color $main
          +.item
            margin-top px2rem(20)
          >a
            display block
            color #333333
            font-size px2rem(28)
            line-height px2rem(56)
            ellipsis()
</style>
