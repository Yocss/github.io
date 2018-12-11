// import Cookies from 'js-cookie'
const app = {
  state: {
    device: 'mobile'
  },
  mutations: {
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    }
  },
  actions: {
    ToggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    }
  }
}

export default app
