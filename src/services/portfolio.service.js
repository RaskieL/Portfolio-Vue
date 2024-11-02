import LocaleSource from "@/data/controller"

async function getPortfolio(){
    console.log("recupération de portfolio (service)");
    let response = await LocaleSource.getPortfolio();
    return response;
}

export default {
    getPortfolio,
}