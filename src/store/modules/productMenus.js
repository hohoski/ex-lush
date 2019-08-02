export default {
  state: {
    productMenus: []
  },
  mutations: {
    setProductMenus(state, payLoad) {
      state.productMenus = payLoad
    }
  },
  actions: {},
  getters: {
    getProductMenus(state) {
      return state.productMenus
    }
  }
}
