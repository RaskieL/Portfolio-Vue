import {portfolio} from './portfolio_data'

function getPortfolio(){
    console.log("recupération de portfolio (controller)");
    return {error: 0, data: portfolio};
}

export default {
    getPortfolio,
}