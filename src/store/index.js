import { createStore } from "vuex";
import PortfolioService from "@/services/portfolio.service";

export default createStore({
  state: ({
    portfolio: [],
  }),
  getters: {},
  mutations: {
    updatePortfolio(state, portfolio){
      state.portfolio = portfolio;
    }
  },
  actions: {
    async getPortfolio({commit}){
      console.log("recupération de portfolio (store)");
      let response = await PortfolioService.getPortfolio();
      commit('updatePortfolio', response.data);
    }
  },
  modules: {},
});
