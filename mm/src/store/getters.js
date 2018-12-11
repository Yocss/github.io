const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token,
  name: state => state.user.name,
  roles: state => state.user.roles,
  area: state => state.app.area,
  areaMap: state => state.app.areaMap,
  major: state => state.app.major,
  jobType: state => state.app.jobType,
  avatars: state => state.user.avatars,
  license: state => state.user.license,
  popup: state => state.app.popup,
  tab: state => state.app.tab,
  prevRouter: state => state.app.prevRouter
}
export default getters
