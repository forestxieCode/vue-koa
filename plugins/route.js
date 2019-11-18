export default ({ app ,redirect}) => {
  // 做路由拦截
  app.router.afterEach((to, from) => {
    const token = sessionStorage.getItem('token')
    if(!(to.path==='/'||to.path==='register')){
      if(!token) redirect('/')
    }
  })
}
