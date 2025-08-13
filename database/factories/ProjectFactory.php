<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Project>
 */
class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Project>
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $status = fake()->randomElement(['completed', 'in_progress', 'planned']);
        
        return [
            'user_id' => User::factory(),
            'title' => fake()->randomElement([
                'E-commerce Platform',
                'Task Management App',
                'Weather Dashboard',
                'Social Media Clone',
                'Blog Platform',
                'Portfolio Website',
                'Chat Application',
                'Recipe Finder',
                'Expense Tracker',
                'Music Player',
                'File Upload Service',
                'Authentication System',
            ]),
            'description' => fake()->paragraphs(2, true),
            'image_url' => fake()->imageUrl(800, 600, 'business'),
            'demo_url' => fake()->url(),
            'github_url' => 'https://github.com/' . fake()->userName() . '/' . fake()->slug(),
            'technologies' => fake()->randomElements([
                'React',
                'Vue.js',
                'Angular',
                'Node.js',
                'Express',
                'Laravel',
                'Django',
                'Python',
                'JavaScript',
                'TypeScript',
                'PHP',
                'MySQL',
                'PostgreSQL',
                'MongoDB',
                'Redis',
                'Docker',
                'AWS',
                'Firebase',
                'Stripe',
                'Tailwind CSS',
            ], random_int(3, 8)),
            'status' => $status,
            'completed_date' => $status === 'completed' 
                ? fake()->dateTimeBetween('-2 years', 'now') 
                : null,
        ];
    }

    /**
     * Indicate that the project is completed.
     */
    public function completed(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'completed',
            'completed_date' => fake()->dateTimeBetween('-2 years', 'now'),
        ]);
    }

    /**
     * Indicate that the project is in progress.
     */
    public function inProgress(): static
    {
        return $this->state(fn (array $attributes) => [
            'status' => 'in_progress',
            'completed_date' => null,
        ]);
    }
}