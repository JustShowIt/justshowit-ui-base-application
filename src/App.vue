<template>
  <div id="justshowme">
    <router-view/>
    <component v-for="unit in initialUnits" :key="unit.id" v-bind:is="getComponentTypeByUnit(unit)" :unit="unit" />
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { justshowme } from '../package.json'

export default {
  data () {
    return  {
      initialUnits: [
        {
          "id": 10,
          "type": "text"
        },
        {
          "id": 20,
          "type": "text"
        },
        {
          "id": 30,
          "type": "unit",
          "units": [
            {
              "id": 40,
              "type": "text"
            },
            {
              "id": 50,
              "type": "unit",
              "units": [
                {
                  "id": 60,
                  "type": "text"
                }
              ]
            },
            {
              "id": 70,
              "type": "text"
            },
            {
              "id": 80,
              "options": {
                "titel": "Lustiges Video",
                "description": "Ein cooles lustiges Video mit einem Hasen.",
                "path": "https://www.w3schools.com/html/mov_bbb.mp4",
                "resolution": "320x240",
                "runtime": "10.26s",
                "size": "131.509.108",
                "author": "Mario Linz",
                "intelligentSearchDepth": 5
              }
            }
          ]
        },
        {
          "id": 90,
          "type": "text"
        }
      ]
    }
  },
  methods: {

    getComponentTypeByUnit (unit) {
      return unit.type ? 'justshowme-' + unit.type : 'justshowme-text'
    }

  },
  created () {

    const req = require.context('./components/', true, /\.(js|vue)$/i);
    req.keys().map(key => {
      //const name = key.match(/\w+/)[0]
      return Vue.component(req(key).default.name, req(key).default)
    })

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
          this.initialUnits = json
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
    color: #e8c5a1;
    position: relative;
  }

  #justshowme {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 1em;
  }
</style>
