<script setup>
import Title from "./Title.vue";
const details = [
  {
    title: "RELEASE DATE",
    data: "May 06, 2023",
  },
  {
    title: "SONG CONTRACT ADDRESS",
    data: "0x35a3...50a4d3",
  },
  {
    title: "SPLITS CONTRACT ADDRESS",
    data: "0x052c...f7a009",
  },
  {
    title: "BLOCKCHAIN",
    data: "Ethereum",
  },
  {
    title: "TOKEN STANDARD",
    data: "ERC-721",
  },
  {
    title: "RESALE ROYALTY",
    data: "10%",
  },
];
</script>
<template>
  <div>
    <Title
      text="Behind the music"
      subtext="About im fine : ( : [Feat. GrimesAI X WesGhost] by angelbaby"
    ></Title>
    <div class="c-detail-text">
      im fine is an emotional song for us. it explores all the things we are
      feeling rn with AI - the excitement, the fear, and the uncertainty.
      <br />
      this is one of the first songs ever w grimesai and tbh its been a wild
      week.
      <br />
      weve been up for days finessing this track. getting to work on this w
      WesGhost was really special too.
      <br />
      this all started when we sat down in flux studios at nft nyc. it was one
      of those days where shxt just falls out of u. as soon as that hook came
      out we all felt like this one was special. it was like the universe
      aligning. a couple weeks later, right after we had been at all weekend in
      the studio tweakin the production with brandon from pretty much, grimes
      announces that anyone can use her ai voice. it was wild. we knew this song
      would be perfect for a collab with her. 2 days later we dropped the clip
      and it went viral on twitter. in the year 3045, where im from, we have all
      types of ai voice shxt so using this stuff is like analog for me.
      <br />
      basically i have to reteach myself everything. feelin all the nostalgia
      lol. i had been playin w tons of these voices the last few months so when
      grimes said anyone could use hers, me and the humies were ready to go. we
      went IN ON THIS ONE. a lot of people dont realize it yet but workin with
      ai is really a collaboration between the artists and the tech. we stayed
      up for 40 hrs straight workin on this track. ai doesnt mean you just stop
      being creative its a new extension of our creativity.
      <br />
      an ai world is filled with both fear and excitement. we felt that making
      this and i hope u feel it too when u listen. big luv from ab, a big thank
      u to WesGhost for making this one w me and to GrimesAI for the opportunity
      🖤
    </div>
  </div>
  <div class="mt-16">
    <Title
      text="Audience"
      subtext="Claim a permanent seat in the audience by collecting this song."
    ></Title>
    <v-row>
      <!-- first audience section -->
      <v-col cols="4" v-for="k in 3" :key="k">
        <img
          src="/img/music-detail.jpg"
          alt="audience"
          class="c-audience-img"
        />
      </v-col>
      <!-- second audience section -->
      <v-col md="2" sm="3" v-for="j in 12" :key="j">
        <img
          src="/img/music-detail.jpg"
          alt="audience"
          class="c-audience-img"
        />
      </v-col>
      <!-- latest audience section -->
      <v-col md="1" sm="2" v-for="i in 12" :key="i">
        <img
          src="/img/music-detail.jpg"
          alt="audience"
          class="c-audience-img"
        />
      </v-col>
    </v-row>
  </div>
  <div class="mt-16">
    <Title
      text="Rewards"
      subtext="View all rewards and perks for collecting this release."
    ></Title>
    <v-layout class="c-reward-content">
      <v-card class="pb-5 w-50">
        <img src="/img/reward.png" alt="reward" class="ma-5" />
        <v-card-title>Golden Egg</v-card-title>
        <v-card-text
          >The egg is only revealed after the song sells out. The winner
          receives a unique 1/1 NFT chosen by the artist.</v-card-text
        >
      </v-card>
      <v-card class="pb-5 w-50">
        <img src="/img/reward.png" alt="reward" class="ma-5" />
        <v-card-title>Comment Wall</v-card-title>
        <v-card-text
          >Make a public comment on the song. Prove you were a supporter from
          way back in the day. Sell your NFT, and your comment is replaceable by
          the new owner.</v-card-text
        >
      </v-card>
    </v-layout>
  </div>
  <div class="mt-16">
    <Title
      text="Credits & Splits"
      subtext="View credits and collaborator splits of this release."
    ></Title>
    <div class="text-h6 my-5">Performed by:</div>
    <v-row>
      <v-col sm="12" md="6">
        <v-layout class="c-credits-item">
          <v-layout class="align-center">
            <img
              src="/img/avatar-1.jpg"
              width="32"
              height="32"
              class="rounded-sm mr-5"
            />
            <div class="text-subtitle-1">GrimesAI</div>
          </v-layout>
          <v-badge content="50%" inline class="d-flex"></v-badge>
        </v-layout>
      </v-col>
      <v-col sm="12" md="6">
        <v-layout class="c-credits-item">
          <v-layout class="align-center">
            <img
              src="/img/avatar-1.jpg"
              width="32"
              height="32"
              class="rounded-sm mr-5"
            />
            <div class="text-subtitle-1">WesGhost</div>
          </v-layout>
          <v-badge content="25%" inline class="d-flex"></v-badge>
        </v-layout>
      </v-col>
      <v-col sm="12" md="6">
        <v-layout class="c-credits-item">
          <v-layout class="align-center">
            <img
              src="/img/avatar-1.jpg"
              width="32"
              height="32"
              class="rounded-sm mr-5"
            />
            <div class="text-subtitle-1">angelbaby</div>
          </v-layout>
          <v-badge content="25%" inline class="d-flex"></v-badge>
        </v-layout>
      </v-col>
    </v-row>
  </div>
  <div class="mt-16">
    <Title
      text="Contract Details"
      subtext="View details of the contracts for this release."
    ></Title>
    <v-table class="c-contract-table-container">
      <tbody>
        <tr v-for="item in details" :key="item.name">
          <td>
            <v-layout class="align-center">
              <span class="text-button">{{ item.title }}</span>
            </v-layout>
          </td>
          <td class="text-right">{{ item.data }}</td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>
<style scoped>
.c-detail-text {
  line-height: 26px;
  font-size: 18px;
  font-weight: 400;
}
.c-audience-img {
  width: 100%;
  height: same-as-width;
  border-radius: 10px;
}
.c-reward-content {
  gap: 2rem;
}
.c-credits-item {
  justify-content: space-between;
  border-bottom: thin solid rgba(255, 255, 255, 0.12);
  padding: 10px 0px;
}
.c-contract-table-container {
  background: transparent;
}
</style>
