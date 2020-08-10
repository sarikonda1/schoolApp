#!/bin/bash

echo "$(pwd)"
cd BuildArtifacts
echo -e "\e[33m\tRemoving old publish output"
echo "$(pwd)"
sudo rm -rf /var/www/AcademyFront-QA-APP/
echo -e "copying AcademyFront-QA-APP"
sudo cp dist/. -r /var/www/AcademyFront-QA-APP/
echo -e "copied AcademyFront-QA-APP"
