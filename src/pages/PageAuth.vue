<template>
  <q-page class="flex flex-center">
    <q-card class="auth bg-primary text-white q-pa-lg">
      <q-card-section>
        <ToolbarTitle />
      </q-card-section>
      <q-card-section>
        <q-tabs v-model="tab">
          <q-tab name="login" label="Login" />
          <q-tab name="register" label="Register" />
        </q-tabs>
      </q-card-section>

      <q-card-section>
        <q-form @submit="formSubmit">
          <q-input
            v-model="credentials.email"
            class="q-mb-md"
            :bg-color="useLightOrDark('white', 'black')"
            filled
            label="Email"
            type="email"
            autocomlete="email"
          />
          <q-input
            v-model="credentials.password"
            class="q-mb-md"
            :bg-color="useLightOrDark('white', 'black')"
            filled
            label="Password"
            type="password"
            autocomlete="current-password"
          />
          <q-btn
            class="full-width"
            outline
            color="white"
            type="submit"
            :label="submitButtonTitle"
            no-caps
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed, reactive } from "vue";
import { useRouter } from "vue-router";
import { useQuasar } from "quasar";
import { useLightOrDark } from "src/use/useLightOrDark";
import ToolbarTitle from "src/components/Layout/ToolbarTitle.vue";

const router = useRouter();

const $q = useQuasar();

const tab = ref("login");

const submitButtonTitle = computed(() => {
  return tab.value === "login" ? "Login" : "Register";
});

const credentials = reactive({
  email: "",
  password: "",
});

const formSubmit = () => {
  if (!credentials.email || !credentials.password) {
    $q.dialog({
      title: "Error",
      message: "Please enter an email & password motherflipper!",
    });
  } else {
    formSubmitSuccess();
  }
};

const formSubmitSuccess = () => {
  if (tab.value === "register") {
    console.log("Register user with these credentials: ++", credentials);
  } else {
    console.log("Login user with these credentials: ++", credentials);
  }
  router.push('/')
};
</script>
