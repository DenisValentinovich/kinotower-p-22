<script setup lang="ts">
const authStore = useAuthStore();

</script>
<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand">KinoTower</NuxtLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NuxtLink to="/" class="nav-link active">Home</NuxtLink>
          </li>
        </ul>
        <div v-if="!authStore.authData" class="text-end">
          <a @click.prevent="$router.push('/signin')" href="#" class="btn btn-outline-success me-2" >Sign In</a>
          <a @click.prevent="$router.push('/signup')" href="#" class="btn btn-outline-primary" >Sign Up</a>
        </div>
        <div v-else>
          <a href="#" class="me-2" @click.prevent="$router.push('/profile')">{{ authStore.authData.fio }}</a>
          <a @click.prevent="authStore.signout(),$router.push('/')" href="#" class="btn btn-outline-danger me-2" >Sign out</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <slot />
  </div>
  <div class="container-fluid">
    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <a href="/" class="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
          <svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg>
        </a>
        <span class="mb-3 mb-md-0 text-body-secondary">© 2024 Kinotower, Inc</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="text-body-secondary" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </footer>
  </div>

</template>
