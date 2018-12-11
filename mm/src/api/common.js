import request from '@/config/request'

// 通用的http请求
export function httpRequest(url, form, option) {
  return request({
    ...option,
    url,
    data: {
      ...form
    }
  })
}
