FROM node:18-alpine

RUN apk update && apk add git

ADD ./server app

WORKDIR app

ENV NODE_ENV production

RUN npm install && npm cache clear --force

#EXPOSE 5060
#EXPOSE 5060/udp

CMD [ "node", "server.js" ]
