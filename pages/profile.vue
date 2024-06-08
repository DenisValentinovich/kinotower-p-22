<script setup lang="ts">

</script>

<template>
  <div class="row mt-4">
    <div class="col">
      <h4>Ivan</h4>
      <ul class="list-inline fs-8">
        <li>Count scores: 40</li>
        <li>Count reviews: 20</li>
      </ul>
      <ul class="nav nav-underline" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">My profile</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">My reviews</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">My scores</button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
          <ul class="list-inline fs-8 mt-2">
            <li>Email: ivan@ivan.ivan</li>
            <li>Birthday: 27.09.2006</li>
            <li>Gender: Male</li>
          </ul>
          <div>
            <button class="btn btn-warning me-2">Edit</button>
            <button class="btn btn-danger">Delete Account</button>
          </div>
        </div>
        <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
          <div class="row">
            <div class="col">
<!--              Review start-->
              <div class="row p-2">
                <div class="col">
                  <div class="row">
                    <div class="col-md-8 fw-bold">
                      Film name
                    </div>
                    <div class="col-md-2">
                      is approved
                    </div>
                    <div class="col-md-2">
                      08.06.2024 16:00:01
                    </div>
                  </div>

                  <div class="row mt-2">
                    <div class="col-md-10">Abobs up!</div>
                    <div class="col-md-2">
                      <button class="btn btn-danger btn-sm">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
              <hr>
<!--        Review end-->
              <div class="row p-2">
                <div class="col">
                  <!--                  1 row start-->
                  <div class="row">
                    <div class="col-md-8 fw-bold">
                      Film name
                    </div>
                    <div class="col-md-2">
                      is approved
                    </div>
                    <div class="col-md-2">
                      08.06.2024 16:00:01
                    </div>
                  </div>

                  <div class="row mt-2">
                    <div class="col-md-10">Abobs up!</div>
                    <div class="col-md-2">
                      <button class="btn btn-danger btn-sm">Remove</button>
                    </div>
                  </div>
                </div>

              </div>
              <hr>
              <div class="row p-2">
                <div class="col">
                  <!--                  1 row start-->
                  <div class="row">
                    <div class="col-md-8 fw-bold">
                      Film name
                    </div>
                    <div class="col-md-2">
                      is approved
                    </div>
                    <div class="col-md-2">
                      08.06.2024 16:00:01
                    </div>
                  </div>

                  <div class="row mt-2">
                    <div class="col-md-10">Abobs up!</div>
                    <div class="col-md-2">
                      <button class="btn btn-danger btn-sm">Remove</button>
                    </div>
                  </div>
                </div>

              </div>
              <hr>
              <div class="row p-2">
                <div class="col">
                  <!--                  1 row start-->
                  <div class="row">
                    <div class="col-md-8 fw-bold">
                      Film name
                    </div>
                    <div class="col-md-2">
                      is approved
                    </div>
                    <div class="col-md-2">
                      08.06.2024 16:00:01
                    </div>
                  </div>

                  <div class="row mt-2">
                    <div class="col-md-10">Abobs up!</div>
                    <div class="col-md-2">
                      <button class="btn btn-danger btn-sm">Remove</button>
                    </div>
                  </div>
                </div>

              </div>
              <hr>
              <div class="row p-2">
                <div class="col">
                  <!--                  1 row start-->
                  <div class="row">
                    <div class="col-md-8 fw-bold">
                      Film name
                    </div>
                    <div class="col-md-2">
                      is approved
                    </div>
                    <div class="col-md-2">
                      08.06.2024 16:00:01
                    </div>
                  </div>

                  <div class="row mt-2">
                    <div class="col-md-10">Abobs up!</div>
                    <div class="col-md-2">
                      <button class="btn btn-danger btn-sm">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
              <hr>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">...</div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>