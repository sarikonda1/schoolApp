#!/bin/bash
echo "working directory"
echo "$(pwd)"
declare -x path="$(pwd)"

sudo cd /AcademyFront-App/
sudo docker-compose down
sudo docker rmi academyfront-app

echo $path;

echo -e "\e[33mWorking on $path/BuildArtifacts"
echo -e "ll  $path/BuildArtifacts"
sudo cd $path
sudo cd BuildArtifacts


sudo rm /AcademyFront-App/docker-compose.yml
sudo rm /AcademyFront-App/af-web.img

sudo cp docker-compose.yml /AcademyFront-App/docker-compose.yml
sudo cp af-web.img /AcademyFront-App/af-web.img

sudo cd /AcademyFront-App/
sudo docker-compose rm --all

sudo docker load -i af-web.img
sudo docker-compose up -d
