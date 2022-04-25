import axios from 'axios'
import { tranformParams } from '@/common/common'

export function getHomePageViews(params: { [x: string]: any }) {
  return axios({
    method: 'post',
    url: `http://175.27.165.106/api/home/homepageViews?${tranformParams(params)}`
  })
}

export function getUpdateViews() {
  return axios({
    method: 'get',
    url: `http://175.27.165.106/api/home/updateViews`
  })
}