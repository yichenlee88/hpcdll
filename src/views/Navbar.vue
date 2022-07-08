<template>
<nav class = "navbar navbar-expand-lg navbar-dark bg-dark">
  <div class = "container-fluid">
    <a class = "navbar-brand fs-3" href = "#" > 高效能計算與深度學習研究室 </a>
    <button class = "navbar-toggler" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navbarSupportedContent" aria-controls = "navbarSupportedContent" aria-expanded = "false" aria-label = "Toggle navigation">
      <span class = "navbar-toggler-icon"> </span>
    </button>
    <div class = "collapse navbar-collapse" id = "navbarSupportedContent">
      <ul class = "navbar-nav ms-auto mb-2 mb-lg-0">
        <li class = "nav-item">
          <router-link class = "nav-link active" to="/">HOME</router-link>
        </li>
        <li class = "nav-item">
          <router-link class = "nav-link active" to="/research">RESEARCH</router-link>
        </li>
        <li class = "nav-item">
          <router-link class = "nav-link active" to="/publication">PUBLICATION</router-link>
        </li>
        <li class = "nav-item">
          <router-link class = "nav-link active" to="/youtube">YOUTUBE</router-link>
        </li>
        <li class = "nav-item">
          <router-link class = "nav-link active" to="/members">MERBERS</router-link>
        </li>
        <li class = "nav-item">
          <router-link class = "nav-link active" to="/gallery">GALLERY</router-link>
        </li>
        <li class = "nav-item">
          <router-link class = "nav-link active" to="/resource">RESOURCE</router-link>
        </li>
        <li class = "nav-item">
          <router-link class = "nav-link active" to="/contact">CONTACT</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<style>
.svg-icon {
  display: inline-flex;
  align-self: left;
}
</style>