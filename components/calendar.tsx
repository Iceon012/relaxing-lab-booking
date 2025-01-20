"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"

export function Calendar() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-1">
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <span className="text-sm font-medium">October 2024</span>
          <Button variant="ghost" size="icon" className="h-7 w-7">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="text-xs">
          See All
        </Button>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between p-2 bg-purple-50 rounded-lg">
          <div>
            <p className="text-sm font-medium">Product Design</p>
            <p className="text-xs text-gray-500">Meeting with Arthur Bell</p>
          </div>
          <div className="flex -space-x-1">
            <Avatar className="h-6 w-6 border-2 border-white">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar className="h-6 w-6 border-2 border-white">
              <AvatarImage src="/placeholder-avatar.jpg" />
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <Avatar className="h-6 w-6 border-2 border-white">
              <AvatarFallback>+3</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
          <div>
            <p className="text-sm font-medium">Brainstorming Session</p>
            <p className="text-xs text-gray-500">Meeting with Leslie Perez</p>
          </div>
          <Avatar className="h-6 w-6">
            <AvatarImage src="/placeholder-avatar.jpg" />
            <AvatarFallback>LP</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  )
}

