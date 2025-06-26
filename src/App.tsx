import { ArrowRight, TrendingUp, Shield, Zap, Star, Users, CheckCircle, Activity, Eye, Rocket, Briefcase, PiggyBank, Phone } from 'lucide-react'
import { Button } from './components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'

function App() {
  return (
    <div className="min-h-screen bg-cyber-black text-white dark">
      {/* Scanning Line Effect */}
      <div className="scan-line"></div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden cyber-gradient">
        {/* Animated Circuit Pattern */}
        <div className="absolute inset-0 circuit-pattern opacity-20"></div>
        <div className="absolute inset-0 holographic opacity-10"></div>
        
        {/* Floating particles effect */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full animate-pulse-neon"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 z-10">
          <div className="text-center">
            {/* Cyberpunk Logo */}
            <div className="flex justify-center items-center mb-8">
              <div className="cyber-card rounded-2xl p-6 float-cyber">
                <div className="relative">
                  <TrendingUp className="w-16 h-16 text-neon-cyan " />
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-neon-pink rounded-full animate-pulse-neon"></div>
                </div>
              </div>
            </div>
            
            {/* Main Heading with Glitch Effect */}
            <h1 className="text-6xl lg:text-8xl font-cyber font-black mb-6 tracking-tight glitch">
              <span className="block cyber-text-gradient neon-text">ABMFX</span>
              <span className="block text-neon-purple neon-text">NEXUS</span>
            </h1>
            
            {/* Cyber Tagline */}
            <div className="mb-8">
              <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-4xl mx-auto leading-relaxed">
                <span className="text-neon-cyan font-mono">[SYSTEM_ONLINE]</span> Advanced Forex Trading Interface
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Experience next-generation forex trading through our AI-powered quantum analytics platform. 
                Engineered for cyber-traders who demand <span className="text-neon-pink">ultimate precision</span>.
              </p>
            </div>
            
            {/* Futuristic CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="neon-gradient hover:opacity-90 font-cyber font-bold px-10 py-5 text-lg rounded-xl shadow-2xl hover:shadow-neon-cyan/50 transition-all duration-300 glitch border-0"
              >
                <Rocket className="mr-3 w-6 h-6" />
                INITIALIZE TRADING
                <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="cyber-card border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 backdrop-blur-sm px-10 py-5 text-lg rounded-xl font-cyber font-bold"
              >
                <Eye className="mr-3 w-6 h-6" />
                VIEW_DEMO.EXE
              </Button>
            </div>
            
            {/* Cyber Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="cyber-card p-6 rounded-xl text-center">
                <Shield className="w-8 h-8 text-neon-green mx-auto mb-3 neon-text" />
                <div className="font-cyber text-neon-green text-lg font-bold">QUANTUM_SECURED</div>
                <div className="text-sm text-gray-400 font-mono">Military-grade encryption</div>
              </div>
              <div className="cyber-card p-6 rounded-xl text-center">
                <Users className="w-8 h-8 text-neon-blue mx-auto mb-3 neon-text" />
                <div className="font-cyber text-neon-blue text-lg font-bold">FOREX ONLY</div>
                <div className="text-sm text-gray-400 font-mono">No Crypto Trading</div>
              </div>
              <div className="cyber-card p-6 rounded-xl text-center">
                <Activity className="w-8 h-8 text-neon-pink mx-auto mb-3 neon-text" />
                <div className="font-cyber text-neon-pink text-lg font-bold">40% PROFIT SHARE</div>
                <div className="text-sm text-gray-400 font-mono">We share profits and losses</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trading Plans Section */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Background Tech Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2300ffff' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm-10 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm20 0c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z'/%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-5xl font-cyber font-black text-white mb-4 glitch">
            <span className="cyber-text-gradient neon-text">SELECT INVESTMENT PROTOCOL</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-mono">
            <span className="text-neon-cyan">[CHOOSE_YOUR_INVESTMENT_INTERFACE]</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Direct Access Account */}
          <Card className="cyber-card border-0 rounded-2xl overflow-hidden bg-cyber-dark/50 backdrop-blur-xl">
            <CardHeader className="pb-8 relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="cyber-card p-3 rounded-lg">
                  <Briefcase className="w-8 h-8 text-neon-blue neon-text" />
                </div>
                <CardTitle className="text-2xl font-cyber font-bold text-white">DIRECT ACCESS</CardTitle>
              </div>
              <CardDescription className="text-gray-400 text-lg font-mono">
                For traders with their own live account.
              </CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-cyber font-black text-neon-cyan neon-text">$10,000</span>
                <span className="text-gray-400 ml-2 font-mono">MINIMUM INVESTMENT</span>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 neon-text" />
                  <span className="text-gray-300">You provide access to your live trading account.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 neon-text" />
                  <span className="text-gray-300">We only have trading access, no withdrawal/deposit rights.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 neon-text" />
                  <span className="text-gray-300">40% profit share.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 neon-text" />
                  <span className="text-gray-300">We cover 40% of any losses.</span>
                </li>
              </ul>
              <Button className="w-full cyber-card border-neon-cyan/50 text-neon-cyan hover:bg-neon-cyan/10 backdrop-blur-sm rounded-xl py-4 font-cyber font-bold">
                GRANT ACCESS
              </Button>
            </CardContent>
          </Card>

          {/* Pooled Account */}
          <Card className="cyber-card border-0 rounded-2xl overflow-hidden bg-cyber-dark/50 backdrop-blur-xl">
            <CardHeader className="pb-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="cyber-card p-3 rounded-lg">
                  <PiggyBank className="w-8 h-8 text-neon-purple neon-text" />
                </div>
                <CardTitle className="text-2xl font-cyber font-bold text-white">POOLED ACCOUNT</CardTitle>
              </div>
              <CardDescription className="text-gray-400 text-lg font-mono">
                For those who want to invest smaller amounts.
              </CardDescription>
              <div className="mt-6">
                <span className="text-4xl font-cyber font-black text-neon-purple neon-text">Up to 5%</span>
                <span className="text-gray-400 ml-2 font-mono">MONTHLY PROFIT</span>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 neon-text" />
                  <span className="text-gray-300">Deposit any amount you need.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 neon-text" />
                  <span className="text-gray-300">Your funds are merged into our main trading account.</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 neon-text" />
                  <span className="text-gray-300">Enjoy a share of the profits.</span>
                </li>
                 <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-neon-green flex-shrink-0 neon-text" />
                  <span className="text-gray-300">40% profit share. We cover 40% of any losses.</span>
                </li>
              </ul>
              <Button className="w-full cyber-card border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 backdrop-blur-sm rounded-xl py-4 font-cyber font-bold">
                DEPOSIT FUNDS
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Custom Package - Wide Card */}
        <Card className="premium-cyber-card border-0 rounded-2xl overflow-hidden backdrop-blur-xl">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="purple-gradient text-cyber-black px-6 py-3 rounded-full text-sm font-cyber font-black">
                    CUSTOM PROTOCOL
                  </div>
                  <Zap className="w-8 h-8 text-neon-pink neon-text animate-pulse-neon" />
                </div>
                <h3 className="text-5xl font-cyber font-black mb-4 text-white neon-text">ENTERPRISE SOLUTION</h3>
                <p className="text-xl text-gray-300 mb-6 font-mono">
                  For large-scale investors seeking a tailored trading strategy.
                </p>
                <Button 
                  size="lg" 
                  className="purple-gradient hover:opacity-90 font-cyber font-black px-10 py-5 rounded-xl text-cyber-black glitch"
                >
                  <Phone className="mr-3 w-6 h-6" />
                  CONTACT SALES
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-neon-pink flex-shrink-0 neon-text" />
                    <span className="text-gray-300">Dedicated account manager.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-neon-pink flex-shrink-0 neon-text" />
                    <span className="text-gray-300">Customized trading strategies.</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-neon-pink flex-shrink-0 neon-text" />
                    <span className="text-gray-300">Personalized risk management.</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Cyber Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {/* Neural Testimonials */}
          <Card className="cyber-card border-0 rounded-2xl overflow-hidden bg-gradient-to-br from-cyber-dark/70 to-neon-green/10 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="cyber-card p-3 rounded-full">
                  <Star className="w-6 h-6 text-neon-green neon-text" />
                </div>
                <h3 className="text-2xl font-cyber font-bold text-white">NEURAL_FEEDBACK</h3>
              </div>
              <blockquote className="text-lg text-gray-300 mb-6 italic font-mono">
                "ABMFX_NEXUS revolutionized my trading consciousness. The quantum algorithms are beyond this dimension."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-green to-neon-cyan rounded-full flex items-center justify-center text-cyber-black font-cyber font-bold">
                  SK
                </div>
                <div>
                  <p className="font-cyber font-bold text-white">SARAH_K.EXE</p>
                  <p className="text-gray-400 font-mono text-sm">Quantum_Trader_Level_9</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cyber Enhancements */}
          <Card className="cyber-card border-0 rounded-2xl overflow-hidden bg-gradient-to-br from-cyber-dark/70 to-neon-purple/10 backdrop-blur-xl">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="cyber-card p-3 rounded-full">
                  <Zap className="w-6 h-6 text-neon-purple neon-text animate-pulse-neon" />
                </div>
                <h3 className="text-2xl font-cyber font-bold text-white">NEURAL_ENHANCEMENTS</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div className="cyber-card p-4 rounded-lg border border-neon-purple/20">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-gray-300">Market_Scanner_V3.0</span>
                    <span className="text-neon-purple font-cyber font-bold">+29/CYCLE</span>
                  </div>
                </div>
                <div className="cyber-card p-4 rounded-lg border border-neon-purple/20">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-gray-300">News_Feed_Neural_Pro</span>
                    <span className="text-neon-purple font-cyber font-bold">+19/CYCLE</span>
                  </div>
                </div>
                <div className="cyber-card p-4 rounded-lg border border-neon-purple/20">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-gray-300">Portfolio_Quantum_Analytics</span>
                    <span className="text-neon-purple font-cyber font-bold">+39/CYCLE</span>
                  </div>
                </div>
              </div>
              <Button className="w-full cyber-card border-neon-purple/50 text-neon-purple hover:bg-neon-purple/10 backdrop-blur-sm rounded-xl py-3 font-cyber font-bold">
                EXPLORE_ENHANCEMENTS
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cyber Footer */}
      <footer className="bg-cyber-black border-t border-neon-cyan/20 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center items-center mb-6">
              <TrendingUp className="w-8 h-8 text-neon-cyan mr-3 neon-text" />
              <span className="text-3xl font-cyber font-black text-white">ABMFX_NEXUS</span>
            </div>
            <p className="text-gray-400 mb-6 font-mono">
              <span className="text-neon-cyan">[QUANTUM_TRADING_PLATFORM]</span> Trusted by cyber-traders across the neural network
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 font-mono mb-8">
              <a href="#" className="hover:text-neon-cyan transition-colors">Terms_of_Service.exe</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Privacy_Protocol.dat</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Risk_Disclosure.log</a>
              <a href="#" className="hover:text-neon-cyan transition-colors">Neural_Support.sys</a>
            </div>
            <div className="pt-8 border-t border-neon-cyan/10 text-center text-gray-600 font-mono">
              <p>&copy; 2084 ABMFX_NEXUS. All neural rights reserved. Trading involves quantum risk.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App