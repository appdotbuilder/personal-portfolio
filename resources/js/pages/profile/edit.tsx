import React from 'react';
import { useForm } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AppShell } from '@/components/app-shell';

interface Profile {
    id?: number;
    user_id: number;
    full_name?: string;
    title?: string;
    bio?: string;
    email?: string;
    phone?: string;
    location?: string;
    website?: string;
    linkedin?: string;
    github?: string;
    skills?: string;
}

interface Props {
    profile: Profile;
    [key: string]: unknown;
}

export default function EditProfile({ profile }: Props) {
    const { data, setData, patch, post, processing, errors } = useForm({
        full_name: profile.full_name || '',
        title: profile.title || '',
        bio: profile.bio || '',
        email: profile.email || '',
        phone: profile.phone || '',
        location: profile.location || '',
        website: profile.website || '',
        linkedin: profile.linkedin || '',
        github: profile.github || '',
        skills: profile.skills || '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (profile.id) {
            patch(route('profile.update'));
        } else {
            post(route('profile.store'));
        }
    };

    return (
        <AppShell>
            <div className="max-w-4xl mx-auto py-8">
                <Card>
                    <CardHeader>
                        <CardTitle>
                            {profile.id ? 'Edit Profile' : 'Create Profile'}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="full_name" className="text-sm font-medium">
                                        Full Name *
                                    </label>
                                    <input
                                        id="full_name"
                                        type="text"
                                        value={data.full_name}
                                        onChange={(e) => setData('full_name', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    />
                                    {errors.full_name && (
                                        <p className="text-red-500 text-sm">{errors.full_name}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="title" className="text-sm font-medium">
                                        Professional Title
                                    </label>
                                    <input
                                        id="title"
                                        type="text"
                                        value={data.title}
                                        onChange={(e) => setData('title', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="e.g., Full Stack Developer"
                                    />
                                    {errors.title && (
                                        <p className="text-red-500 text-sm">{errors.title}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm">{errors.email}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">
                                        Phone
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={data.phone}
                                        onChange={(e) => setData('phone', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-sm">{errors.phone}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="location" className="text-sm font-medium">
                                        Location
                                    </label>
                                    <input
                                        id="location"
                                        type="text"
                                        value={data.location}
                                        onChange={(e) => setData('location', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="e.g., San Francisco, CA"
                                    />
                                    {errors.location && (
                                        <p className="text-red-500 text-sm">{errors.location}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="website" className="text-sm font-medium">
                                        Website
                                    </label>
                                    <input
                                        id="website"
                                        type="url"
                                        value={data.website}
                                        onChange={(e) => setData('website', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="https://yourwebsite.com"
                                    />
                                    {errors.website && (
                                        <p className="text-red-500 text-sm">{errors.website}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="linkedin" className="text-sm font-medium">
                                        LinkedIn URL
                                    </label>
                                    <input
                                        id="linkedin"
                                        type="url"
                                        value={data.linkedin}
                                        onChange={(e) => setData('linkedin', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="https://linkedin.com/in/yourprofile"
                                    />
                                    {errors.linkedin && (
                                        <p className="text-red-500 text-sm">{errors.linkedin}</p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="github" className="text-sm font-medium">
                                        GitHub URL
                                    </label>
                                    <input
                                        id="github"
                                        type="url"
                                        value={data.github}
                                        onChange={(e) => setData('github', e.target.value)}
                                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="https://github.com/yourusername"
                                    />
                                    {errors.github && (
                                        <p className="text-red-500 text-sm">{errors.github}</p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="bio" className="text-sm font-medium">
                                    Professional Bio
                                </label>
                                <textarea
                                    id="bio"
                                    value={data.bio}
                                    onChange={(e) => setData('bio', e.target.value)}
                                    rows={4}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Tell us about yourself, your experience, and what you're passionate about..."
                                />
                                {errors.bio && (
                                    <p className="text-red-500 text-sm">{errors.bio}</p>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="skills" className="text-sm font-medium">
                                    Skills & Technologies
                                </label>
                                <input
                                    id="skills"
                                    type="text"
                                    value={data.skills}
                                    onChange={(e) => setData('skills', e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="JavaScript, React, Node.js, Python, etc. (comma separated)"
                                />
                                <p className="text-sm text-gray-500">
                                    Separate skills with commas (e.g., JavaScript, React, Node.js)
                                </p>
                                {errors.skills && (
                                    <p className="text-red-500 text-sm">{errors.skills}</p>
                                )}
                            </div>

                            <div className="flex justify-end">
                                <Button type="submit" disabled={processing}>
                                    {processing ? 'Saving...' : (profile.id ? 'Update Profile' : 'Create Profile')}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppShell>
    );
}