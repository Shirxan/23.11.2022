<script setup>
import axios from 'axios'
</script>
<template>
    <h1 class="text-center">About</h1>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div v-for="item in products " :key="item" class="col-4">
        <div class="card shadow-sm">
       <img :src="item.image" alt="" class="img-fluid custom-img">

          <div class="card-body">
            <p class="card-text">{{item.title}}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button  type="button" class="btn btn-sm btn-outline-secondary"  data-bs-toggle="modal" data-bs-target="#exampleModal">View</button>
             
              </div>
              <small class="text-muted">{{item.price}}$</small>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>

</template>
<script >
export default {
    data(){
        return{
            products : {}
        }

    },
    created(){
        this.axios.get('https://fakestoreapi.com/products?limit=3').then(({data})=>{
          this.products = data;
          console.log(data);
        })


    }
}
</script>
<style scoped>
img{
    width: 150px;
    height: 150px;
}
.btn {

   margin: auto;
}
</style>