<template>
  <div class="row justify-content-center text-left">
    <div class="col-xl-12 col-lg-12 col-md-12 col-12">
      <label>URL ORIGINAL</label>
      <hr />
      <small>{{this.clearUrl(url)}}</small>
      <hr />
      <label>URL</label>
      <hr />
      <pre>{{this.convertToObject(this.clearUrl(url))}}</pre>
      <hr />
      <label>OBJECT</label>
      <hr />
      <small>{{this.convertToUrl(this.convertToObject(this.clearUrl(url)))}}</small>
      <hr />
      <label>FULL OBJECT</label>
      <hr />
      <pre>{{this.convertDetailsObject(this.clearUrl(url))}}</pre>
      <hr />
      <label>FULL OBJECT - URL</label>
      <hr />
      <small>{{this.convertToDetailsUrl(this.convertDetailsObject(this.clearUrl(url)))}}</small>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    'url': 'https://apihomolog.123carros.com.br/v1/vehicles?category=3&brand=8&model=64&version=435,&year-min=2002&year-max=2018&mileage-min=6000&mileage-max=97500&price-min=20000&price-max=197000&color=6,12,&transmission=2,1,&fuel=3,&plate-last-digit=3,4,&armored=yes,&sort=orders.created_at&order=desc&page=1'
  }),
  mounted: function() {
  },
  methods: {
    clearUrl (url) {
      return url.split('?')[1].split(',&').join('&');
    },
    convertToObject(value) {
      return JSON.parse('{"' + decodeURI(value.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')
    },
    convertDetailsObject(value) {
      let obj = JSON.parse('{"' + decodeURI(value.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')
      let details = []
      Object.keys(obj).map(function(key, index) {
        details.push({'item': key, 'values': obj[key].split(',')})
      })
      return details
    },
    convertToDetailsUrl(obj){
      return Object.entries(obj).map(([key, val]) => `${obj[key].item}=${val.values}`).join('&')
    },
    convertToUrl(obj) {
      return Object.entries(obj).map(([key, val]) => `${key}=${val}`).join('&')
    }
  }
};
</script>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
