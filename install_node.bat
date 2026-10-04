@echo off
setlocal
set "ZIP=%TEMP%\node-v24.19.0-win-x64.zip"
set "EXTRACT=%USERPROFILE%\nodejs"
mkdir "%EXTRACT%" 2>nul
"C:\Windows\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -ExecutionPolicy Bypass -Command "Expand-Archive -LiteralPath '%ZIP%' -DestinationPath '%EXTRACT%' -Force"
set "NODE_DIR=%EXTRACT%\node-v24.19.0-win-x64"
set "PATH=%NODE_DIR%;%PATH%"
echo Node directory: %NODE_DIR%
"%NODE_DIR%\node.exe" -v
"%NODE_DIR%\npm.cmd" -v
