"use client";

import { useState, useMemo } from "react";
import AppCard from "@/components/AppCard";

const apps = [
  { 
    name: "Xender", 
    fileName: "Xender.apk",
    description: "Fast file sharing app",
    icon: "📱",
    color: "bg-blue-500",
    category: "Utility"
  },
  { 
    name: "GeezIME", 
    fileName: "geezIme.apk",
    description: "Ethiopian keyboard",
    icon: "⌨️",
    color: "bg-green-500",
    category: "Input"
  },
  { 
    name: "Lachi", 
    fileName: "lachi.apk",
    description: "Music streaming app",
    icon: "🎵",
    color: "bg-purple-500",
    category: "Entertainment"
  },
  { 
    name: "Nebar", 
    fileName: "nebar.apk",
    description: "News and information",
    icon: "📰",
    color: "bg-orange-500",
    category: "News"
  },
  // Add more apps here...
];

const categories = ["All", "Utility", "Entertainment", "News", "Input"];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter apps based on search query and category
  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesSearch = app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          app.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === "All" || app.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <span className="text-2xl">📱</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            App Store
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover and download amazing apps for your Android device
          </p>
        </header>

        {/* Search and Filter Section */}
        <section className="mb-8">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
            {/* Search Input */}
            <div className="mb-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search apps by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 pl-12 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  🔍
                </span>
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="mt-4 text-sm text-gray-500">
              Showing {filteredApps.length} of {apps.length} apps
            </div>
          </div>
        </section>

        {/* Apps Grid */}
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-12">
          {filteredApps.map((app) => (
            <AppCard 
              key={app.name} 
              name={app.name} 
              fileName={app.fileName}
              description={app.description}
              icon={app.icon}
              color={app.color}
              category={app.category}
            />
          ))}
        </section>

        {/* No Results Message */}
        {filteredApps.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">No apps found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </div>
        )}

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm">
          <div className="bg-white/50 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto">
            <p className="mb-2">💡 After downloading, open the APK file on your Android device to install.</p>
            <p className="text-xs">Make sure you&apos;ve allowed installations from unknown sources in your phone settings.</p>
          </div>
        </footer>
      </div>
    </main>
  );
}
