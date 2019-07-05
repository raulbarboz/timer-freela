
export default (prices, { from, to, minutes, plan}) => {
  let priceRes, withPlan, withoutPlan;

  //checking the price/minutes
  priceRes = prices.filter(price => price.id === `${from}${to}`)
  priceRes = priceRes.length ?  Number(priceRes[0].price) : false;

  //checking if the minutes > plan
  withPlan = minutes > plan ? ((minutes - plan) * (priceRes + (priceRes * 0.1))) : 0 ;

  //result
  withPlan = priceRes ? withPlan.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '-';
  withoutPlan = priceRes ? (minutes * priceRes).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : '-';
  
  //return results
  return { 
    withPlan, 
    withoutPlan 
  } 
}