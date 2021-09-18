<template>
    <div>
         <h5 class="text-center">Login</h5>
         <div class="auth-form">
             <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1">
                    </div>
                    <div class="form-group">
                        <router-link class="cursor app-link text-muted" to="/forgot-password">Forgot Password</router-link>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary btn-block auth-btn">Submit</button>
                    </div>
                    <div class="mt-3">
                        <p class="text-center "> Don't have account? 
                            <span> <router-link to="/register" class="cursor app-link">Sign up</router-link> </span>
                            </p>
                    </div>
                    
                </form>
                <div class="or-line my-3">
                    <span class="line"></span>
                    <span class="or text-muted text-center">Or login with</span>
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
    name:"Login"
}
</script>
<style >
    .auth-form{
        margin: 3rem 0;
        padding:1px 20px;
    }
    .auth-form .form-control{
        height: 50px;
    }
    .auth-btn{
        height: 50px;
    }
    .or-line{
        display: flex;
        justify-content: space-between;
        width:100%;
    }
    .or-line .line{
        border-top:1px solid #999;
        width:30%;
    }
    .or-line .or{
        width:30%;
        margin-top:-0.7rem;
    }
    .social-btn{
        display: flex;
        justify-content: space-between;
    }
    .social-btn .btn{
        width:45%;
    }
    .app-link{
    text-decoration: none;
    }
    .app-link:hover{
    text-decoration: none;
    }
</style>