<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">FineAttire</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <router-link to="/" class="nav-link"> Home </router-link>
      </li>

       <li class="nav-item">
              <router-link to="/products" class="nav-link" href="#">Products</router-link>
            </li>
            
      <li class="nav-item">
        <router-link to="/about" class="nav-link"> About </router-link>
      </li>
      </ul>
      
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <a button class="btn btn-outline-success my-2 my-sm-0" data-toggle="modal" data-target="#login">Get Started</a>
    </form>
  </div>
</nav>  
  </div>
</template>

<script>
export default {
        name: 'Navbar'
}
</script>

<style>

</style>

