<?php

use App\Http\Controllers\PortfolioController;
use App\Http\Controllers\ProfileController as UserProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

// Portfolio routes
Route::get('/', [PortfolioController::class, 'index'])->name('home');
Route::get('/portfolio/{user}', [PortfolioController::class, 'show'])->name('portfolio.show');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
    
    // User profile management routes
    Route::get('/my-profile', [\App\Http\Controllers\ProfileController::class, 'show'])->name('profile.show');
    Route::get('/my-profile/create', [\App\Http\Controllers\ProfileController::class, 'create'])->name('profile.create');
    Route::post('/my-profile', [\App\Http\Controllers\ProfileController::class, 'store'])->name('profile.store');
    Route::get('/my-profile/edit', [\App\Http\Controllers\ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/my-profile', [\App\Http\Controllers\ProfileController::class, 'update'])->name('profile.update');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
