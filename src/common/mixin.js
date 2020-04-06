import BackToTop from "@/components/BackToTop";

import {debounce} from "@/common/utils";

export const imageLoadMixin = {
  data() {
    return {
      imageLoadEmit: null
    }
  },
  mounted() {
    this.imageLoadEmit = debounce(() => {
      if (this.$route.path.includes('/detail')) {
        this.$bus.$emit('image-load')
      }
    }, 100)
  }
}

export const backTopMixin = {
  components: {
    BackToTop
  },
  data() {
    return {
      isShowTop: false
    }
  }
}
