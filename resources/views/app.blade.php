<!DOCTYPE html>
<html
    lang="{{ str_replace("_", "-", app()->getLocale()) }}"
    dir="{{ app()->getLocale() == "ar" ? "rtl" : "ltr" }}"
>
<head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <title inertia>{{ config("app.name", "Laravel") }}</title>
    <meta name="csrf-token" content="{{ csrf_token() }}"/>

    <!-- Favicon -->
    <link rel="icon" type="image/x-icon" href="{{ asset('images/favicon/favicon.ico') }}"/>
    <link rel="icon" type="image/png" sizes="16x16" href="{{ asset('images/favicon/favicon-16x16.png') }}"/>
    <link rel="icon" type="image/png" sizes="32x32" href="{{ asset('images/favicon/favicon-32x32.png') }}"/>
    <link rel="apple-touch-icon" sizes="180x180" href="{{ asset('images/favicon/apple-touch-icon.png') }}"/>
    <link rel="icon" type="image/png" sizes="192x192" href="{{ asset('images/favicon/android-chrome-192x192.png') }}"/>
    <link rel="icon" type="image/png" sizes="512x512" href="{{ asset('images/favicon/android-chrome-512x512.png') }}"/>
    <link rel="manifest" href="{{ asset('images/favicon/site.webmanifest') }}"/>

    <!-- Scripts -->
    @viteReactRefresh
    @vite(["resources/js/cubeta-starter.tsx"])
    @inertiaHead
    @routes
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    <link
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
    />
</head>

<body>
@inertia
</body>
</html>
