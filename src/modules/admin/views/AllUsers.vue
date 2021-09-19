<template>
    <div class="container">
        <div class="my-5 ml-3 d-flex justify-content-between">
                <h3 class="dislay-3">User</h3>
                  <button class="btn btn-primary" data-toggle="modal" data-target="#user_modal"> Add User</button>
                
                
            </div>
        <div class="table-responsive">
            <table class="table  table-striped table-condensed" >
                <thead>
                    <th>s/n</th>
                    <th>Name</th>
                    <th> Email</th>
                    <th> Last Login</th>
                    <th> Last Login Ip</th>
                    
                    <th>Action</th>
                    
                </thead>
                <tbody>
                    <tr v-for="(user,i) in users" :key="user.id">
                        <td>{{i+1}}</td>
                        <td> {{user.name}} </td>
                        <td>{{user.email}}</td>
                        <td>{{user.last_login_at}}</td>
                        <td>{{user.last_login_ip}}</td>
                        <td>
                            <button class="btn btn-sm btn-success" @click="editUser(user)">Edit</button>
                            &nbsp;
                            <button class="btn btn-sm btn-danger" @click="deleteUser(user.slug)">
                                <span v-if="!delloading">Delete</span>
                                <span v-if="delloading">...</span>
                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <!-- modal -->
    <div class="modal fade" id="user_modal" data-backdrop="static" data-keyboard="false"  tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered " >
                <div class="modal-content" >
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel"> {{foredit?'Update':'Add'}} User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form @submit.prevent="addUser"  enctype="multipart/form-data">
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-12 col-xs-12">
                                <div class="form-group">
                                    <label for="">Name</label>
                                    <input type="text" class="form-control" v-model="form.name">
                                    <small class="error-text form-text" v-if="v$.name.$error">
                                        {{ v$.name.$errors[0].$message }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-md-12 col-xs-12">
                                <div class="form-group">
                                    <label for="">Email</label>
                                    <input type="email" class="form-control" v-model="form.email">
                                    <small class="error-text form-text" v-if="v$.email.$error">
                                        {{ v$.email.$errors[0].$message }}
                                    </small>
                                </div>
                            </div>
                            <div class="col-md-12 col-xs-12">
                                <div class="form-group">
                                    <label for="">Role</label>
                                    <select v-model="form.role" class="form-control">
                                        <option :value="role.id" v-for="role in roles" :key="role.id">{{role.name}}</option>
                                    </select>
                                    <!-- <small class="error-text form-text" v-if="v$.email.$error">
                                        {{ v$.email.$errors[0].$message }}
                                    </small> -->
                                </div>
                            </div>
                            <div class="col-md-12 col-xs-12">
                                <div class="form-group">
                                    <label for="">Password</label>
                                    <input type="text" class="form-control" v-model="form.password">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
                        <button type="submit" class="btn btn-primary btn-block">
                             <span v-if="!loading"> Save</span>
                            <span v-else>loading....</span>
                        </button>
                    </div>
                  </form>
                </div>
              
            </div>
    </div>
</template>

<script>
import { ref,computed, reactive } from 'vue';
import { useStore } from 'vuex';
import { required, email,minLength} from '@vuelidate/validators'
import useValidate from '@vuelidate/core';
import toast from '@/services/toast.js'

    export default {
        data(){
            return{
                forEdit:false,
                slug:''
            }
        },
        setup(){
            const store = useStore();
            let loading = ref(false);
            let delloading = ref(false);
            let users = computed(()=>{
                return store.state.admin_module.all_users;
            })
            let roles = computed(()=>{
                return store.state.admin_module.roles;
            })
            const form = reactive({
                    name:'',
                    email:'',
                    role:'',
                    password:''
            })
          const Rules = computed(() => {
            return{
                  name:{required},
                email:{required,email},
            }
        
        })
        const v$ = useValidate(Rules, form)
            //fecth all product on created
        store.dispatch("allUsersAction").then((res)=>{
            loading.value = false;
        }).catch(err=>{
            loading.value = false;
        })
        store.dispatch("allRolesAction").then((res)=>{
            loading.value = false;
        }).catch(err=>{
            loading.value = false;
        })

        const deleteUser = (slug)=>{
            delloading.value = true;
                  store.dispatch("deleteUserAction",slug).then((res)=>{
                delloading.value = false;
                toast.success('user deleted')
                store.dispatch("allUsersAction")
            }).catch(err=>{
                delloading.value = false;
                toast.error('Error deleting product')
            })
        }
         

        return{
            loading,
            delloading,
            users,
            roles,
            form,
            v$,
            deleteUser
        }
        },
        methods:{
        editUser(user){
            this.foredit=true;
            $("#user_modal").modal('show');
            this.slug = user.slug;
            this.form.name = user.name;
            this.form.email = user.email;
            //  let ob = Object.entries(user);
            // for (const [key, value] of ob) {
            //   if (key in this.form) {
            //     this.form[key] = value
            //   }
            // }
        },
        addUser(){
            this.v$.$touch();
            if(this.v$.$invalid){
                return;
            }else{
                this.loading=true
                let data = '';
                if(this.forEdit){
                 data = {form:this.form,slug:this.slug}
                }else{
                    data = this.form;
                }
               
                this.$store.dispatch(this.forEdit?"updateUserAction":"addUserAction",data).then((res)=>{
                    this.loading=false
                    $("#user_modal").modal("hide");
                    this.$store.dispatch("allUsersAction");
                    toast.success("User info updated successfully")
                }).catch(err=>{
                     this.loading=false
                     toast.error("Error updating user, try again")

                })
            }
        }
        }
    }
</script>

<style  scoped>

</style>