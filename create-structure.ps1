$folders = @(
"src/assets",
"src/components",
"src/pages",
"src/services",
"src/firebase",
"src/styles"
)

foreach ($folder in $folders) {
    New-Item -ItemType Directory -Force -Path $folder | Out-Null
}

$files = @(
"src/pages/Home.jsx",
"src/pages/Login.jsx",
"src/pages/MockTest.jsx",
"src/pages/Notes.jsx",
"src/pages/AIChat.jsx",
"src/pages/Profile.jsx",
"src/components/Navbar.jsx",
"src/components/Sidebar.jsx",
"src/components/Card.jsx",
"src/components/Button.jsx",
"src/firebase/firebase.js"
)

foreach ($file in $files) {
    New-Item -ItemType File -Force -Path $file | Out-Null
}

Write-Host "✅ Mission TAT AI structure created successfully!"