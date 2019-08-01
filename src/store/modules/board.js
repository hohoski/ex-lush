import router from "@/router"

export default {
  state: {
    productMenus: [],
    boardList: []
  },
  mutations: {
    setProductMenus(state, payLoad) {
      state.productMenus = payLoad
    },
    setBoardList(state, payLoad) {
      state.boardList = payLoad
    },
    addBoardList(state, payLoad) {
      state.boardList.unshift(payLoad)
      router.push({
        name: "list",
        params: {
          contentId: "1"
        }
      })
    },
    modifyBoardList(state, payLoad) {
      state.boardList.forEach((element, idx) => {
        if (element.seq === payLoad.seq) {
          state.boardList[idx] = payLoad
        }
      })
      router.push({
        name: "list",
        params: {
          contentId: "1"
        }
      })
    },
    removeBoardList(state, payLoad) {
      state.boardList.splice(payLoad, "1")
    }
  },
  actions: {
    addBoardList(context, listData) {
      context.commit("addBoardList", listData)
      router.push({
        name: "list",
        params: {
          contentId: "1"
        }
      })
    },
    removeBoardList({ state, commit }, seq) {
      // let boardLength = state.boardList.length
      state.boardList.forEach((data, idx) => {
        console.log(data)
        data.seq === seq ? commit("removeBoardList", idx) : ""
      })
      router.push({
        name: "list",
        params: {
          contentId: "1"
        }
      })
    }
  },
  getters: {
    getProductMenus(state) {
      return state.productMenus
    },
    getBoardList(state) {
      return state.boardList
    }
  }
}
