<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">

	<!-- Scripts -->
	@vite(['resources/sass/app.scss', 'resources/js/app.js'])

	<title>JWT SPA</title>
</head>

<body class="p-5">
	<div id="app">
		@yield('content')
	</div>
</body>

</html>