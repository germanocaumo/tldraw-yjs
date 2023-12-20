import { Server } from '@hocuspocus/server'
import { SQLite } from '@hocuspocus/extension-sqlite'
import { Logger } from "@hocuspocus/extension-logger";

const server = Server.configure({
  port: 1234,
  name: "hocuspocus",

  async onConnect() {
    console.log('🔮')
  },

  extensions: [
    new SQLite({
      database: 'db.sqlite',
    }),
    new Logger({
      onLoadDocument: true,
      onChange: false,
      onConnect: true,
      onDisconnect: true,
      onUpgrade: true,
      onRequest: true,
      onListen: true,
      onDestroy: true,
      onConfigure: true,
    }),
  ],
})

server.listen()
