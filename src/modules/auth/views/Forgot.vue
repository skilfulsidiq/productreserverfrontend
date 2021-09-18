<template>
    <div>
        <h5 class="text-center">Forgot Password</h5>
         <div class="auth-form">
             <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Code</label>
                        <input type="number" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-block auth-btn">Submit</button>
                    </div>
                    <div class="mt-3 resend">
                        <span class="form-text">Resend Code</span>
                        <span><router-link to="/login" class="cursor app-link">Back to login</router-link> </span>
                       
                    </div>
                    
                </form>
                
         </div>
    </div>
</template>
<script>
export default {
    name:"Forgot"
}
</script>
<style scoped>
    .resend{
        display: flex;
        justify-content: space-between;
    }
</style>