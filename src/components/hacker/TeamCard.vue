<template>
  <div style="width: 100%; background: white; color: black">
    <div v-if="this.user.teamID" class="card">
      <h1>{{ teamName }}</h1>
      <p>{{ description }}</p>
      <div class="flex">
        <div>
          <v-dialog v-model="inviteMember" max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                style="margin-right: 0.5rem"
              >
                Invite
              </v-btn>
            </template>
            <v-card><InviteMember /></v-card>
          </v-dialog>
        </div>
        <div>
          <v-dialog v-model="leaveTeam" max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Leave
              </v-btn>
            </template>
            <v-card><LeaveTeam /></v-card>
          </v-dialog>
        </div>
      </div>
    </div>
    <div v-else class="card" style="padding: 0 !important">
      <div class="flex">
        <div style="height: 20rem; width: 50%">
          <v-dialog v-model="makeTeam" max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Make a Team
              </v-btn>
            </template>
            <v-card><MakeTeam /></v-card>
          </v-dialog>
        </div>
        <div style="height: 20rem; width: 50%">
          <v-dialog v-model="checkInvitations" max-width="290">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark v-bind="attrs" v-on="on">
                Check Invitations
              </v-btn>
            </template>
            <v-card><CheckInvitations /></v-card>
          </v-dialog>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MakeTeam from "./MakeTeam.vue";
import CheckInvitations from "./CheckInvitations.vue";
import InviteMember from "./InviteMember.vue";
import LeaveTeam from "./LeaveTeam.vue";

export default {
  name: "TeamCard",
  components: {
    InviteMember,
    LeaveTeam,
    MakeTeam,
    CheckInvitations
  },
  methods: {},
  data: () => ({
    teamName: "Test!",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe blanditiis facilis illum minima aliquid possimus sit voluptatum, eum eligendi fugiat.",
    teamID: null,
    inviteMember: false,
    leaveTeam: false,
    makeTeam: false,
    checkInvitations: false
  }),
  mounted() {},
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style scoped>
.card {
  padding: 1rem;
  /* border-radius: 1rem !important; */
  height: 20rem;
  background: white;
}

.flex {
  display: flex;
  flex-direction: row;
}
</style>
