import { Search, Bell, Menu } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { MobileNav } from "./mobile-nav";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              {/* Add your mobile menu content here */}
              <MobileNav />
            </SheetContent>
          </Sheet>
          <h1 className="text-xl font-semibold ml-2 md:ml-0">Overview</h1>
        </div>
        <div className="flex items-center gap-4">
          <form className="hidden md:block relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search..."
              className="pl-8 pr-4 py-1 w-[200px] lg:w-[300px]"
            />
          </form>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full" />
          </Button>
          <Avatar>
            <AvatarImage
              src="https://media.licdn.com/dms/image/v2/D5603AQHHkAHRCSwpiw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729958816428?e=1743033600&v=beta&t=YWN5egDuKF_8nbFHyisFIkhWX41l5_yGyIfh8DNfHqc"
              alt="Arvin Ayson"
            />
            <AvatarFallback>AA</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
