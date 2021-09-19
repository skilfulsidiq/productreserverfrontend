<template>
    <div>
         <h5 class="text-center">Verify Account</h5>
         <p class="text-center">Enter code sent to your mail</p>
         <div class="auth-form">
             <form @submit.prevent="verify">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Code</label>
                        <input type="number" v-model="state.code" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small class="error-text form-text" v-if="v$.code.$error">
                                {{ v$.code.$errors[0].$message }}
                        </small>
                    </div>
                    
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-block auth-btn">
                             <span v-if="!loading"> Verify Mail </span>
                            <span v-else>loading....</span>
                        </button>
                    </div>
             </form>
             <div class="mt-3 resend">
                        <span class="form-text" @click="resend">Resend Code</span>
                        <span class="cursor app-link" @click="logout"> logout </span>
                       
                    </div>
                    
         </div>
    </div>
</template>
<script>
import { computed, reactive ,ref} from 'vue'
import { required} from '@vuelidate/validators'
import useValidate from '@vuelidate/core';
import toast from "@/services/toast.js"
export default {
    name:"Login",
    setup(){
        let loading = ref(false);
        const state = reactive({
            code:''
        })
        const rules = computed(() => {
            return{
                code: { required }
            }
        
        })
         const v$ = useValidate(rules, state)
     
  
      
        return{
            state,
            v$,
            
            
        }
    },
    methods:{
        verify(){
            this.v$.$touch();
            if(this.v$.$invalid){
               
                return;
            }else{
                this.loading=true
                let form = {code:this.state.code}
                 this.$store.dispatch("verifyAction",form).then(res=>{
                     this.loading=false;
                      this.$router.replace("/home")
                 }).catch(err=>{
                     this.loading=false;
                     let e = err.response.data;
                     toast.error(e.data);
                 })

                
            }

        },
        logout(){
            this.$store.dispatch("logoutAction").then(res=>{
                      this.$router.replace("/")
                 }).catch(err=>{
                     let e = err.response.data;
                     toast.error(e.data);
                 })
        },
        resend(){
            this.$store.dispatch("resendCodeAction").then(res=>{
                     toast.success("Code resend successfully")
            }).catch(err=>{
                let e = err.response.data;
                toast.error(e.data);
            })
        }

    }
}
</script>
<style >
 
     .resend{
        display: flex;
        justify-content: space-between;
    }
</style>