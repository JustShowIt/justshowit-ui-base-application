<template>
  <div id="justshowme">
    <router-view/>
  </div>
</template>

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
