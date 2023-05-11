<script setup>
import {ref} from 'vue'
const tab = ref(null)
const items = ref([
    {tab: 'viral', content: 'viral content'},
    {tab: 'top', content: 'top content'}
])
const lists = ref([
    {name: 'angelbaby', title: 'im fine : ( :  [Feat. GrimesAI X WesGhost]', date: '3,812 mints - Ends in 10h', avatar: 'avatar', list: [{name: 'Craig', status: 'minted', number: '#3244', price: '0.001', time: '2h'}, {name: 'Jakub TheSymmetrical', status: 'sell', number: '#32423', price: '0.0015', time: '5h'}]},
    {name: 'Josh Savage', title: 'Bella', date: '362 mints', avatar: 'avatar', list: [{name: 'HenryChatfield', status: 'minted', number: '#324', price: '0.001', time: '2h'}, {name: 'pixelglyphman.eth', status: 'minted', number: '#6876', price: '0.0091', time: '3h'}, {name: 'Craig', status: 'buy', number: '#2364', price: '0.031', time: '5h'}, {name: 'pixelglyphman.eth', status: 'minted', number: '#33524', price: '0.0041', time: '2h'}, {name: 'HenryChatfield', status: 'minted', number: '#32464', price: '0.0012', time: '9h'}, {name: 'HenryChatfield', status: 'minted', number: '#32644', price: '0.0012', time: '12h'}]},
    {name: 'Vivid Fever Dreams', title: 'Gone Away', date: '221 mints', avatar: 'avatar', list: [{name: 'noisealt.eth', status: 'buy', number: '#367346', price: '0.001', time: '2h'}, {name: '0x685...ea3f', status: 'minted', number: '#6784', price: '0.0051', time: '2h'}]},
    {name: 'VAL?', title: 'lo tengo mal', date: '89 mints - Ends in 9h', avatar: 'icon', list: [{name: 'Aly', status: 'minted', number: '#234', price: '0.001', time: '2h'}, {name: 'noisealt.eth', status: 'sell', number: '#3546', price: '0.0013', time: '2h'}]},
    {name: 'heds', title: 'hedsTAPE 13 feat. Reo Cragun', date: '156 mints', avatar: 'icon', list: [{name: 'MOM', status: 'buy', number: '#3452', price: '0.001', time: '2h'}, {name: 'MOM', status: 'minted', number: '#5675', price: '0.0013', time: '2h'}]},
    {name: 'NOISE', title: 'Dadabots - RUG THE BOTS', date: '1436 mints', avatar: 'icon', list: [{name: 'pixelglyphman.eth', status: 'buy', number: '#2523424', price: '0.001', time: '2h'}, {name: 'Reo Cragun', status: 'buy', number: '#4574', price: '0.0014', time: '2h'}]},
    {name: 'demotapes', title: 'hold on', date: '146 mints', avatar: 'icon', list: [{name: 'Craig', status: 'minted', number: '#342', price: '0.001', time: '2h'}, {name: 'Aly', status: 'minted', number: '#3453', price: '0.001', time: '2h'}]},
    {name: 'Domino', title: 'IRS', date: '25 mints', avatar: 'icon', list: [{name: 'Aly', status: 'buy', number: '#25654', price: '0.001', time: '2h'}, {name: 'Camel Lightmode', status: 'minted', number: '#565463', price: '0.001', time: '2h'}]},
    {name: 'Louis Futon', title: 'David Blaine', date: '37 mints', avatar: 'icon', list: [{name: 'MOM', status: 'buy', number: '#432523', price: '0.001', time: '2h'}, {name: 'Reo Cragun', status: 'sell', number: '#34535', price: '0.0016', time: '2h'}]},
])

const menuLists = ref([
    {title: 'Add to playlist', icon: 'mdi-playlist-music-outline'},
    {title: 'Add to queue', icon: 'mdi-playlist-plus'},
    {title: 'Copy Link', icon: 'mdi-content-copy'},
    {title: 'Share', icon: 'mdi-export-variant'},
])

const clickHeart = () => {
    console.log('hello')
}
</script>
<template>
  <v-app>
    <v-card>
      <v-tabs
        v-model="tab"
      >
        <v-tab v-for="item in items" :key="item.tab">{{item.tab}}</v-tab>
      </v-tabs>
      <v-window v-model="tab">
        <v-window-item
          v-for="item in items"
          :key="item.tab"
        >
        <v-expansion-panels variant="popout" class="pa-4">
            <v-expansion-panel
                v-for="(message, i) in lists"
                :key="i"
                hide-actions
                class="custom-expansion-panel"
            >
                <v-expansion-panel-title>
                <v-row
                    align="center"
                    class="spacer"
                    no-gutters
                >
                    <v-col>
                        <v-img
                            class="rounded-lg"
                            v-if="message.avatar"
                            width="200"
                            height="200"
                            alt="Avatar"
                            src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                        ></v-img>
                        <v-icon
                        v-else
                        :color="message.color"
                        :icon="message.icon"
                        ></v-icon>
                    </v-col>
        
                    <v-col cols="6"
                    class="hidden-xs-only text-left ms-2"
                    >
                     <div class="mb-5">
                        <v-col cols="12" class="py-1"><span class="text-disabled">{{ message.name }}</span></v-col>
                        <v-col cols="12" class="py-1"><p class="text-h5">{{ message.title }}</p></v-col>
                        <v-col cols="12" class="py-1"><span class="text-disabled">{{ message.date }}</span></v-col>
                     </div>
                     <div class="d-flex flex-row align-center">
                        <div class="d-flex flex-column align-center justify-space-between">
                            <v-avatar color="info" class="justify-center">
                                <v-icon icon="mdi-account-circle"></v-icon>
                            </v-avatar>
                            <v-list-item                                
                                title="Marcus Obrien"
                                subtitle="Network Engineer"
                            ></v-list-item>
                        </div>
                        <div class="d-flex flex-column align-center justify-space-between">
                            <v-avatar color="info" class="justify-center">
                                <v-icon icon="mdi-account-circle"></v-icon>
                            </v-avatar>
                            <v-list-item                                
                                title="Marcus Obrien"
                                subtitle="Network Engineer"
                            ></v-list-item>
                        </div>
                        <div class="d-flex flex-column align-center justify-space-between">
                            <v-avatar color="info" class="justify-center">
                                <v-icon icon="mdi-account-circle"></v-icon>
                            </v-avatar>
                            <v-list-item                                
                                title="Marcus Obrien"
                                subtitle="Network Engineer"
                            ></v-list-item>
                        </div>
                     </div>
                    </v-col>
                    <v-col cols="2"
                    class="text-no-wrap text-center"
                    >
                    <v-btn class="bg-black text-white">Collect Now</v-btn>
                    </v-col>
                    <v-col class="d-flex flex-colum justify-center" cols="1">
                        <v-icon size="x-large" @click="clickHeart">mdi-heart-outline</v-icon>
                        <v-menu
                            transition="scale-transition"
                        >
                            <template v-slot:activator="{ props }">
                                <v-icon size="x-large" v-bind="props">mdi-dots-horizontal</v-icon>
                            </template>
                            <v-list>
                                <v-list-item
                                    v-for="(item, i) in menuLists"
                                    :key="i"
                                >
                                    <div class="d-flex flex-direction">
                                        <v-icon>{{ item.icon }}</v-icon>
                                        <v-list-item-title class="pl-5">{{ item.title }}</v-list-item-title>
                                    </div>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-col>
                </v-row>
                </v-expansion-panel-title>
                
                <v-expansion-panel-text>
                    <v-list >
                        <v-list-subheader class="text-h5">Recent Activity</v-list-subheader>
                        <v-col v-for="(item, i) in lists" :key="i">
                            <div class="d-flex flex-row align-center" v-for="(list, j) in item.list" :key="j">
                                <div class="">
                                    <v-avatar
                                        class="ma-3 rounded-lg"
                                        size="125"
                                        rounded="0"
                                    >
                                        <v-img src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"></v-img>
                                    </v-avatar>
                                    <span class="text-xl px-5">{{list.name}} </span>
                                    <span v-if="list.status" class="text-xl text-disabled px-2">{{list.status}} </span>
                                    <span v-if="list.number" class="text-xl text-disabled px-2"> {{list.number}} for</span>
                                    <span v-if="list.price" class="text-xl text-disabled px-2"> {{list.price}} ETH</span>
                                </div>
                                <span class="d-flex text-xl text-disabled justify-space-end">{{ list.time }}</span>
                            </div>
                        </v-col>
                    </v-list>
                </v-expansion-panel-text>
            </v-expansion-panel>
            </v-expansion-panels>
        </v-window-item>
      </v-window>
    </v-card>
  </v-app>
</template>

<style scoped>
.custom-expansion-panel{
    max-width: calc(100% - 32px);
}
</style>