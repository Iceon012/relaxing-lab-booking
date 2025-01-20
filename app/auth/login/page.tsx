"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { LogIn, Mail, EyeOff, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4"
      style={{
        backgroundImage:
          'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/original-c662833759b6fc8d01193eb1948945aa-vxFzIwV79ZO67ujLVLUsTVU8qquFRM.webp")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo */}
      <div className="absolute top-6 left-6">
        <div className="flex items-center gap-2">
          <div className="bg-black rounded p-1.5">
            <Image
              src="/placeholder.svg"
              alt="Ebolt Logo"
              width={20}
              height={20}
              className="invert"
            />
          </div>
          <span className="font-semibold text-lg">Ebolt</span>
        </div>
      </div>

      {/* Login Card */}
      <Card className="w-full max-w-[420px] p-8 bg-white/95 backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-6">
          {/* Login Icon */}
          <div className="bg-gray-50 p-4 rounded-full">
            <LogIn className="w-6 h-6 text-gray-600" />
          </div>

          {/* Header */}
          <div className="space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Sign in with email
            </h1>
            <p className="text-gray-500 text-sm">
              Make a new doc to bring your words, data,
              <br className="hidden sm:inline" /> and teams together. For free
            </p>
          </div>

          {/* Form */}
          <form className="w-full space-y-4">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                <Input type="email" placeholder="Email" className="pl-10" />
              </div>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <Eye className="h-5 w-5" />
                  ) : (
                    <EyeOff className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:text-blue-700"
              >
                Forgot password?
              </Link>
            </div>

            <Button className="w-full bg-gray-900 hover:bg-gray-800 text-white">
              Get Started
            </Button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-gray-500">
                  Or sign in with
                </span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <Button variant="outline" className="w-full">
                <Image
                  src="/placeholder.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="filter grayscale"
                />
              </Button>
              <Button variant="outline" className="w-full">
                <Image
                  src="/placeholder.svg"
                  alt="Facebook"
                  width={20}
                  height={20}
                  className="filter grayscale"
                />
              </Button>
              <Button variant="outline" className="w-full">
                <Image
                  src="/placeholder.svg"
                  alt="Apple"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
}
