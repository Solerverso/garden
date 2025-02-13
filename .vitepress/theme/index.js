import DefaultTheme from 'vitepress/theme-without-fonts'
import './css/custom.css'
import ArticleCard from "./components/ArticleCard.vue";

export default {
    extends: DefaultTheme,
    enhanceApp(ctx) {
        ctx.app.component('ArticleCard', ArticleCard);
    }
}
