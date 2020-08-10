#!/bin/bash

echo "$(pwd)"
cd BuildArtifacts
echo -e "\e[33m\tRemoving old publish output"
echo "$(pwd)"
sudo rm -rf /var/www/AcademyFront-DEV-APP/
echo -e "copying AcademyFront-DEV-APP"
sudo cp dist/. -r /var/www/AcademyFront-DEV-APP/
echo -e "copied AcademyFront-DEV-APP"
