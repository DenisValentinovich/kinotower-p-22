<script setup lang="ts">
const authStore = useAuthStore();
const router = useRouter();
const email = ref('');
const password = ref('');
const errMessage = ref('');
const signin = async () => {
  try {
    if (email.value &&
        password.value) {
      await authStore.signin({
        email: email.value,
        password: password.value,
      });
      router.push('/');
    }
  } catch (e:any) {
    errMessage.value = e.message;
  }
}
</script>

<template>
  <div class="row">
    <div class="col">
      <div class="card mt-5 m-auto" style="width: 25rem;">
        <div class="card-body">
          <h5 class="card-title text-center">Sign In</h5>
          <div v-if="errMessage" class="alert alert-danger" role="alert">
            {{ errMessage }}
          </div>
          <form action="" @submit.prevent="signin">
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input v-model="email" type="email" class="form-control" id="email" placeholder="Your email">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input v-model="password" type="password" class="form-control" id="password" placeholder="Your password">
            </div>
            <div>
              <button type="submit" class="btn btn-outline-success ">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

