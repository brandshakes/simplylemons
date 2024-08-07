import SearchField from "@/components/SearchField";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import UserButton from "@/components/UserButton";
import Link from "next/link";
import { FaRegLemon } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";


export default function Navbar() {
  return (
    <header className="sticky top-0 flex h-16 items-center gap-4 border-b bg-card px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link href="#" className="flex items-center gap-2 text-lg font-semibold md:text-base" prefetch={false}>
            <FaRegLemon className="h-6 w-6" />
            <span className="sr-only">Simply Lemons</span>
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
            Dashboard
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
            Orders
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
            Products
          </Link>
          <Link href="#" className="text-muted-foreground transition-colors hover:text-foreground" prefetch={false}>
            Customers
          </Link>
          <Link href="#" className="text-foreground transition-colors hover:text-foreground" prefetch={false}>
            Settings
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="shrink-0 md:hidden">
              <IoIosMenu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                <FaRegLemon className="h-6 w-6" />
                <span className="sr-only">Simply Lemons</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                Dashboard
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                Orders
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                Products
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
                Customers
              </Link>
              <Link href="#" className="hover:text-foreground" prefetch={false}>
                Settings
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          <SearchField />
          <UserButton className="sm:ms-auto" />
        </div>
      </header>
      
    //<header className="sticky top-0 z-10 bg-card shadow-sm">
    //  <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-5 px-5 py-3">
    //    <Link href="/" className="text-2xl font-bold text-primary">
    //      Simply Lemons
    //    </Link>
    //    <SearchField />
    //    <UserButton className="sm:ms-auto" />
    //  </div>
    // </header>
  );
}