<?php
$url = $_GET['url'] ?? '';

if (!filter_var($url, FILTER_VALIDATE_URL)) {
    header("HTTP/1.1 400 Bad Request");
    exit("Invalid URL.");
}

// MIME tipi (JPEG, PNG vs.)
$mimeType = pathinfo($url, PATHINFO_EXTENSION);
switch ($mimeType) {
    case 'png': $contentType = 'image/png'; break;
    case 'jpg':
    case 'jpeg': $contentType = 'image/jpeg'; break;
    default: $contentType = 'application/octet-stream';
}

header("Content-Type: $contentType");
header('Content-Disposition: attachment; filename="image.' . $mimeType . '"');

readfile($url);
