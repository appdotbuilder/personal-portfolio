<?php

namespace Database\Factories;

use App\Models\Experience;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Experience>
 */
class ExperienceFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Experience>
     */
    protected $model = Experience::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $startDate = fake()->dateTimeBetween('-5 years', '-1 year');
        $current = fake()->boolean(25); // 25% chance of being current job
        $endDate = $current ? null : fake()->dateTimeBetween($startDate, 'now');

        return [
            'user_id' => User::factory(),
            'company' => fake()->company(),
            'position' => fake()->randomElement([
                'Senior Software Engineer',
                'Software Developer',
                'Frontend Developer',
                'Backend Developer',
                'Full Stack Developer',
                'UI/UX Designer',
                'Product Manager',
                'DevOps Engineer',
                'Software Architect',
                'Junior Developer',
            ]),
            'description' => fake()->paragraphs(2, true),
            'start_date' => $startDate,
            'end_date' => $endDate,
            'current' => $current,
            'location' => fake()->city() . ', ' . fake()->countryCode(),
        ];
    }

    /**
     * Indicate that the experience is current.
     */
    public function current(): static
    {
        return $this->state(fn (array $attributes) => [
            'current' => true,
            'end_date' => null,
        ]);
    }
}