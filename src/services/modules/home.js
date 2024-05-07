import lxRequest from "..";

export function getHomeGoodPriceData(){
  return lxRequest.get({
    url:"/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return lxRequest.get({
    url: "/home/highscore"
  })
}


export function getHomeDiscountData() {
  return lxRequest.get({
    url: "/home/discount"
  })
}


export function getHomeHotRecommendData() {
  return lxRequest.get({
    url: "/home/hotrecommenddest"
  })
}


export function getHomeLongforData() {
  return lxRequest.get({
    url: "/home/longfor"
  })
}


export function getHomePlusData() {
  return lxRequest.get({
    url: "/home/plus"
  })
}
