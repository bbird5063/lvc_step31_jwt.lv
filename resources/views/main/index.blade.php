@extends('layouts.main')

@section('content')
<div>
	<!--
	Если Vue подключен: появляется на секунду, потом 'resources\js\components\Index.vue'
	Если Vue не подключен: остается 
	-->
	<Index>Vue не подключен!</Index>
</div>
@endsection