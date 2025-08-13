<?php

namespace Database\Factories;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Profile>
 */
class ProfileFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Profile>
     */
    protected $model = Profile::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'user_id' => User::factory(),
            'full_name' => fake()->name(),
            'title' => fake()->randomElement([
                'Full Stack Developer',
                'Frontend Developer',
                'Backend Developer',
                'UI/UX Designer',
                'Product Manager',
                'Software Engineer',
                'DevOps Engineer',
            ]),
            'bio' => fake()->paragraph(3),
            'email' => fake()->email(),
            'phone' => fake()->phoneNumber(),
            'location' => fake()->city() . ', ' . fake()->countryCode(),
            'website' => fake()->url(),
            'linkedin' => 'https://linkedin.com/in/' . fake()->userName(),
            'github' => 'https://github.com/' . fake()->userName(),
            'skills' => implode(',', fake()->randomElements([
                'JavaScript',
                'TypeScript',
                'React',
                'Vue.js',
                'Node.js',
                'Python',
                'PHP',
                'Laravel',
                'MySQL',
                'PostgreSQL',
                'MongoDB',
                'Docker',
                'AWS',
                'Git',
                'HTML',
                'CSS',
                'Sass',
                'Tailwind CSS',
            ], random_int(5, 12))),
        ];
    }
}