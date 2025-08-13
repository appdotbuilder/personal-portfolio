import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { AppShell } from '@/components/app-shell';
import { User, FileText, Briefcase, FolderOpen, ExternalLink, Plus } from 'lucide-react';

export default function Dashboard() {
    return (
        <AppShell>
            <div className="space-y-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">
                        Portfolio Dashboard 🎨
                    </h1>
                    <p className="text-slate-600 dark:text-slate-400 mt-2">
                        Manage your professional portfolio and showcase your work
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Profile</CardTitle>
                            <User className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">1</div>
                            <p className="text-xs text-muted-foreground">
                                Professional profile
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Experience</CardTitle>
                            <Briefcase className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">3</div>
                            <p className="text-xs text-muted-foreground">
                                Work positions
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Projects</CardTitle>
                            <FolderOpen className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">5</div>
                            <p className="text-xs text-muted-foreground">
                                Completed projects
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Portfolio Views</CardTitle>
                            <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">127</div>
                            <p className="text-xs text-muted-foreground">
                                This month
                            </p>
                        </CardContent>
                    </Card>
                </div>

                {/* Portfolio Management */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                            Portfolio Management
                        </h2>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <User className="w-5 h-5 mr-2" />
                                    Personal Profile
                                </CardTitle>
                                <CardDescription>
                                    Manage your personal information, bio, and contact details
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex space-x-3">
                                    <Button asChild>
                                        <Link href="/my-profile/edit">
                                            <FileText className="w-4 h-4 mr-2" />
                                            Edit Profile
                                        </Link>
                                    </Button>
                                    <Button asChild variant="outline">
                                        <Link href="/my-profile">
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            View Profile
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <Briefcase className="w-5 h-5 mr-2" />
                                    Work Experience
                                </CardTitle>
                                <CardDescription>
                                    Add and manage your professional work history
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button disabled variant="outline" className="w-full">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Coming Soon - Add Experience
                                </Button>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center">
                                    <FolderOpen className="w-5 h-5 mr-2" />
                                    Projects Portfolio
                                </CardTitle>
                                <CardDescription>
                                    Showcase your best work and projects
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button disabled variant="outline" className="w-full">
                                    <Plus className="w-4 h-4 mr-2" />
                                    Coming Soon - Add Project
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                            Portfolio Preview
                        </h2>

                        <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
                            <CardHeader>
                                <CardTitle>Your Public Portfolio</CardTitle>
                                <CardDescription>
                                    This is how your portfolio appears to visitors
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-white dark:bg-slate-800 rounded-lg p-4 border">
                                    <div className="flex items-center space-x-4 mb-3">
                                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold">
                                            JD
                                        </div>
                                        <div>
                                            <h3 className="font-semibold">John Doe</h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400">Full Stack Developer</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                                        Passionate developer with 5+ years of experience building web applications...
                                    </p>
                                    <div className="flex space-x-2">
                                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">JavaScript</span>
                                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">React</span>
                                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-xs">Laravel</span>
                                    </div>
                                </div>

                                <Button asChild className="w-full">
                                    <Link href="/">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        View Full Portfolio
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Tips Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>💡 Portfolio Tips</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-3 text-sm">
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-500">✓</span>
                                    <span>Keep your profile updated with recent projects</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-500">✓</span>
                                    <span>Include links to live demos and GitHub repos</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-500">✓</span>
                                    <span>Write clear, concise project descriptions</span>
                                </div>
                                <div className="flex items-start space-x-2">
                                    <span className="text-green-500">✓</span>
                                    <span>Highlight your best and most relevant work</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </AppShell>
    );
}