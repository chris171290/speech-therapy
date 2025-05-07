import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarIcon, Search } from "lucide-react";

export function BlogSidebar() {
  return (
    <div className="space-y-8 sticky top-24">
      {/* Newsletter Section */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-medium leading-none tracking-tight">
            Subscribe to Our Newsletter
          </h3>
          <p className="text-sm text-muted-foreground">
            Get the latest articles and resources sent to your inbox
          </p>
        </div>
        <div className="p-6 pt-0">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Search Section */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-mediun leading-none tracking-tight">
            Search Articles
          </h3>
        </div>
        <div className="p-6 pt-0">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search..."
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8"
            />
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-2xl font-mediun leading-none tracking-tight">
            Popular Categories
          </h3>
        </div>
        <div className="p-0">
          <div className="grid grid-cols-1 divide-y">
            <Link
              href="#"
              className="flex items-center justify-between p-4 hover:bg-secondary transition-colors"
            >
              <span>Language Development</span>
              <span className="text-sm text-muted-foreground">(24)</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between p-4 hover:bg-secondary transition-colors"
            >
              <span>Speech Therapy</span>
              <span className="text-sm text-muted-foreground">(18)</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between p-4 hover:bg-secondary transition-colors"
            >
              <span>Social Skills</span>
              <span className="text-sm text-muted-foreground">(15)</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between p-4 hover:bg-secondary transition-colors"
            >
              <span>Early Childhood</span>
              <span className="text-sm text-muted-foreground">(12)</span>
            </Link>
            <Link
              href="#"
              className="flex items-center justify-between p-4 hover:bg-secondary transition-colors"
            >
              <span>Parenting Tips</span>
              <span className="text-sm text-muted-foreground">(9)</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Events Section */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            Upcoming Events
          </h3>
        </div>
        <div className="p-6 pt-0 space-y-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <span>May 15, 2025</span>
            </div>
            <h3 className="font-medium">
              Virtual Workshop: Supporting Bilingual Children
            </h3>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-1 text-primary underline-offset-4 hover:underline p-0 h-auto"
            >
              Register now <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="h-px bg-border" />
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <CalendarIcon className="h-4 w-4" />
              <span>May 22, 2025</span>
            </div>
            <h3 className="font-medium">
              Parent Support Group: Navigating Speech Delays
            </h3>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-1 text-primary underline-offset-4 hover:underline p-0 h-auto"
            >
              Learn more <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Resources Section */}
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="flex flex-col space-y-1.5 p-6">
          <h3 className="text-lg font-semibold leading-none tracking-tight">
            Free Resources
          </h3>
        </div>
        <div className="p-0">
          <Link
            href="#"
            className="flex items-center gap-3 p-4 hover:bg-secondary transition-colors"
          >
            <div className="rounded-md overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=60&width=80"
                alt="Language development guide"
                width={80}
                height={60}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-sm">
                Language Development Milestones Guide
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Free PDF download
              </p>
            </div>
          </Link>
          <div className="h-px bg-border" />
          <Link
            href="#"
            className="flex items-center gap-3 p-4 hover:bg-secondary transition-colors"
          >
            <div className="rounded-md overflow-hidden flex-shrink-0">
              <Image
                src="/placeholder.svg?height=60&width=80"
                alt="Speech activities"
                width={80}
                height={60}
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="font-medium text-sm">
                10 Fun Speech Activities for Home
              </h3>
              <p className="text-xs text-muted-foreground mt-1">
                Free PDF download
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
