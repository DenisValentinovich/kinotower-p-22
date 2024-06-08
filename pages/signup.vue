<script setup lang="ts">
  const gendersStore = useGenderStore();
  const authStore = useAuthStore();
  const router = useRouter();
  const fio = ref('');
  const email = ref('');
  const password = ref('');
  const birthday = ref('');
  const gender = ref(0);
  const errMessage = ref('');
  const signup = async () => {
    try {
      if (fio.value &&
          email.value &&
          password.value &&
          birthday.value &&
          gender.value) {
        await authStore.signup({
          fio: fio.value,
          email: email.value,
          password: password.value,
          birthday: birthday.value,
          gender_id: gender.value,
        });
        router.push('/');
      }
    } catch (e:any) {
      errMessage.value = e.message;
    }
  };
</script>

<template>
  <div class="row">
    <div class="col">
      <div class="card mt-5 m-auto" style="width: 25rem;">
        <div class="card-body">
          <h5 class="card-title">Regitration</h5>
          <div v-if="errMessage" class="alert alert-danger" role="alert">
            {{ errMessage }}
          </div>
          <form action="" @submit.prevent="signup">
            <div class="mb-3">
              <label for="fio" class="form-label">FIO</label>
              <input v-model="fio" type="text" class="form-control" id="fio" placeholder="Your FIO">
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input v-model="email" type="email" class="form-control" id="email" placeholder="Your email">
            </div>
            <div class="mb-3">
              <label for="password" class="form-label">Password</label>
              <input v-model="password" type="password" class="form-control" id="password" placeholder="Your password">
            </div>
            <div class="mb-3">
              <label for="birthday" class="form-label">Birthday</label>
              <input v-model="birthday" type="date" class="form-control" id="birthday" placeholder="Your birthday">
            </div>
            <div class="mb-3">
              <label for="gender" class="form-label">Gender</label>
              <select v-model="gender" class="form-select" aria-label="Default select example">
                <option
                    v-for="gender in gendersStore.genders"
                    :key="gender.id"
                    :value="gender.id">{{ gender.name }}</option>
              </select>
            </div>
            <div>
              <button type="submit" class="btn btn-outline-success ">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>
