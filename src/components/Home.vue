<template>
  <div>
      <div class="home">
        
      <p align="center" class="intro" > <b>Your home of chic,classy, unique,elegant but affordable attire!</b></p>
      <div class = "variety">
          <div class ="detail">
          <h2 align = "center" style = "color:white">YOUR ALL TIME FINE ATTIRE</h2>
          <h3 align = "center" style = "color:white">Dresses.Pants.Sweaters.Skirts.Tops</h3>
          <button class="button1" type="btn btn-secondary btn-large" > SHOP NOW</button>
          </div>
          </div>
          <br>
          <br>
    <div class="container">
        <div class="gender">
            <div class="women">
                
                 <h5>SHOP<br> Women's</h5>
            </div>
            <div class="men">
               
                <h5>SHOP<br> Men's</h5>
                </div>
        </div>
    </div>
 </div>
  </div>
</template>

<script>
export default {
    name: 'Home'

}
</script>

<style scoped>
body{
    background:rgba(172, 172, 238, 0.959);
}

.intro{
    padding-top: 5px;
}

.variety{
    background: url(https://img.theculturetrip.com/wp-content/uploads/2016/08/thanx-god-im-a-v-i-p--store---amnaye-nhas-courtesy-of-thanx-god-im-a-v-i-p-.jpg)no-repeat fixed center center;
    background-size: cover;
    padding-bottom: 400px;
    font-size:large;
}

.detail{
    padding-top: 200px;
}
.button1{
    border-radius: 4px;
    font-size:large;
    color:purple;
    
    
}
.gender{
    display: flex;
    flex-direction: row;
    margin-right: 50%;
}

.men{
    margin-right: 10px;
}




</style>
