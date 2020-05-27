<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">Register</div>
                    <div class="card-body">
                        <div v-if="error" class="alert alert-danger">{{error}}</div>
                        <form action="#" @submit.prevent="submit">
                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                                <div class="col-md-6">
                                    <input
                                            id="name"
                                            type="name"
                                            class="form-control"
                                            name="name"
                                            value
                                            required
                                            autofocus
                                            v-model="form.name"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">Email</label>

                                <div class="col-md-6">
                                    <input
                                            id="email"
                                            type="email"
                                            class="form-control"
                                            name="email"
                                            value
                                            required
                                            autofocus
                                            v-model="form.email"
                                    />
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                                <div class="col-md-6">
                                    <input
                                            id="password"
                                            type="password"
                                            class="form-control"
                                            name="password"
                                            required
                                            v-model="form.password"
                                    />
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary">Register</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    /*Each input field in the form is bound to the defined properties
    in the data() function using v-model
     */
    import firebase from "firebase";
    export default {
        name: "Register",
        data(){
            return{
                //form model object to create a manual user
                form: {
                    name: "",
                    email: "",
                    password: ""
                },
                error: null
            };
        },
        methods: {
            submit(){
                firebase
                .auth()
                //takes the inputs from the form object above and uses the firebase function
                .createUserWithEmailAndPassword(this.form.email, this.form.password)
                //promise handler
                .then(data =>{
                    data.user
                    //adds the user name to firebase user object
                    .updateProfile({
                        displayName: this.form.name
                    })
                    .then(() => {
                        this.$router.replace(({name: "UserHome"}))
                    });
                }) // error handler
                .catch((err => {
                    this.error=err.message;
                }));
            }
        }
    }
</script>

<style scoped>

</style>
