import lxRequest from "..";

export function getHomeGoodPriceData(){
  return lxRequest.get({
    url:"/home/goodprice"
  })
}