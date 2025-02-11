import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Instagram, Bot, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-black text-white relative overflow-hidden">
      {/* Grid Background */}
      <div className="fixed inset-0 grid grid-cols-12 gap-4 p-4 opacity-5 pointer-events-none">
        {Array.from({ length: 144 }).map((_, i) => (
          <div key={i} className="border border-gray-500"></div>
        ))}
      </div>

      {/* Social Links */}
      <div className="fixed left-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          <Twitter className="h-5 w-5" />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          <Facebook className="h-5 w-5" />
        </Link>
        <Link href="#" className="text-gray-400 hover:text-white transition-colors">
          <Instagram className="h-5 w-5" />
        </Link>
      </div>

      {/* Navigation Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-10">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-3 w-3 rounded-full border-2 ${i === 0 ? "bg-white border-white" : "border-gray-400"}`}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20 max-w-6xl">
        <div className="text-center space-y-8 mb-32">
          <div className="inline-block p-2 rounded-full bg-gray-800/50 mb-8">
            <Bot className="h-6 w-6" />
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Your Personal
            <br />
            AI Advisor
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto">
            Experience the power of AI-driven insights tailored just for you. Our personal AI advisor is here to guide
            you through life&apos;s complexities.
          </p>

          <div className="flex gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-gray-800/50 border-0 focus-visible:ring-1 focus-visible:ring-gray-500"
            />
            <Button className="bg-[#FFD7C9] text-black hover:bg-[#FFD7C9]/90">Join Beta</Button>
          </div>

          {/* Chat Preview */}
          <div className="mt-16 bg-gray-800/50 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Bot className="h-8 w-8 p-1.5 bg-purple-600 rounded-full" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p>Hey Emon...</p>
                    <span className="text-xs text-gray-400">6:30 pm</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 justify-end">
                    <span className="text-xs text-gray-400">6:30 pm</span>
                    <p>Yeah, Fine</p>
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <span className="text-xs text-gray-400">6:30 pm</span>
                    <p>What about you?</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-gray-600" />
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Bot className="h-8 w-8 p-1.5 bg-purple-600 rounded-full" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <p>Hey I wanted to know that about your experience on ui/ux part.</p>
                    <span className="text-xs text-gray-400">6:33 pm</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 justify-end">
                    <span className="text-xs text-gray-400">6:33 pm</span>
                    <p>Yes, I have experience of 3+ year on ui/ux</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="h-8 w-8 rounded-full bg-gray-600" />
                </div>
              </div>

              <div className="flex gap-4 items-center mt-4">
                <Input disabled placeholder="Write a message" className="bg-transparent border-2 focus-visible:ring-0" />
                <Button className="bg-[#FFD7C9] text-black hover:bg-[#FFD7C9]/90">Send</Button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our AI Advisor?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "24/7 Availability", description: "Get instant advice anytime, anywhere." },
              { title: "Personalized Insights", description: "Tailored recommendations based on your unique profile." },
              {
                title: "Continuous Learning",
                description: "Our AI evolves with you, providing ever-improving advice.",
              },
            ].map((feature, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl">
                <div className="w-12 h-12 bg-[#FFD7C9] rounded-full flex items-center justify-center mb-4">
                  <Check className="text-black w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-32">
          <h2 className="text-4xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Sarah K.",
                role: "Entrepreneur",
                quote: "This AI advisor has been a game-changer for my business decisions.",
              },
              {
                name: "Mike R.",
                role: "Student",
                quote: "I've improved my study habits and time management thanks to the personalized advice.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-xl">
                <p className="text-lg mb-4">&apos;{testimonial.quote}&apos;</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full"></div>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center mb-32">
          <h2 className="text-4xl font-bold mb-4">Ready to Experience the Future of Personal Advising?</h2>
          <p className="text-gray-400 mb-8">
            Join our beta program and be among the first to benefit from AI-powered insights.
          </p>
          <Button className="bg-[#FFD7C9] text-black hover:bg-[#FFD7C9]/90 text-lg px-8 py-6">
            Get Started Now <ArrowRight className="ml-2" />
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">AI Advisor</h3>
              <p className="text-gray-400">Empowering decisions through artificial intelligence.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 AI Advisor. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

