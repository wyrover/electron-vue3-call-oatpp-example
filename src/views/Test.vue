<template>
  <div class="test">
    <button @click="test1()">http get</button>
    <p />
    <button @click="test2()">websocket send</button>
  </div>
</template>

<script>
import { httpService } from '@/httpService'
// import Vue from 'vue'
// import WebSocket from 'vue-native-websocket'

// Vue.use(WebSocket, 'wss://127.0.0.1:8002/ws', {
//   'Sec-WebSocket-Protocol': true,
//   reconnection: true,
//   reconnectionAttempts: 5,
//   reconnectionDelay: 3000,
//   format: 'json'
// })

// let poloniexSocket = ''
// let poloniex = new Vue()
// poloniex.$options.sockets.onopen = event => {
//   poloniexSocket = event.currentTarget
//   poloniexSocket.sendObj({ command: 'ping' })
//   console.log('connected!')
//   console.log(poloniexSocket)
// }

// poloniex.$options.sockets.onmessage = res => {
//   console.log(res)
// }

export default {
  name: 'test',
  mixins: [httpService],
  components: {
    // HelloWorld
  },
  data () {
    return {
      websock: null
    }
  },
  created () {
    this.initWebSocket()
  },
  destroyed () {
    this.websocketclose()
  },
  methods: {
    async test1 () {
      const response = await this.getContacts()
      console.log(response.data)
    },

    test2 () {
      this.websocketsend('{"action":"ping"}')
    },

    initWebSocket () {
      const wsuri = 'wss://127.0.0.1:8002/ws'
      this.websock = new WebSocket(wsuri)
      this.websock.onopen = this.websocketonopen

      this.websock.onerror = this.websocketonerror

      this.websock.onmessage = this.websocketonmessage
      this.websock.onclose = this.websocketclose
    },

    websocketonopen () {
      console.log('WebSocket连接成功')
    },
    websocketonerror (e) {
      console.log('WebSocket连接发生错误')
    },
    websocketonmessage (e) {
      // const redata = JSON.parse(e.data) // 接收数据
      console.log(e.data)
    },

    websocketsend (agentData) {
      this.websock.send(agentData)
    },

    websocketclose (e) {
      console.log('connection closed (' + e.code + ')')
    }
  }
}
</script>
