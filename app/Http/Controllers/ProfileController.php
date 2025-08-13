<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProfileRequest;
use App\Http\Requests\UpdateProfileRequest;
use App\Models\Profile;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProfileController extends Controller
{
    /**
     * Display the user's profile.
     */
    public function show()
    {
        $profile = auth()->user()->profile;
        
        return Inertia::render('profile/show', [
            'profile' => $profile,
        ]);
    }

    /**
     * Show the form for creating a new profile.
     */
    public function create()
    {
        return Inertia::render('profile/create');
    }

    /**
     * Store a newly created profile.
     */
    public function store(StoreProfileRequest $request)
    {
        $profile = Profile::create([
            'user_id' => auth()->id(),
            ...$request->validated(),
        ]);

        return redirect()->route('profile.show')
            ->with('success', 'Profile created successfully.');
    }

    /**
     * Show the form for editing the profile.
     */
    public function edit()
    {
        $profile = auth()->user()->profile ?? new Profile(['user_id' => auth()->id()]);
        
        return Inertia::render('profile/edit', [
            'profile' => $profile,
        ]);
    }

    /**
     * Update the profile.
     */
    public function update(UpdateProfileRequest $request)
    {
        $profile = auth()->user()->profile;
        
        if ($profile) {
            $profile->update($request->validated());
        } else {
            Profile::create([
                'user_id' => auth()->id(),
                ...$request->validated(),
            ]);
        }

        return redirect()->route('profile.show')
            ->with('success', 'Profile updated successfully.');
    }
}