#!/bin/bash

set -e

TLDRAW_HOMEPAGE=tldraw
TLDRAW=/var/bigbluebutton/$TLDRAW_HOMEPAGE

npm run build
sudo rm -rf $TLDRAW
sudo cp -r ./dist $TLDRAW
sudo chown --recursive bigbluebutton:bigbluebutton $TLDRAW

BBB_NGINX_FILES_PATH=/etc/bigbluebutton/nginx
if [ ! -f $BBB_NGINX_FILES_PATH/tldraw.nginx ]; then
  sudo cp ./tldraw.nginx $BBB_NGINX_FILES_PATH
  sudo systemctl reload nginx
fi
