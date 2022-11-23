<script setup>
import axios from 'axios'
</script>
<template>
    <h1 class="text-center">All products</h1>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div v-for="item in products " :key="item" class="col-4">
        <div class="card shadow-sm">
       <img :src="item.image" alt="" class="img-fluid custom-img">

          <div class="card-body">
            <p class="card-text">{{item.title}}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button  type="button" class="btn btn-sm btn-outline-secondary"  data-bs-toggle="modal" data-bs-target="#exampleModal" >View</button>
                <button type="button" id="sebet" class=" btn btn-success " @click="yaz"> Sebete elave et</button>
             
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
        this.axios.get('https://fakestoreapi.com/products').then(({data})=>{
          this.products = data;
          console.log(data);
        })


    },
    methods:{
      yaz(){
        localStorage.getItem('sebet','salam')
      },
      getir(){
        localStorage.setItem('sebet')
      }
    }
}
</script>
<style scoped>
img{
    width: 150px;
    height: 150px;
}
#sebet{
    margin-left: 50px !important;
    border-radius: 8px !important ;
}
</style>