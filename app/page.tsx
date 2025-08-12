import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Leaf, Shield, Users, Zap, ArrowRight, CheckCircle, Globe, Lock } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <Link className="flex items-center justify-center" href="/">
          <Leaf className="h-6 w-6 text-green-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">eco-recycle</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-green-600 transition-colors" href="/signin">
            Sign In
          </Link>
        </nav>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-green-50 to-emerald-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <Badge variant="outline" className="text-green-700 border-green-300">
                  Powered by Starknet & Cairo
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-gray-900">
                  Turn Environmental Goals into <span className="text-green-600">Verifiable Actions</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Empower individuals and organizations with blockchain-powered carbon credit management. Tokenize,
                  validate, and trade environmental assets with complete transparency.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
                  <Link href="/signup">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="#features">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Key Features
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl mt-4">
                Comprehensive tools for carbon credit management and environmental action verification
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Shield className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Transparent Tokenization</CardTitle>
                  <CardDescription>
                    Tokenize carbon credits on Starknet with complete transparency and verifiable proof-of-action
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      ERC-3525 semi-fungible tokens
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      ERC-2981 NFT royalties
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Cairo smart contracts
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Lock className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Secure Credit Locking</CardTitle>
                  <CardDescription>
                    Lock carbon credits with integrated NFT certificates providing immutable proof-of-lock
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      NFT certificates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Immutable proof
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Secure locking protocols
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-green-200 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-green-600 mb-2" />
                  <CardTitle>Community Integration</CardTitle>
                  <CardDescription>
                    Bridge web2 and web3 experiences with community tools and token-gating features
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Discord integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Token-gating bots
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Community governance
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Technical Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  Built on Cutting-Edge Technology
                </h2>
                <p className="text-gray-600 md:text-lg">
                  Leveraging Starknet's scalability and Cairo's security for robust on-chain operations
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex items-center space-x-2">
                    <Zap className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Cairo Smart Contracts</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Starknet Blockchain</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Query Vault</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-5 w-5 text-green-600" />
                    <span className="text-sm font-medium">Modular Design</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">Technology Stack</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Cairo</span>
                    <Badge variant="secondary">Smart Contracts</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">TypeScript</span>
                    <Badge variant="secondary">Frontend</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Go</span>
                    <Badge variant="secondary">Backend Services</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Starknet</span>
                    <Badge variant="secondary">Blockchain</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-600">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  Ready to Make an Impact?
                </h2>
                <p className="mx-auto max-w-[600px] text-green-100 md:text-xl">
                  Join the ecosystem of verified environmental actions. Start tokenizing and trading carbon credits
                  today.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/signup">
                    Create Account <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="text-white border-white hover:bg-white hover:text-green-600 bg-transparent"
                >
                  <Link href="/signin">Sign In</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-gray-50">
        <p className="text-xs text-gray-500">© 2024 eco-recycle. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-gray-500" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
