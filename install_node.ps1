$zipPath = "$env:TEMP\node-v24.19.0-win-x64.zip"
$extractRoot = "$env:USERPROFILE\nodejs"
New-Item -ItemType Directory -Force -Path $extractRoot | Out-Null
Expand-Archive -Path $zipPath -DestinationPath $extractRoot -Force
$nodeDir = Join-Path $extractRoot "node-v24.19.0-win-x64"
$env:Path = "$nodeDir;$env:Path"
$userPath = [Environment]::GetEnvironmentVariable("Path", "User")
if ($userPath -notmatch [regex]::Escape($nodeDir)) {
    [Environment]::SetEnvironmentVariable("Path", "$nodeDir;$userPath", "User")
}
Write-Host "Node installed at $nodeDir"
node -v
npm -v
