import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    excelCols: [],
    excelRows: [],
  },
  getters: {
    getExcelData(state) {
      return {
        cols: state.excelCols,
        rows: state.excelRows,
      };
    },
  },
  mutations: {
    setExcelData(state, data) {
      // Set Column Headers
      state.excelCols = data.rows[0].c.map((item) => {
        if (item === null) {
          return "";
        } else {
          return item.v;
        }
      });

      // Set Row Values
      data.rows.shift();
      data.rows.forEach((row) => {
        row.c.map((item) => {
          if (item === null) {
            state.excelRows.push("");
          } else {
            state.excelRows.push(item.v);
          }
        });
      });
    },
  },
  actions: {
    async fetchData({ commit }, URL) {
      const response = await fetch(URL);
      const responseData = await response.text();
      const data = JSON.parse(responseData.substring(47).slice(0, -2));
      commit("setExcelData", data.table);
    },
  },
});
