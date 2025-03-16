"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Wand2 } from "lucide-react";

export function CreateAppForm() {
  const [appDescription, setAppDescription] = useState("");
  const [appName, setAppName] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!appDescription.trim()) return;

    setIsGenerating(true);
    
    try {
      // This is a placeholder for the actual API call to generate the app
      // In the real implementation, we would call our AI service here
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Navigate to the app builder page or show a success message
      console.log("App generation started!", { appName, appDescription });
      
      // Redirect to the app builder page (in a real implementation)
      // router.push(`/dashboard/create/build?id=${generatedAppId}`);
    } catch (error) {
      console.error("Error generating app:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="appName" className="block text-sm font-medium text-gray-700 mb-1">
              App Name (Optional)
            </label>
            <Input
              id="appName"
              placeholder="My Amazing App"
              value={appName}
              onChange={(e) => setAppName(e.target.value)}
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="appDescription" className="block text-sm font-medium text-gray-700 mb-1">
              Describe Your App
            </label>
            <div className="relative">
              <Textarea
                id="appDescription"
                placeholder="Describe your dream app... (e.g., 'A meditation app with daily challenges')"
                value={appDescription}
                onChange={(e) => setAppDescription(e.target.value)}
                className="min-h-[150px] resize-none pl-10"
              />
              <Wand2 size={18} className="absolute left-3 top-3 text-gray-400" />
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              type="submit" 
              disabled={!appDescription.trim() || isGenerating}
              className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90"
              size="lg"
            >
              {isGenerating ? (
                <>
                  <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  Generate App
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
