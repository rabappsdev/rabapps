"use client";

import Link from "next/link";
import { Code, Mail, Globe, ArrowLeft, Heart, Target, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Code className="w-6 h-6 text-blue-400" />
              <span className="font-bold text-xl text-white">RabApps</span>
            </div>
            <Link href="/" className="text-gray-300 hover:text-white transition flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-6">
            <Heart className="w-3 h-3" />
            <span>Passionate Creator</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            More Than Just Code
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            I'm a solo developer dedicated to creating meaningful apps that improve daily life.
          </p>
        </div>

        {/* Story Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-400" />
              My Mission
            </h2>
            <p className="text-gray-300 leading-relaxed">
              To build software that not only works flawlessly but also brings genuine value to users.
              I believe great design and intuitive functionality can transform everyday tasks.
            </p>
            <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-white/10 rounded-xl p-6">
              <p className="text-gray-300 italic">
                "I started as a self-taught developer, driven by curiosity and the desire to solve my own problems. 
                Now I turn ideas into real products that help people."
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-purple-400" />
              What I Do
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-sm">📱</div>
                <div>
                  <h3 className="font-semibold">Android App Development</h3>
                  <p className="text-gray-400 text-sm">Native (Kotlin/Java) and Cross-platform (Flutter)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-sm">🎨</div>
                <div>
                  <h3 className="font-semibold">UI/UX Design</h3>
                  <p className="text-gray-400 text-sm">Modern, intuitive interfaces that users love</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-pink-500/20 rounded-lg flex items-center justify-center text-sm">🔥</div>
                <div>
                  <h3 className="font-semibold">Performance Optimization</h3>
                  <p className="text-gray-400 text-sm">Fast, efficient, battery-friendly apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-center mb-10">Technologies I Work With</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {["Kotlin", "Java", "Flutter", "Firebase", "Next.js", "Tailwind CSS", "Git", "Figma"].map((tech) => (
              <span key={tech} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm hover:border-blue-500/50 transition">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-10 border-t border-white/10">
          <a 
            href="https://play.google.com/store/apps/developer?id=RabApps+Dev"
            target="_blank"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full font-medium hover:shadow-lg transition"
          >
            <Globe className="w-4 h-4" />
            View My Google Play Profile
          </a>
        </div>
      </div>
    </div>
  );
}