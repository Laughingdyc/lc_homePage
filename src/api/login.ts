import axios from 'axios'
import { tranformParams } from '@/common/common'

export function login(params: { [x: string]: any }) {
  return axios({
    method: 'post',
    url: `http://175.27.165.106/api/login?${tranformParams(params)}`
  })
}