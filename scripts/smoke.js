(async ()=>{
  const urls = [
    'http://localhost:3000/',
    'http://localhost:3000/dashboard',
    'http://localhost:3000/about',
    'http://localhost:3000/dashboard/downloads'
  ]

  for (const u of urls) {
    try {
      const r = await fetch(u)
      const t = await r.text()
      console.log(u + ' -> ' + r.status + ' len=' + t.length)
      if (r.status >= 400) {
        console.log('--- response snippet ---')
        console.log(t.slice(0, 2000))
        console.log('--- end snippet ---')
      }
    } catch (e) {
      console.error(u + ' -> ERR', e.message)
    }
  }
})()
