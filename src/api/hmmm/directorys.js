
import { createAPI } from '@/utils/request'

// 目录列表
export const list = data => createAPI('/directorys', 'get', data)

// 目录简单列表
export const simple = data => createAPI('/directorys/simple', 'get', data)

// 目录详情
export const detail = data => createAPI(`/directorys/${data.id}`, 'get', data)

// 目录添加
export const add = data => createAPI(`/directorys`, 'post', data)

// 目录修改
export const update = data => createAPI(`/directorys/${data.id}`, 'put', data)

// 目录删除
export const remove = data =>
  createAPI(`/directorys/${data.id}`, 'delete', data)

// 目录状态
export const remove = data => createAPI(`/directorys/${data.id}/state`, 'post', data)
