import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/es5/util/colors";
import "vuetify/src/stylus/app.styl";

const theme = {
  primary: colors.cyan.darken1,
  secondary: "#FFFFFF",
  accent: "#F15025",
  error: "#F15025",
  info: "#2196F3",
  success: "#4CAF50",
  warning: "#FFC107"
};

Vue.use(Vuetify, {
  theme,
  iconfont: "md"
});
