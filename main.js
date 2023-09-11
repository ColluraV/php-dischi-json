
 const { createApp } = Vue;

 createApp({
     data() {
         return {
            CdList: [],
            apiUrl:"./api/discs-call.php",
 
         };
     },
     mounted() {
        
            axios.get(this.apiUrl).then((response) =>{
                this.CdList = response.data;
            });

     },
 
 }).mount("#app");