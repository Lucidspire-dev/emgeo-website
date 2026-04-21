param(
  [string]$Port = ""
)

$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

if ([string]::IsNullOrWhiteSpace($Port)) {
  npm run start
} else {
  npm run start -- --port $Port
}

