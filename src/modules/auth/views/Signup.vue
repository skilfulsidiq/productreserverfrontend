<template>
    <div>
       <h5 class="text-center">Sign Up</h5>
         <div class="auth-form">
             <form @submit.prevent="register">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="text" v-model="state.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small class="error-text form-text" v-if="v$.name.$error">
                                {{ v$.name.$errors[0].$message }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" v-model="state.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                       <small class="error-text form-text" v-if="v$.email.$error">
                                {{ v$.email.$errors[0].$message }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" v-model="state.password" class="form-control" id="exampleInputPassword1">
                        <small class="error-text form-text" v-if="v$.password.$error">
                                {{ v$.password.$errors[0].$message }}
                        </small>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-block auth-btn">
                               <span v-if="!loading"> Submit </span>
                            <span v-else>loading....</span>
                        </button>
                    </div>
                    <div class="mt-3">
                        <p class="text-center text-muted"> Already have account?
                            <span class="app-link cursor"> <router-link to="/login" class="cursor">Sign in</router-link> </span>
                        </p>
                    </div>
                    
                </form>
                 <div class="or-line my-3">
                    <span class="line"></span>
                    <span class="or text-muted text-center">Or sign up with</span>
                    <span class="line"></span>
                </div>
                <div class="social-btn">
                    <button class="btn btn-primary">Facebook</button>
                    <button class="btn btn-danger">Google</button>
                </div>
         </div>
    </div>
</template>
<script>
import { computed, reactive,ref } from 'vue'
import { required, email,minLength} from '@vuelidate/validators'
import useValidate from '@vuelidate/core';
import toast from "@/services/toast.js"
export default {
    name:"Register",
    setup(){
         let loading = ref(false)
        const state = reactive({
            name:'',
            emal:'',
            password:''
        })
        const rules = computed(() => {
            return{
                name:{required},
                email: { required,email },
                password: {required,minLength: minLength(6) }
            }
        
        })
         const v$ = useValidate(rules, state)
     
  
      
        return{
            state,
            v$,
            
            
        }
    },
    methods:{
        register(){
             this.v$.$touch();
            if(this.v$.$invalid){
               
                return;
            }else{
                this.loading=true;
                // let form = {name:this.state.name,email:this.state.email,password:this.state.password}
                 this.$store.dispatch("registerAction",this.state).then(res=>{
                     this.loading=false;
                    this.$router.push("/verify")
                 }).catch(err=>{
                       this.loading=false;
                     let e = err.response.data;
                     toast.error(e.data);
                 })
            }
        }
    }
}
</script>