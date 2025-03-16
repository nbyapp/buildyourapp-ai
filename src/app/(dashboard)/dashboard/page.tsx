import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Plus, Sparkles } from "lucide-react";

export default function DashboardPage() {
  // In a real implementation, we would fetch the user's projects from the database
  const projects = [];
  const loadingProjects = false;

  return (
    <div className="container py-10">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            What do you want to build today?
          </h1>
          <p className="text-gray-600">Turn your ideas into reality with AI-powered app generation</p>
        </div>
        <Link href="/dashboard/create">
          <Button 
            size="lg" 
            className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
          >
            <Plus size={20} />
            <span>Create New App</span>
          </Button>
        </Link>
      </div>

      {loadingProjects ? (
        <div className="py-12 text-center">
          <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-gray-600">Loading your projects...</p>
        </div>
      ) : projects.length === 0 ? (
        <div className="py-12 text-center bg-gray-50 rounded-lg border border-gray-100">
          <div className="w-16 h-16 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
            <Sparkles size={24} />
          </div>
          <h2 className="text-xl font-semibold mb-2">Create your first app</h2>
          <p className="text-gray-600 max-w-md mx-auto mb-6">
            Get started by creating a new app. Just describe what you want to build and our AI will do the heavy lifting.
          </p>
          <Link href="/dashboard/create">
            <Button className="gap-2">
              Start Creating
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Project cards would go here */}
        </div>
      )}
    </div>
  );
}
