<template>
    <div>
        <h5 class="text-center">Forgot Password</h5>
         <div class="auth-form">
             <form v-if="!showForm" @submit.prevent="forgot">
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" v-model="forgotForm.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small class="error-text form-text" v-if="v$.email.$error">
                                {{ v$.email.$errors[0].$message }}
                        </small>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-block auth-btn">
                             <span v-if="!loading"> Send Code </span>
                            <span v-else>loading....</span>
                        </button>
                    </div>
             </form>
             <form v-if="showForm" @submit.prevent="changePassword">
                 <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" v-model="passwordForm.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" readonly>
                      
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Code</label>
                        <input type="number" v-model="passwordForm.code" class="form-control" id="exampleInputPassword1">
                        <small class="error-text form-text" v-if="v2$.code.$error">
                                {{ v2$.code.$errors[0].$message }}
                        </small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" v-model="passwordForm.password" class="form-control" id="exampleInputPassword1">
                        <small class="error-text form-text" v-if="v2$.password.$error">
                                {{ v$2.password.$errors[0].$message }}
                        </small>
                    </div>
                    
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-block auth-btn">
                             <span v-if="!p_loading"> Change password </span>
                            <span v-else>loading....</span>
                        </button>
                    </div>
                    <div class="mt-3 resend">
                        <span class="form-text cursor" @click="retry">Resend Code</span>
                        <span><router-link to="/login" class="cursor app-link">Back to login</router-link> </span>
                       
                    </div>
                    
            </form>
                
         </div>
    </div>
</template>
<script>
import { computed, reactive,ref } from 'vue'
import { required, email,minLength} from '@vuelidate/validators'
import useValidate from '@vuelidate/core';
import toast from "@/services/toast.js"
export default {
    name:"Forgot",
    setup(){
        let showForm = ref(false);
        let loading = ref(false);
        let p_loading = ref(false);
        const forgotForm = reactive({
            email:''
        })
        const passwordForm = reactive({
            email:'',
            code:'',
            password:''
        })
        const ForgotRules = computed(() => {
            return{
                email: { required,email }
            }
        
        })
        const passwordRules = computed(() => {
            return{
                code:{required},
                email: { required,email },
                password: {required,minLength: minLength(6) }
            }
        
        })
        const v$ = useValidate(ForgotRules, forgotForm)
        const v2$ = useValidate(passwordRules, passwordForm)
        const retry = ()=>{
            showForm.value =false;
        }
  
      
        return{
            forgotForm,
            passwordForm,
            showForm,
            retry,
            v$,
             v2$,
             laoding,
             p_loading
            
            
        }
    },
    methods:{
        forgot(){
             this.v$.$touch();
            if(this.v$.$invalid){
               
                return;
            }else{
                this.laoding=true
                console.log("submitted")
                let form = {email:this.forgotForm.email}
                 this.$store.dispatch("forgotPasswordAction",form).then(res=>{
                    this.showForm = true;
                    this.loading=false;
                    this.passwordForm.email = this.forgotForm.email;
                 }).catch(err=>{
                     this.loading=false
                     let e = err.response.data;
                     toast.error(e.data);
                 })
            }
        },
        changePassword(){
             this.v2$.$touch();
            if(this.v2$.$invalid){
               
                return;
            }else{
                this.p_loading=true
                // let form = {name:this.state.code,email:this.state.email,password:this.state.password}
                 this.$store.dispatch("changePasswordWithCodeAction",this.passwordForm).then(res=>{
                     this.p_loading=false
                    this.$router.push("/login")
                 }).catch(err=>{
                     this.p_loading=false
                     let e = err.response.data;
                     toast.error(e.data);
                 })
            }
        }
    }
}
</script>
<style scoped>
    .resend{
        display: flex;
        justify-content: space-between;
    }
</style>