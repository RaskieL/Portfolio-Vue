<template>
    <div>
        <div class="portfolio-switch">
            <button @click="handleUnivButtonClick()">Portfolio Univesitaire</button>
            <button @click="handlePersButtonClick()">Portfolio Personnel</button>
        </div>
        <div v-if="show_portfolio_univ" class="portfolio" id="portfolio-univ">
            <h3>Portfolio Universitaire</h3>
            <hr>
            <div class="portfolio-row" v-for="row in getPortfolioRows(getUnivPortfolio())" :key="row[0].id">
                <PortfolioCard v-for="project in row" :key="project['id']"
                    :title="project['title']" :description="project['description']"
                    :image="project['image']" :start_date="project['start_date']"
                    :end_date="project['end_date']" :paragraphs="project['paragraphs']"
                    :github="project['github']">
                </PortfolioCard>
            </div>
        </div>
        <div v-if="!show_portfolio_univ" class="portfolio" id="portfolio-perso">
            <h3>Portfolio Personnel</h3>
            <hr>
            <div class="portfolio-row" v-for="row in getPortfolioRows(getPersonalPortfolio())" :key="row[0].id">
                <PortfolioCard v-for="project in row" :key="project['id']"
                    :title="project['title']" :description="project['description']"
                    :image="project['image']" :start_date="project['start_date']"
                    :end_date="project['end_date']" :paragraphs="project['paragraphs']"
                    :github="project['github']">
                </PortfolioCard>
            </div>
        </div>
    </div>
</template>

<script>
import {mapState} from 'vuex';
import PortfolioCard from '@/components/PortfolioCard.vue';
import {filter} from "core-js/internals/array-iteration";

export default {
    name: 'PortfolioView',
    components: {
        PortfolioCard,
    },
    data: () => ({
        portfolio_rows: [],
        show_portfolio_univ: true,
    }),
    computed: {
        ...mapState(['portfolio']),
    },
    methods: {
        filter,
        getPortfolioRows(portfolio){
            let rows = [];
            for(let i = 0; i < portfolio.length; i+=3){
                rows.push(portfolio.slice(i, i+3));
            }
            return rows;
        },
        getPersonalPortfolio(){
            return this.portfolio.filter(p => p['type'] === "personnel");
        },
        getUnivPortfolio(){
            return this.portfolio.filter(p => p['type'] === "universitaire");
        },
        handleUnivButtonClick(){
            this.show_portfolio_univ = true;
        },
        handlePersButtonClick(){
            this.show_portfolio_univ = false;
        },
    },
}
</script>

<style scoped>
.portfolio{
    display: flex;
    flex-direction: column;
}
.portfolio h3{
    font-size: 28px;
    text-align: left;
    margin-left: 15%;
    margin-bottom: 2vh
}
.portfolio-row{
    display: flex;
    flex-direction: row;
    gap: 5vw;
    margin-left: auto;
    margin-right: auto;
    margin-top: 5vh;
    justify-content: center;
    flex-flow: row wrap;
}
.portfolio hr{
    width: 75%;
    margin-right: auto;
    margin-left: auto;
    border-radius: 50%;
}
.portfolio-switch{
    display: flex;
    flex-direction: row;
    gap: 2%;
    margin-bottom: 3%;
    align-items: center;
    justify-content: center;
}
.portfolio-switch button{
    padding: 1%;
    border: 1px solid white;
    border-radius: 15px
}
.portfolio-switch button:hover{
    transition: 0.1s linear;
    transform: scale(1.05);
    box-shadow: 0px 0px 15px cyan;
}
</style>