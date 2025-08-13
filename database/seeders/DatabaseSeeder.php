<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Profile;
use App\Models\Experience;
use App\Models\Project;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create a demo user with complete portfolio
        $user = User::factory()->create([
            'name' => 'John Doe',
            'email' => 'john@example.com',
        ]);

        // Create profile for the demo user
        Profile::factory()->create([
            'user_id' => $user->id,
            'full_name' => 'John Doe',
            'title' => 'Full Stack Developer',
            'bio' => 'Passionate full-stack developer with 5+ years of experience building web applications. I love creating user-friendly interfaces and scalable backend systems.',
            'email' => 'john@example.com',
            'phone' => '+1 (555) 123-4567',
            'location' => 'San Francisco, CA',
            'website' => 'https://johndoe.dev',
            'linkedin' => 'https://linkedin.com/in/johndoe',
            'github' => 'https://github.com/johndoe',
            'skills' => 'JavaScript,TypeScript,React,Node.js,PHP,Laravel,MySQL,PostgreSQL,Docker,AWS,Git,HTML,CSS,Tailwind CSS',
        ]);

        // Create work experiences
        Experience::factory()->create([
            'user_id' => $user->id,
            'company' => 'TechCorp Inc.',
            'position' => 'Senior Full Stack Developer',
            'description' => 'Led development of customer-facing web applications serving 100K+ users. Implemented microservices architecture and improved application performance by 40%.',
            'start_date' => '2022-01-01',
            'end_date' => null,
            'current' => true,
            'location' => 'San Francisco, CA',
        ]);

        Experience::factory()->create([
            'user_id' => $user->id,
            'company' => 'StartupXYZ',
            'position' => 'Full Stack Developer',
            'description' => 'Built the entire platform from scratch using React and Laravel. Collaborated with design team to create intuitive user experiences.',
            'start_date' => '2020-03-01',
            'end_date' => '2021-12-31',
            'current' => false,
            'location' => 'Remote',
        ]);

        Experience::factory()->create([
            'user_id' => $user->id,
            'company' => 'WebSolutions LLC',
            'position' => 'Junior Developer',
            'description' => 'Developed responsive websites for small businesses. Gained experience in HTML, CSS, JavaScript, and PHP.',
            'start_date' => '2019-06-01',
            'end_date' => '2020-02-28',
            'current' => false,
            'location' => 'New York, NY',
        ]);

        // Create projects
        Project::factory()->create([
            'user_id' => $user->id,
            'title' => 'E-commerce Platform',
            'description' => 'A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.',
            'demo_url' => 'https://demo-ecommerce.johndoe.dev',
            'github_url' => 'https://github.com/johndoe/ecommerce-platform',
            'technologies' => ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'Tailwind CSS'],
            'status' => 'completed',
            'completed_date' => '2023-08-15',
        ]);

        Project::factory()->create([
            'user_id' => $user->id,
            'title' => 'Task Management App',
            'description' => 'A collaborative task management application with real-time updates, team collaboration, and project tracking.',
            'demo_url' => 'https://taskmanager.johndoe.dev',
            'github_url' => 'https://github.com/johndoe/task-manager',
            'technologies' => ['Vue.js', 'Laravel', 'MySQL', 'Socket.io', 'Bootstrap'],
            'status' => 'completed',
            'completed_date' => '2023-05-20',
        ]);

        Project::factory()->create([
            'user_id' => $user->id,
            'title' => 'Weather Dashboard',
            'description' => 'A beautiful weather dashboard with forecasts, interactive maps, and location-based weather alerts.',
            'demo_url' => 'https://weather.johndoe.dev',
            'github_url' => 'https://github.com/johndoe/weather-dashboard',
            'technologies' => ['React', 'TypeScript', 'OpenWeather API', 'Chart.js', 'Tailwind CSS'],
            'status' => 'in_progress',
            'completed_date' => null,
        ]);

        // Create additional users for testing
        User::factory(3)->create()->each(function ($user) {
            Profile::factory()->create(['user_id' => $user->id]);
            Experience::factory(random_int(2, 4))->create(['user_id' => $user->id]);
            Project::factory(random_int(3, 6))->create(['user_id' => $user->id]);
        });
    }
}
