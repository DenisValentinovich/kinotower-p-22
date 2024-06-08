<script setup lang="ts">
  const filmsStore = useFilmsStore();
  const categoriesStore = useCategoriesStore();
  const countriesStore = useCountriesStore();
  const category = ref(null);
  filmsStore.fetchFilms();
  const goto = (page: number) => {
    filmsStore.params.page = page;
    filmsStore.fetchFilms();
  }
</script>

<template>
  <template v-if="!filmsStore.isLoading">
  <div class="row mb-5 mt-4">
    <div class="col d-flex justify-content-around flex-nowrap">

      <select v-model="category"
              @change="filmsStore.addCategoryToParams(category)"
              class="form-select w-25 me-3"
              aria-label="Default select example">
        <option :value="null">Select genre...</option>
        <option
            v-for="category in categoriesStore.categories"
            :key="category.id"
            :value="category.id">{{ category.name }}</option>
      </select>

      <select class="form-select w-25 me-3" aria-label="Default select example">
        <option>Country</option>
        <option
            v-for="country in countriesStore.countries"
            :key="country.id"
            :value="country.id"
          >{{ country.name }}</option>
      </select>

      <div class="d-flex justify-content-between w-50">
        <select class="form-select w-50 me-3" aria-label="Default select example">
          <option value="name">Name</option>
          <option value="year">Year</option>
          <option value="rating">Rating</option>
        </select>
        <button class="btn btn-dark p-2" style="min-width: 45px">RESET</button>
      </div>
    </div>
  </div>

  <div class="row mb-5">
    <div class="col d-flex justify-content-between flex-wrap w-auto" style="gap: 50px">
      <div v-for="film in filmsStore.films" class="card" style="width: 20rem;">
        <img :src="film.link_img" class="card-img-top" style="height: 210px; object-fit: contain; " alt="...">
        <div class="card-body">
          <h5 class="card-title">{{ film.name }}</h5>

          <p class="card-text mb-1">Rating: {{ film.ratingAvg }}</p>
          <p class="card-text mb-3">Duration: {{ film.duration }}</p>
          <p class="card-text">Genre:
            <template v-if="!film.categories.length">
              No genres found.
            </template>
            <template
                v-for="category in film.categories"
                :key="category.id">{{ category.name }}, </template>
          </p>

          <button class="btn btn-dark w-auto d-block  pe-3 ps-3">
            <a href="#" class="text-white">VIEW</a>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="row d-flex justify-content-center w-25 m-auto">
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
            v-for="page in filmsStore.totalPages"
            :key="page"
            class="page-item"
            :class="filmsStore.params.page == page ? 'active' : ''"
        >
          <a
              @click.prevent="goto(page)"
              class="page-link"
              href="#">{{ page }}</a>
        </li>

        <li class="page-item">
          <a class="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
  </template>
  <div v-else class="d-flex my-5 justify-content-center">
    <div class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>