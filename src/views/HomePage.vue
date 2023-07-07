<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title class="ion-text-center">Demo Application</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-toolbar>
        <ion-grid>
          <ion-row>
            <ion-col class="bg-blue ion-text-center ion-text-white" size="3">
              <p style="color: whitesmoke;">{{ hasil }}</p>
            </ion-col>
            <ion-col class="bg-yellow">
              <ion-item>
                <p>{{ screen }}</p>
              </ion-item>
            </ion-col>
          </ion-row>
        </ion-grid>
        <ion-grid>
          <ion-row>
            <ion-col size="3" v-for="(button, index) in buttons" :key="index">
              <MyButton :label="button" @click="addNumber(button)" />
            </ion-col>
            <ion-col>
              <MyButton label="C" @click="(hasil = 0), (screen = '')" />
            </ion-col>
          </ion-row>
        </ion-grid>
      </ion-toolbar>
    </ion-content>
  </ion-page>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MyButton from "@/components/MyButton.vue";

// @ts-ignore
import axios from "axios";

const hasil = ref(0);
const screen = ref("");
const users = ref(null);
const buttons = ["1", "2", "3", "+", "4", "5", "6", "-", "7", "8", "9", "*", "0", "00", "/", "="];

const addNumber = (val: string) => {
  if (val === "=") {
    hasil.value = eval(screen.value);
    screen.value = "";
  } else {
    screen.value += val;
  }
};
const loadUsers = () => {
  axios.get("https://jsonplaceholder.typicode.com/users").then((response: any) => {
    users.value = response.data; // assigns the data from api call to the users variable
  });
};
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;

  transform: translateY(-50%);
}

.bg-blue {
  background-color: blue;
}
.bg-yellow {
  background-color: yellow;
}

.top-margin {
  top: 20%;
}
.usersShowing {
  margin-top: 20%;
}
</style>
