#!/bin/bash
echo "working directory"
echo "$(pwd)"
declare -x path="$(pwd)"

echo $path;

sudo docker-compose rm --all && sudo docker-compose build --no-cache

for img in $(docker-compose config | awk '{if ($1 == "image:") print $2;}'); do
  images="$images $img"
done

sudo docker save -o af-web.img $images

sudo chmod 777 af-web.img
