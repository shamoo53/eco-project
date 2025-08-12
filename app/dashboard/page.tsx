"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Leaf,
  TrendingUp,
  Shield,
  Award,
  Activity,
  Plus,
  ExternalLink,
  BarChart3,
  Wallet,
  Settings,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  // Mock data
  const carbonCredits = {
    total: 1250,
    locked: 850,
    available: 400,
    pending: 75,
  }

  const nftCertificates = [
    { id: 1, name: "Forest Conservation #001", credits: 100, status: "Active", date: "2024-01-15" },
    { id: 2, name: "Solar Project #045", credits: 250, status: "Locked", date: "2024-01-10" },
    { id: 3, name: "Wind Farm #023", credits: 500, status: "Active", date: "2024-01-05" },
  ]

  const recentActions = [
    { action: "Locked 100 credits", project: "Forest Conservation", time: "2 hours ago" },
    { action: "Received NFT certificate", project: "Solar Project", time: "1 day ago" },
    { action: "Traded 50 credits", project: "Wind Farm", time: "3 days ago" },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="flex h-16 items-center px-4 lg:px-6">
          <Link className="flex items-center justify-center" href="/">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">eco-recycle</span>
          </Link>
          <nav className="ml-8 flex gap-6">
            <Link className="text-sm font-medium text-green-600" href="/dashboard">
              Dashboard
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-green-600" href="/marketplace">
              Marketplace
            </Link>
            <Link className="text-sm font-medium text-gray-600 hover:text-green-600" href="/community">
              Community
            </Link>
          </nav>
          <div className="ml-auto flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Wallet className="h-4 w-4 mr-2" />
              Connect Wallet
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Manage your carbon credits and track your environmental impact</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Credits</CardTitle>
              <Leaf className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{carbonCredits.total}</div>
              <p className="text-xs text-gray-600">+12% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Locked Credits</CardTitle>
              <Shield className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{carbonCredits.locked}</div>
              <p className="text-xs text-gray-600">68% of total credits</p>
            </CardContent>
          </Card>

          <Card className="border-orange-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available</CardTitle>
              <TrendingUp className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-600">{carbonCredits.available}</div>
              <p className="text-xs text-gray-600">Ready for trading</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">NFT Certificates</CardTitle>
              <Award className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{nftCertificates.length}</div>
              <p className="text-xs text-gray-600">Verified assets</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="credits">Credits</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-green-600" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActions.map((action, index) => (
                      <div key={index} className="flex items-center justify-between border-b pb-2 last:border-b-0">
                        <div>
                          <p className="text-sm font-medium">{action.action}</p>
                          <p className="text-xs text-gray-600">{action.project}</p>
                        </div>
                        <span className="text-xs text-gray-500">{action.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Environmental Impact */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BarChart3 className="h-5 w-5 mr-2 text-green-600" />
                    Environmental Impact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Carbon Offset Goal</span>
                        <span>68%</span>
                      </div>
                      <Progress value={68} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Community Engagement</span>
                        <span>85%</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Verification Score</span>
                        <span>92%</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="credits" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Carbon Credits Management</h2>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Credits
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-600">Available Credits</CardTitle>
                  <CardDescription>Ready for trading or locking</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-4">{carbonCredits.available}</div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Trade Credits
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-600">Locked Credits</CardTitle>
                  <CardDescription>Secured with NFT certificates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-4">{carbonCredits.locked}</div>
                  <Button variant="outline" className="w-full bg-transparent">
                    View Certificates
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-orange-200">
                <CardHeader>
                  <CardTitle className="text-orange-600">Pending</CardTitle>
                  <CardDescription>Awaiting verification</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-orange-600 mb-4">{carbonCredits.pending}</div>
                  <Button variant="outline" className="w-full bg-transparent">
                    Track Status
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="certificates" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">NFT Certificates</h2>
              <Button className="bg-green-600 hover:bg-green-700">
                <Plus className="h-4 w-4 mr-2" />
                Mint Certificate
              </Button>
            </div>

            <div className="grid gap-6">
              {nftCertificates.map((cert) => (
                <Card key={cert.id} className="border-purple-200">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle>{cert.name}</CardTitle>
                        <CardDescription>Issued on {cert.date}</CardDescription>
                      </div>
                      <Badge variant={cert.status === "Active" ? "default" : "secondary"}>{cert.status}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-gray-600">Credits Locked</p>
                        <p className="text-2xl font-bold text-purple-600">{cert.credits}</p>
                      </div>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View on Chain
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <h2 className="text-2xl font-bold">Analytics & Insights</h2>

            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Credit Performance</CardTitle>
                  <CardDescription>Monthly credit acquisition and usage</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-gray-500">
                    <BarChart3 className="h-16 w-16 mb-4" />
                    <p>Chart visualization would go here</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Community Impact</CardTitle>
                  <CardDescription>Your contribution to global sustainability</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">CO2 Offset (tons)</span>
                      <span className="font-bold">125.5</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Trees Equivalent</span>
                      <span className="font-bold">2,847</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Community Rank</span>
                      <Badge variant="secondary">#47</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
