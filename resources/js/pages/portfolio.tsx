import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, ExternalLink, Github, MapPin, Mail, Phone, Globe, Linkedin, Calendar, Building } from 'lucide-react';

interface Profile {
    id: number;
    full_name: string;
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

interface Experience {
    id: number;
    company: string;
    position: string;
    description?: string;
    start_date: string;
    end_date?: string;
    current: boolean;
    location?: string;
    duration: string;
}

interface Project {
    id: number;
    title: string;
    description?: string;
    image_url?: string;
    demo_url?: string;
    github_url?: string;
    technologies?: string[];
    status: string;
    completed_date?: string;
}

interface Portfolio {
    profile: Profile;
    experiences: Experience[];
    projects: Project[];
}

interface Props {
    portfolio: Portfolio;
    [key: string]: unknown;
}

export default function Portfolio({ portfolio }: Props) {
    const { profile, experiences, projects } = portfolio;
    const skills = profile.skills ? profile.skills.split(',') : [];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
            <div className="container mx-auto px-4 py-8">
                {/* Back Button */}
                <div className="mb-6">
                    <Button asChild variant="ghost" size="sm">
                        <Link href="/">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Back to Home
                        </Link>
                    </Button>
                </div>

                {/* Header */}
                <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-8 mb-8">
                    <div className="flex flex-col md:flex-row items-start gap-8">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-4xl text-white font-bold">
                            {profile.full_name.split(' ').map(n => n[0]).join('')}
                        </div>
                        
                        <div className="flex-1">
                            <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                                {profile.full_name}
                            </h1>
                            {profile.title && (
                                <h2 className="text-xl text-blue-600 dark:text-blue-400 mb-4">{profile.title}</h2>
                            )}
                            {profile.bio && (
                                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                                    {profile.bio}
                                </p>
                            )}
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                {profile.email && (
                                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                                        <Mail className="w-4 h-4 mr-2" />
                                        <a href={`mailto:${profile.email}`} className="hover:text-blue-600">
                                            {profile.email}
                                        </a>
                                    </div>
                                )}
                                {profile.phone && (
                                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                                        <Phone className="w-4 h-4 mr-2" />
                                        <a href={`tel:${profile.phone}`} className="hover:text-blue-600">
                                            {profile.phone}
                                        </a>
                                    </div>
                                )}
                                {profile.location && (
                                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                                        <MapPin className="w-4 h-4 mr-2" />
                                        {profile.location}
                                    </div>
                                )}
                                {profile.website && (
                                    <div className="flex items-center text-slate-600 dark:text-slate-400">
                                        <Globe className="w-4 h-4 mr-2" />
                                        <a href={profile.website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                                            Portfolio Website
                                        </a>
                                    </div>
                                )}
                            </div>
                            
                            <div className="flex space-x-4">
                                {profile.linkedin && (
                                    <Button asChild size="sm" variant="outline">
                                        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
                                            <Linkedin className="w-4 h-4 mr-2" />
                                            LinkedIn
                                        </a>
                                    </Button>
                                )}
                                {profile.github && (
                                    <Button asChild size="sm" variant="outline">
                                        <a href={profile.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="w-4 h-4 mr-2" />
                                            GitHub
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Experience */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Building className="w-5 h-5 mr-2" />
                                    Work Experience
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    {experiences.map((exp) => (
                                        <div key={exp.id} className="border-l-2 border-blue-200 dark:border-blue-800 pl-6 pb-6 last:pb-0 relative">
                                            <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-2 top-1"></div>
                                            
                                            <div className="mb-2">
                                                <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
                                                    {exp.position}
                                                </h3>
                                                <p className="text-blue-600 dark:text-blue-400 font-medium">
                                                    {exp.company}
                                                </p>
                                            </div>
                                            
                                            <div className="flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-400 mb-3">
                                                <div className="flex items-center">
                                                    <Calendar className="w-4 h-4 mr-1" />
                                                    {exp.duration}
                                                </div>
                                                {exp.location && (
                                                    <div className="flex items-center">
                                                        <MapPin className="w-4 h-4 mr-1" />
                                                        {exp.location}
                                                    </div>
                                                )}
                                            </div>
                                            
                                            {exp.description && (
                                                <p className="text-slate-600 dark:text-slate-400">
                                                    {exp.description}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Projects */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    🚀 Projects
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-6">
                                    {projects.map((project) => (
                                        <Card key={project.id} className="border">
                                            <CardHeader>
                                                <CardTitle className="text-lg">{project.title}</CardTitle>
                                                <Badge variant={project.status === 'completed' ? 'default' : 'secondary'}>
                                                    {project.status.replace('_', ' ')}
                                                </Badge>
                                            </CardHeader>
                                            <CardContent>
                                                {project.description && (
                                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                                                        {project.description}
                                                    </p>
                                                )}
                                                
                                                {project.technologies && project.technologies.length > 0 && (
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        {project.technologies.map((tech) => (
                                                            <Badge key={tech} variant="outline" className="text-xs">
                                                                {tech}
                                                            </Badge>
                                                        ))}
                                                    </div>
                                                )}
                                                
                                                <div className="flex space-x-2">
                                                    {project.demo_url && (
                                                        <Button asChild size="sm" className="flex-1">
                                                            <a href={project.demo_url} target="_blank" rel="noopener noreferrer">
                                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                                Demo
                                                            </a>
                                                        </Button>
                                                    )}
                                                    {project.github_url && (
                                                        <Button asChild size="sm" variant="outline" className="flex-1">
                                                            <a href={project.github_url} target="_blank" rel="noopener noreferrer">
                                                                <Github className="w-4 h-4 mr-2" />
                                                                Code
                                                            </a>
                                                        </Button>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Right Sidebar */}
                    <div className="space-y-6">
                        {/* Skills */}
                        {skills.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center">
                                        🛠️ Skills & Technologies
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <Badge key={skill} variant="secondary">
                                                {skill.trim()}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}