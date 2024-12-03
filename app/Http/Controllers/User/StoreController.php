<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\User\StoreRequest;
use App\Models\User;
//use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class StoreController extends Controller
{
	public function __invoke(StoreRequest $request)
	{
		$data = $request->validated();
		$data['password'] = Hash::make($data['password']);

		/**
		 * Проверяем
		 * ----------
		 * Если пользователь с таким 'email' есть - возвращаем сообщение 
		 */
		$user = User::where('email', $data['email'])->first();
		if ($user) return response(['error' => 'Пользователь с таким email уже существует'],403); // меняем 'message' на 'error'
		
		/**
		 * Если пользователя с таким 'email' нет - регистрируем
		 * firstOrCreate меняем на create (т.к. мы уже проверили, что его нет в базе)
		 */
		$user = User::create($data);

		$token = auth()->tokenById($user->id); /*  tokenById(подчеркнут красным), он из JWT-расширения  - мы поменяли 'api' => [
			'driver' => 'jwt', */

		return response(['access_token' => $token]); // response-ответ, отклик
	}
}
