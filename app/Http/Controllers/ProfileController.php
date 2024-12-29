<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        $tripledots = [
            'triple_dots_1' => Inertia::lazy(fn () => 'bcda1'),
            'triple_dots_2' => 'bcda2',
            'triple_dots_3' => [
                'a1' => Inertia::lazy(fn () => 'bcda1'),
            ],
        ];

        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
            'arr1' => [1, 2, 3],
            'arr2' => Inertia::lazy(fn () => [
                1 => ['aaa1', 'aaa2', 'aaa3'],
                2 => ['bbb1', 'bbb2', 'bbb3'],
                3 => ['ccc1', 'ccc2', 'ccc3'],
            ][$request->arr1]),
            'test' => Inertia::lazy(fn () => 'bcda1'),
            'go' => Inertia::lazy(fn () => 'abc'),
            'nested' => Inertia::lazy(fn () => [
                'a' => Inertia::lazy(fn () => 'abc'),
                'b' => Inertia::lazy(fn () => 'def'),
            ]),
            ...$tripledots,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }
}
