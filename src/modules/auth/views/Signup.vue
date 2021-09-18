<template>
    <div>
       <h5 class="text-center">Sign Up</h5>
         <div class="auth-form">
             <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-block auth-btn">Submit</button>
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
export default {
    name:"Register"
}
</script>