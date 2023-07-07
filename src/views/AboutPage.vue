<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-title>Demo Application</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <div id="container">
        <ion-button shape="round">about page</ion-button>
        <strong> All Users</strong>
        <!-- <ion-list>
          <ion-item v-for="user in users" v-bind:key="user.id">
            <ion-label>{{ user.name }} </ion-label>
          </ion-item>
        </ion-list>
        <ion-button v-show="users" @click="users = null" color="danger">Hide Users</ion-button> -->
      </div>
    </ion-content>

  </ion-page>
</template>

<script setup lang="ts">
</script>
