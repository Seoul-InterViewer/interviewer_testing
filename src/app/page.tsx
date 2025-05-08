"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-white h-screen p-4 shadow-md">
          <div className="space-y-4">
            <h2 className="text-xl font-bold">Dashboard</h2>
            <nav className="space-y-2">
              <Link href="/" className="block p-2 bg-gray-100 rounded">
                Overview
              </Link>
              <Link
                href="/dashboard/users"
                className="block p-2 hover:bg-gray-100 rounded"
              >
                Users
              </Link>
              <Link
                href="/dashboard/products"
                className="block p-2 hover:bg-gray-100 rounded"
              >
                Products
              </Link>
              <Link
                href="/dashboard/settings"
                className="block p-2 hover:bg-gray-100 rounded"
              >
                Settings
              </Link>
            </nav>
            <div className="pt-4 border-t">
              <Link
                href="/login"
                className="block p-2 hover:bg-gray-100 rounded text-red-500"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
            <p className="text-gray-500">Manage your application from here</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Total Users</CardTitle>
                <CardDescription>Active users in the system</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">1,234</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Total Products</CardTitle>
                <CardDescription>Available products</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">567</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Total Orders</CardTitle>
                <CardDescription>Completed orders</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold">890</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 grid gap-6 grid-cols-1 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Common tasks you can perform</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  <Link href="/dashboard/users">
                    <Button className="w-full justify-start">
                      Manage Users
                    </Button>
                  </Link>
                  <Link href="/dashboard/products">
                    <Button variant="outline" className="w-full justify-start">
                      Manage Products
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
