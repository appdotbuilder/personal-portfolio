<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PortfolioController extends Controller
{
    /**
     * Display the portfolio homepage.
     */
    public function index(Request $request)
    {
        // Get a sample user with their portfolio data for demo
        $user = User::with(['profile', 'experiences', 'projects'])
            ->whereHas('profile')
            ->first();

        return Inertia::render('welcome', [
            'portfolio' => $user ? [
                'profile' => $user->profile,
                'experiences' => $user->experiences,
                'projects' => $user->projects,
            ] : null,
        ]);
    }

    /**
     * Display a specific user's portfolio.
     */
    public function show(User $user)
    {
        $user->load(['profile', 'experiences', 'projects']);

        if (!$user->profile) {
            abort(404, 'Portfolio not found');
        }

        return Inertia::render('portfolio', [
            'portfolio' => [
                'profile' => $user->profile,
                'experiences' => $user->experiences,
                'projects' => $user->projects,
            ],
        ]);
    }
}