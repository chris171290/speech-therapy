import { NewsletterForm } from "./components/newsletter-form";
import { SocialLinks } from "./components/social-links";
import { ThemeToggle } from "./components/theme-toggle";
import { Logo } from "./components/logo";
import Image from "next/image";

export default function ComingSoonPage() {
  // Launch date: 30 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#f5f3ff] to-[#ede9fe] dark:from-[#1e1b4b] dark:to-[#312e81] transition-colors duration-300">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-white/70 dark:bg-slate-900/70 transition-all duration-300 border-b border-slate-200 dark:border-slate-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Logo size="md" />
          <div className="flex items-center gap-4">
            <a
              href="mailto:rebecask65@gmail.com"
              className="text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary transition-colors"
            >
              Contact
            </a>
            {/* <ThemeToggle /> */}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-1">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col items-center text-center">
            <div className="space-y-8 max-w-5xl">
              <div className="space-y-2">
                <div className="flex items-center justify-center">
                  <Logo
                    className="items-center justify-center"
                    size="xl"
                    textSize="5xl"
                  />
                </div>
                <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-primary dark:text-purple-100 tracking-tight">
                  We're Coming Soon!
                </h1>
                <p className="text-lg sm:text-xl text-slate-900 dark:text-slate-300 leading-relaxed font-medium tracking-wide">
                  A dedicated space for supporting children’s communication and
                  social development. At Talk and Bloom, we help little voices
                  grow with confidence through personalized speech therapy and
                  family-centered care.
                </p>
              </div>

              <div className="py-8 w-full">
                <NewsletterForm />
              </div>

              {/* <div className="pt-2 w-full"><SocialLinks /></div> */}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 py-6 bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-base text-slate-600 dark:text-slate-400">
                © {new Date().getFullYear()} Talk & Bloom. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <a
                href="mailto:rebecask65@gmail.com"
                className="text-base text-slate-600 dark:text-slate-400 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
              >
                rebecask65@gmail.com
              </a>
              {/* <SocialLinks variant="footer" /> */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
