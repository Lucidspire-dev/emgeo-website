param(
  [string]$Port = "3000"
)

# Run from repo root no matter where this script is invoked from.
$repoRoot = Split-Path -Parent $PSScriptRoot
Set-Location $repoRoot

# Use the npm script defined in package.json.
npm run dev -- --port $Port

