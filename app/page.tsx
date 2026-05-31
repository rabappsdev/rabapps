"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { 
  Code, 
  Sparkles,
  ArrowRight,
  Star,
  Mail,
  ExternalLink,
  Globe,
  Zap,
  Rocket,
  Award,
  Users,
  Download,
  TrendingUp,
  ShoppingCart,
  Calculator,
  Gamepad2,
  Thermometer,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  const [typedText, setTypedText] = useState("");
  const fullText = "I turn ideas into powerful mobile apps";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const apps = [
    {
      name: "SalesTrack POS",
      description: "User-friendly point of sale app for small businesses. Manage sales, repairs, inventory.",
      icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
      tags: ["Business", "POS"],
      link: "https://play.google.com/store/apps/details?id=com.rabapps.salestrackpos"
    },
    {
      name: "Equiva",
      description: "Split bills and track group expenses effortlessly. Set financial goals, real-time sync.",
      icon: <Calculator className="w-8 h-8 text-blue-400" />,
      tags: ["Finance", "Social"],
      link: "https://play.google.com/store/apps/details?id=com.rabapps.equiva"
    },
    {
      name: "Reflex Tap Game",
      description: "Challenging reaction game. Test your patience by avoiding taps. Online leaderboard.",
      icon: <Gamepad2 className="w-8 h-8 text-blue-400" />,
      tags: ["Game", "Arcade"],
      link: "https://play.google.com/store/apps/details?id=com.rabapps.donttap"
    },
    {
      name: "CPU Monitor",
      description: "Real-time CPU temperature and RAM monitor. Floating overlay, game mode, battery-friendly.",
      icon: <Thermometer className="w-8 h-8 text-blue-400" />,
      tags: ["Utility", "System"],
      link: "https://play.google.com/store/apps/details?id=com.rabapps.cpucoremonitor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-xl text-white">RabApps</span>
            </div>
            <div className="hidden md:flex gap-8">
              <a href="#home" className="text-gray-300 hover:text-white transition">Home</a>
              <a href="#apps" className="text-gray-300 hover:text-white transition">Apps</a>
              <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
            </div>
            <a 
              href="https://play.google.com/store/apps/developer?id=RabApps+Dev"
              target="_blank"
              className="px-5 py-2 bg-blue-600 rounded-full text-sm font-medium text-white hover:bg-blue-700 transition"
            >
              Google Play
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center pt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-8">
            <Sparkles className="w-3 h-3" />
            <span>Mobile Developer</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              RabApps Dev
            </span>
          </h1>
          
          <div className="h-16 mb-4">
            <p className="text-xl md:text-2xl text-gray-300">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            Building high-performance Android apps that solve real problems.
            From business tools to engaging games.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#apps" 
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg transition inline-flex items-center gap-2"
            >
              Explore My Apps
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link 
              href="/about" 
              className="px-8 py-3 border border-blue-500 rounded-full font-semibold text-blue-400 hover:bg-blue-500/10 transition"
            >
              About Me
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 pt-10 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-blue-400">4+</div>
              <div className="text-gray-500 text-sm">Active Apps</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400">1K+</div>
              <div className="text-gray-500 text-sm">Downloads</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">4.5</div>
              <div className="text-gray-500 text-sm">Avg Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-indigo-400">3+</div>
              <div className="text-gray-500 text-sm">Years</div>
            </div>
          </div>
        </div>
      </section>

      {/* Apps Section */}
      <section id="apps" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
              <Zap className="w-3 h-3" />
              <span>Portfolio</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-blue-400">Applications</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Each app is crafted with attention to detail and user experience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {apps.map((app, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-2"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
                    {app.icon}
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-white">
                  {app.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {app.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 rounded-full bg-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={app.link}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 transition"
                >
                  <Download className="w-4 h-4" />
                  Get on Google Play
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why RabApps Banner */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm mb-6">
            <TrendingUp className="w-3 h-3" />
            <span>Why Choose Me</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Quality Apps That Deliver Results
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
            Every app is optimized for performance, usability, and user satisfaction.
          </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2 text-white bg-white/5 px-5 py-3 rounded-full">
              <Award className="w-5 h-5 text-blue-400" />
              <span>Quality First</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/5 px-5 py-3 rounded-full">
              <Users className="w-5 h-5 text-blue-400" />
              <span>User Focused</span>
            </div>
            <div className="flex items-center gap-2 text-white bg-white/5 px-5 py-3 rounded-full">
              <Rocket className="w-5 h-5 text-blue-400" />
              <span>Fast & Reliable</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-3xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Build Something Great
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Have an app idea? I'm always open to opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://play.google.com/store/apps/developer?id=RabApps+Dev"
                target="_blank"
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-semibold text-white hover:shadow-lg transition"
              >
                <Download className="w-4 h-4" />
                View All Apps
              </a>
              <a 
                href="mailto:rabapps.dev@gmail.com"
                className="inline-flex items-center gap-2 px-8 py-3 border border-white/20 rounded-full font-semibold text-white hover:bg-white/10 transition"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© 2025 RabApps Dev. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="https://github.com/rabapps" target="_blank" className="text-gray-500 hover:text-white transition">
              <Globe className="w-5 h-5" />
            </a>
            <a href="mailto:rabapps.dev@gmail.com" className="text-gray-500 hover:text-white transition">
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}