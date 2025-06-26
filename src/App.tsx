import { ArrowRight, TrendingUp, Shield, Zap, Star, Users, CheckCircle } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden abmfx-gradient">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="flex justify-center items-center mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <TrendingUp className="w-12 h-12 text-yellow-400" />
              </div>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
              <span className="block">ABMFX</span>
              <span className="block text-yellow-400">Trading</span>
            </h1>
            
            {/* Tagline */}
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Professional forex trading platform designed for serious traders. 
              Experience advanced analytics, real-time market data, and premium tools 
              that deliver results.
            </p>
            
            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="gold-gradient text-navy-900 hover:opacity-90 font-semibold px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Trading Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-4 text-lg rounded-xl"
              >
                Watch Demo
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Regulated & Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <span>50K+ Active Traders</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>4.9/5 Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-navy-900 mb-4">Choose Your Trading Plan</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan that matches your trading style and goals
          </p>
        </div>
        
        {/* Basic and Standard Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Basic Plan */}
          <Card className="card-shadow card-hover border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-gray-50 to-gray-100 pb-8">
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl font-bold text-navy-900">Basic Plan</CardTitle>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
              <CardDescription className="text-gray-600 text-lg">
                Perfect for beginners and casual traders
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-navy-900">$49</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Real-time market data</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Basic charting tools</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Email support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Mobile app access</span>
                </li>
              </ul>
              <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white rounded-xl py-3">
                Get Started
              </Button>
            </CardContent>
          </Card>

          {/* Standard Plan */}
          <Card className="card-shadow card-hover border-0 rounded-2xl overflow-hidden">
            <CardHeader className="bg-gradient-to-br from-blue-50 to-blue-100 pb-8">
              <CardTitle className="text-2xl font-bold text-navy-900">Standard Plan</CardTitle>
              <CardDescription className="text-gray-600 text-lg">
                Enhanced features for active traders
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-navy-900">$99</span>
                <span className="text-gray-600 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Advanced analytics</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Technical indicators</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>Risk management tools</span>
                </li>
              </ul>
              <Button className="w-full bg-navy-900 hover:bg-navy-800 text-white rounded-xl py-3">
                Upgrade Now
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Premium Plan - Wide Card */}
        <Card className="card-shadow card-hover border-0 rounded-2xl overflow-hidden bg-gradient-to-r from-navy-900 to-navy-800 text-white">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-yellow-400 text-navy-900 px-4 py-2 rounded-full text-sm font-bold">
                    PREMIUM
                  </div>
                  <Zap className="w-6 h-6 text-yellow-400" />
                </div>
                <h3 className="text-4xl font-bold mb-4">Pro Trader Suite</h3>
                <p className="text-xl text-gray-300 mb-6">
                  The ultimate trading experience with institutional-grade tools and dedicated support
                </p>
                <div className="mb-8">
                  <span className="text-5xl font-bold text-yellow-400">$249</span>
                  <span className="text-gray-300 ml-2 text-xl">/month</span>
                </div>
                <Button 
                  size="lg" 
                  className="gold-gradient text-navy-900 hover:opacity-90 font-semibold px-8 py-4 rounded-xl"
                >
                  Go Premium
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>AI-powered insights</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>Custom indicators</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>Automated trading</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>White-label solutions</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>24/7 dedicated support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>Personal account manager</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>Exclusive webinars</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-400 flex-shrink-0" />
                    <span>API access</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Corner Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Testimonials Card */}
          <Card className="card-shadow card-hover border-0 rounded-2xl overflow-hidden bg-gradient-to-br from-green-50 to-emerald-50">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-green-100 p-3 rounded-full">
                  <Star className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">What Traders Say</h3>
              </div>
              <blockquote className="text-lg text-gray-700 mb-6 italic">
                "ABMFX transformed my trading strategy. The analytics are incredible and the support team is always there when I need them."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold">
                  S.K
                </div>
                <div>
                  <p className="font-semibold text-navy-900">Sarah Kim</p>
                  <p className="text-gray-600">Professional Trader</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Add-ons Card */}
          <Card className="card-shadow card-hover border-0 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-50">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900">Power Add-ons</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-100">
                  <span className="font-medium text-gray-800">Market Scanner</span>
                  <span className="text-purple-600 font-bold">+$29/mo</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-100">
                  <span className="font-medium text-gray-800">News Feed Pro</span>
                  <span className="text-purple-600 font-bold">+$19/mo</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-purple-100">
                  <span className="font-medium text-gray-800">Portfolio Analytics</span>
                  <span className="text-purple-600 font-bold">+$39/mo</span>
                </div>
              </div>
              <Button variant="outline" className="w-full border-purple-200 text-purple-700 hover:bg-purple-50 rounded-xl">
                Explore Add-ons
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <TrendingUp className="w-8 h-8 text-yellow-400 mr-3" />
              <span className="text-2xl font-bold">ABMFX</span>
            </div>
            <p className="text-gray-400 mb-6">
              Professional forex trading platform trusted by traders worldwide
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Risk Disclosure</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Contact Support</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
              <p>&copy; 2024 ABMFX. All rights reserved. Trading involves risk.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App