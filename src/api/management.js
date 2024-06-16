// 地块管理
import request from '@/utils/request';

export function fieldlist(params) {
  return request({
    url: '/biz/field/list',
    method: 'get',
    params
  });
}

export function addfield(data) {
  return request({
    url: '/biz/field',
    method: 'post',
    data
  });
}

// /prod-api/biz/field
export function updatefield(data) {
  return request({
    url: '/biz/field',
    method: 'put',
    data
  });
}

export function fieldinfo(id) {
  return request({
    url: `/biz/field/detail/${id}`,
    method: 'get'
  });
}

// /prod-api/biz/outbound/order/cangList
// 查询仓列表
export function canglist(params) {
  return request({
    url: '/biz/outbound/order/cangList',
    method: 'get',
    params
  });
}

export function partnerSelect(params) {
  return request({
    url: '/biz/field/partnerSelect',
    method: 'get',
    params
  });
}

export function tagSelect(params) {
  return request({
    url: '/biz/field/tagSelect',
    method: 'get',
    params
  });
}

export function granaryList(params) {
  return request({
    url: '/biz/field/granaryList',
    method: 'get',
    params
  });
}

export function statistics(params) {
  return request({
    url: '/biz/field/statistics',
    method: 'get',
    params
  });
}

// biz/field/cropSelect
export function cropSelect(params) {
  return request({
    url: '/biz/field/cropSelect',
    method: 'get',
    params
  });
}

export function updateBatch(data) {
  return request({
    url: '/biz/field/updateBatch',
    method: 'put',
    data
  });
}

// /biz/field/delete
export function deleteMulti(data) {
  return request({
    url: '/biz/field/delete',
    method: 'delete',
    data
  });
}

export function fieldPlant(fieldId) {
  return request({
    url: `/biz/field/plant/${fieldId}`,
    method: 'get'
  });
}

// 根据经纬度查询土壤数据
export function fieldSoil(params) {
  return request({
    url: `/biz/field/soil`,
    method: 'get',
    params
  });
}

// 长势监测数据
export function fieldMonitor(fieldId) {
  return request({
    url: `/biz/field/monitor/${fieldId}`,
    method: 'get'
  });
}

// 积雨数据
export function fieldPrecipitation(params) {
  return request({
    url: `/biz/field/precipitation`,
    method: 'get',
    params
  });
}

// //prod-api/biz/field/temperature
export function fieldTemperature(params) {
  return request({
    url: `/biz/field/temperature`,
    method: 'get',
    params
  });
}

// 天气预警
export function fieldWarning(params) {
  return request({
    url: `/biz/field/warning`,
    method: 'get',
    params
  });
}

// 24小时天气预报
export function fieldWeatherHour(params) {
  return request({
    url: `/biz/field/weatherHour`,
    method: 'get',
    params
  });
}

// 实时天气
export function fieldWeatherRealTime(params) {
  return request({
    url: `/biz/field/weatherRealTime`,
    method: 'get',
    params
  });
}

// 未来7天天气
export function fieldWeather(params) {
  return request({
    url: `/biz/field/weather`,
    method: 'get',
    params
  });
}
