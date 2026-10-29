$path = "coverage\lcov.info"
if (Test-Path $path) {
    (Get-Content $path) -replace '\\', '/' | Set-Content $path
    Write-Host "[fix-lcov] Done."
} else {
    Write-Host "[fix-lcov] ERROR: $path not found"
    exit 1
}