# Genera miniatura (poster) y MP4 web desde videos .MOV de cada predio.
# Uso:
#   1. Coloque un video por predio en media-source/rentals/ (ej. predio-01.mov)
#   2. Ejecute: .\scripts\prepare-rental-media.ps1
# Requiere ffmpeg en PATH: https://ffmpeg.org/download.html

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
$sourceDir = Join-Path $root "media-source\rentals"
$videoOut = Join-Path $root "src\assets\videos\rentals"
$imageOut = Join-Path $root "src\assets\images\real-estate"

New-Item -ItemType Directory -Force -Path $sourceDir, $videoOut, $imageOut | Out-Null

if (-not (Get-Command ffmpeg -ErrorAction SilentlyContinue)) {
  Write-Host "Instale ffmpeg y vuelva a ejecutar este script." -ForegroundColor Red
  exit 1
}

$videos = Get-ChildItem -Path $sourceDir -Include *.mov, *.mp4, *.MOV, *.MP4 -File
if ($videos.Count -eq 0) {
  Write-Host "No hay videos en $sourceDir" -ForegroundColor Yellow
  Write-Host "Nombre sugerido: predio-01.mov, predio-02.mov, ..."
  exit 0
}

foreach ($file in $videos) {
  $id = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
  $mp4 = Join-Path $videoOut "$id.mp4"
  $jpg = Join-Path $imageOut "$id.jpg"

  Write-Host "Procesando $($file.Name)..."

  ffmpeg -y -i $file.FullName `
    -vf "scale='min(1280,iw)':-2" -c:v libx264 -crf 28 -preset medium -c:a aac -b:a 96k `
    $mp4

  ffmpeg -y -i $mp4 -ss 00:00:02 -vframes 1 -q:v 2 $jpg
}

Write-Host ""
Write-Host "Listo. Actualice real-estate-data.ts con:" -ForegroundColor Green
Write-Host "  image: 'assets/images/real-estate/predio-01.jpg'"
Write-Host "  posterImage: 'assets/images/real-estate/predio-01.jpg'"
Write-Host "  videoUrl: 'assets/videos/rentals/predio-01.mp4'"
