<template>
  <div>
    <v-card-title>
      <span class="headline">Make a Team</span>
    </v-card-title>
    <v-card-text>
      <v-container>
        <v-row>
          <v-form v-model="valid" @submit.prevent="createTeam">
            <v-col cols="12">
              <v-text-field
                label="Team Name"
                v-model="teamName"
                :rules="nameRules"
                required
              >
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Team Desciption"
                v-model="teamDescription"
                :rules="descRules"
                required
              >
              </v-text-field>
            </v-col>
            <v-btn type="submit" :disabled="!valid" color="primary">
              Submit
            </v-btn>
          </v-form>
        </v-row>
      </v-container>
    </v-card-text>
  </div>
</template>

<script>
import { db } from "@/firebase/init.js";

export default {
  name: "MakeTeam",
  data: function() {
    return {
      teamName: "",
      nameRules: [v => !!v || "Name is required"],
      teamDescription: "",
      descRules: [v => !!v || "Description is required"],
      valid: false
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    createTeam() {
      // create a new team
      db.collection("teams")
        .add({
          teamName: this.teamName,
          teamDescription: this.teamDescription,
          teamMembers: [db.collection("users").doc(this.user.uid)],
          teamInvites: []
        })
        .then(teamRef => {
          // update user database
          console.log(teamRef.id);
          db.collection("users")
            .doc(this.user.uid)
            .update({
              teamID: teamRef.id
            })
            .then(() => {
              this.$store.dispatch("getUser");
            });
        });
    }
  }
};
</script>

<style></style>
