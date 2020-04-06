import {request} from "@/network/request";

export function getMultiData() {
  return request({
    url: '/home/multidata'
  })
}

export function getGoods(type, page) {
  return request({
    url: 'home/data',
    params: {
      type,
      page
    }
  })
}
