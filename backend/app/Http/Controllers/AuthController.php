<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;

class AuthController extends Controller
{
    public function register(Request $request)
    {
        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => bcrypt($request->password),
        ]);
        // dd($user);
        return response()->json([
        'message' => 'User Registered Successfully',
        'user' => $user
    ]);
    }

    public function login(Request $request)
    {

    }

    public function user(Request $request)
    {

    }

    public function logout(Request $request)
    {
        
    }
}
