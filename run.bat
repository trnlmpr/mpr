@echo off

start cmd /k "cd client && grunt connect"
start cmd /k "cd client && grunt watch"
start cmd /k "cd server && node src/app"