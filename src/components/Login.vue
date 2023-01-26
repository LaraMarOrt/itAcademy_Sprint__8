<template>
  <transition name="modal">
 
 
 
 
     <div class="modal-mask">
       <div class="modal-wrapper" @click="$emit('close')">
         <div class="modal-container" @click.stop>
 
           <div class="modal-header">
             <slot name="header" class="titulo">
               INTRODUCE TU CORREO
             </slot>
           </div>
 
           <div class="modal-body">
             <slot name="body">
                 <form>
                         <input placeholder="usuario" id="user" type="text" v-model="user">
                         <input placeholder="contraseña" id="pass" type="text" v-model="pass">
                         <button class="modal-login-button" @click="login">Iniciar</button>
                     </form>
             </slot>
           </div>
 
           <div class="modal-footer">
             <slot name="footer">
               <button class="modal-default-button" @click="$emit('close')">
                 Cerrar
               </button>
             </slot>
           </div>
         </div>
       </div>
     </div>
   </transition>
 
 </template>
 
 <script>
 export default {
     name: "Login",
     emits: ['close'],
     data() {
         return {
             user: "",
             pass: "",
         }
     },
     methods: {
       login() {
         console.log("entralogin");
         this.$store.dispatch("logUser", [this.user, this.pass])
       }
     }
 }
 
 
 
 </script>
 
 <style  scoped>
 
 .modal-mask {
   position: fixed;
   z-index: 9998;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background-color: rgba(0, 0, 0, .5);
   display: table;
   transition: opacity .3s ease;
 }
 
 .modal-wrapper {
   display: table-cell;
   vertical-align: middle;
 }
 
 .modal-container {
   width: 300px;
   margin: 0px auto;
   padding: 20px 30px;
   background-color: #25252c;
   border-radius: 2px;
   box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
   transition: all .3s ease;
   font-family: Helvetica, Arial, sans-serif;
 }
 
 .modal-header {
   margin-top: 0;
   color: #ffc107;
   font-weight: 500;
   justify-content: center;
 }
 
 .modal-body {
   margin: 20px 0;
 }
 
 .modal-login-button {
     margin-top: 10px;
     background-color: #ffc107;
     border-color: #ffc107;
     color: black
 }
 .modal-default-button {
   float: right;
   background-color: rgb(147, 147, 144);
   border-color: rgb(147, 147, 144);
 
 }
 
 input {
     margin: 6px;
 }
 
 </style>