<template>
  <div id="justshowme">
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'
import { justshowme } from '../package.json'

export default {
  data () {
    return  {
      initialServiceData: null
    }
  },
  mounted () {

    let params = window.location.search.substr(1).split('&')
    let address = null

    if (params.length && params[0] !== '') {

      address = params.filter(param => {
        return param.search('justshowme=') !== -1
      }).map(param => {
        return decodeURIComponent(param);
      })[0]

      if (address) {
        address = address.split('=')[1]
      }

    }
    
    if (address) {
      try {
        const url = justshowme.gateway + justshowme.dataPath;

        console.log('Initial service request detected to', address)
        
        axios.get(url, {
          headers: {
            'justshowme-service-request-uri': address
          }
        }).then(json => {
          this.initialServiceData = json
        })
      } catch (e) {
        console.error(e)
      }
    }

  }
}
</script>

<style lang="scss">
  * { 
    box-sizing: border-box; 
    margin: 0; 
    padding: 0; 
  }
  html, 
  body { 
    width: 100%; 
    height: 100%; 
  }
  body {
    background: #111;
    background-image: url(http://www.laboratoriocondemorales.com/app/lib/frm/img/admin/background.jpg);
    background-size: cover;
    color: #999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #justshowme {

  }
</style>
