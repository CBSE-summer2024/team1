@echo off

REM Navigate to team1 directory
cd team1

REM Open a new Command Prompt for DecideTeam
start cmd /k "cd DecideTeam && npm install && npm start"

REM Open a new Command Prompt for DiscoveryTeam
start cmd /k "cd DiscoveryTeam && npm install && npm start"

REM Open a new Command Prompt for UserManagementTeam
start cmd /k "cd UserManagementTeam && npm install && npm start"

REM Open a new Command Prompt for host
start cmd /k "cd host && npm install && npm start"

start cmd /k "cd FetchData && npm install && npm run build"