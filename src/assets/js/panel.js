/** 默认面板实体 */
export function PanelEntity (id = 'id', router = 'router', name = 'name', logo = 'logo', info = 'info') {
  this.id = id
  this.router = router
  this.name = name
  this.logo = logo
  this.info = info
  return this
}

/** 小说实体 ，比默认面板增加了下载地址 download */
export function NovelEntity (id = 'id', router = 'router', name = 'name', logo = 'logo', info = 'info', download = '#') {
  this.id = id
  this.router = router
  this.name = name
  this.logo = logo
  this.info = info
  this.download = download
  return this
}
