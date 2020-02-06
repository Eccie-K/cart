<template>
  <div>
      <div class="home">
          <Navbar></Navbar>
          
          
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
          <br>
          <br>
          <h5 align="center"> IN STORE </h5>
          <br>
          <br>
          <h2 align="center"> THREADS 2020</h2>
          <p align="center"> We've got the coolest collection for the year. The trendiest styles <br>
          for men and women</p>
          <br>
          <br>
          <br>


    <div class="container">
        <div class="gender">
            <div class="women">
              <div class = "col-md-4">
                    <div class = "container-fluid">
                      <div class="card-group">
                        <div class="card">
                          <img style="width:500px; height:400px;" src="https://images.squarespace-cdn.com/content/v1/55a85a20e4b06a2e04aaad00/1536201307752-DI6S1FUAU0FAWMJHLIS9/ke17ZwdGBToddI8pDm48kPlxOjnXH5ZYyLlsdgbuFmRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz7re6VqVFnx2Bfv8q3qcUBSqdM9U_gv0_2ygZA2Su2wmzQe_ORBqMIT0GpDT5uReI/clothesmakethewoman.jpg">
                        </div>
                      </div>
                    </div>
                  </div>
                
                
            </div>
            <div class="men">
                <div class = "col-md-4">
                    <div class = "container-fluid">
                      <div class="card-group">
                        <div class="card">
                          <img style="width:500px; height:400px;" src="https://millennialmagazine.com/wp-content/uploads/2016/12/millennial-man-style-t.jpg">
                        </div>
                      </div>
                    </div>
                  </div>
                
                </div>
        </div>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <div class="collection">
        <div id="dress">
                          <img style="width:275px; height:250px;" src="https://www.rd.com/wp-content/uploads/2016/09/1-1-760x506.jpg">
                  </div>      

         <div id="womens">
                    
                          <img style="width:275px; height:250px;" src="https://ruinmyweek.com/wp-content/uploads/2019/03/201903ladies-everywhere-are-relating-to-this-viral-tweet-about-womens-jeans-sizes.jpg">
                        
                  </div>  

        <div  id="mens">
                    
                          <img style="width:275px; height:250px;" src="https://www.themodestman.com/wp-content/uploads/2019/03/Minimalist-pants-collection-copy.jpg">
                        
                  </div>   

         <div  id="tops">
                    
                          <img style="width:275px; height:250px;" src="https://stylesatlife.com/wp-content/uploads/2017/02/new-Patterns-of-Designer-Tops-for-Girls-in-Fashion.jpg">
                        
                  </div>

        <div  id="tops">
                    
                          <img style="width:275px; height:250px;" src="https://alldaychic.com/wp-content/uploads/2015/06/Men%E2%80%99s-Fashion-Guide-For-Dressing-In-Summer.jpg">
                        
                  </div>


    </div>
    <br>
    <br>
    <br>
    <br>
    <div class="style">

        <div class="pic1">
             
        </div>
        <div class="txt">
        <h5 align = "center">FIND YOUR STYLE</h5>
        <h1 align="center">FIND YOURSELF</h1>
        <br>
        <br>
         <button class="button1" type="btn btn-secondary btn-large" > SEE COLLECTION</button>
        </div>
        <div class="pic2">
            
        </div>

    </div>
    <div class="bottom">
        <div class="text">
            <div class="txt1">
                <h5>SHOP</h5>
                 <router-link to="/" class="nav-link"> Home </router-link>
                 <router-link to="/about" class="nav-link"> About </router-link>
                 <router-link to="/about" class="nav-link"> Shop </router-link>
                  <router-link to="/about" class="nav-link"> Contact </router-link>

            </div>
            <div class="txt2">
                <h5>SOCIAL</h5>

            <router-link to="/about" class="nav-link"> Facebook </router-link>
            <router-link to="/about" class="nav-link"> Instagram </router-link>
             <router-link to="/about" class="nav-link"> Twitter </router-link>
            </div>
            </div>
        </div>
 </div>

            <login></login>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";


export default {
    name: 'Home',
    components: {
    Login,
  }
    
    
    

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
    padding-bottom: 300px;
    font-size:large;
}

.detail{
    padding-top: 200px;
}
.button1{
    border-radius: 10px;
    font-size:large;
    color:purple;
    
    
}
.gender{
    display: flex;
    flex-direction: row;
    margin-right: 2000px;
}

.men{
    margin-right:0px;
}

.collection{
    display: flex;
    flex-direction: row;
    
}
#dress{
    padding-top: 20px;
}
#tops{
    padding-top:20px;
    
}
#mens{
    padding-top: 20px;
}
#womens{
    padding-top: 20px;
}

#shirts{
    padding-top: 20px;
}

.style{
    background: url(https://www.setaswall.com/wp-content/uploads/2017/10/Google-Pixel-2-Stock-Wallpaper-04-1080x1920-340x220.jpg)no-repeat;
    background-size: cover;
    padding-bottom: 220px;
    display: flex;
    flex-direction: row;
}

.pic1{
    margin-left: 25%;
    padding-top:10px;
    
}

.pic2{
    margin-left: 10%;
    padding-top:10px;

}

.txt{
    margin-left:10%;
    padding-top:100px;
}

.text{
    display:flex;
    flex-direction: row;
    padding-top: 25px;
    background: black;
    color:white;

}


.txt1{
    margin-left:40%;
}
</style>
