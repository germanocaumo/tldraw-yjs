import { Server } from '@hocuspocus/server'
import { SQLite } from '@hocuspocus/extension-sqlite'
import { Logger } from "@hocuspocus/extension-logger";
import 'dotenv/config'

const server = Server.configure({
  port: process.env.SERVER_PORT || 1234,
  name: process.env.SERVER_LOG_PREFIX || "hocuspocus",

  async onConnect() {
    console.log('🔮')
  },

  extensions: [
    new SQLite({
      database: process.env.DATABASE_FILE || 'db.sqlite',
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
