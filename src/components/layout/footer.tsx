import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-background/80 border-t mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="mb-4 md:mb-0">Created by Pushkar Gopal</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
            <Link href="/about" className="hover:text-foreground transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="hover:text-foreground transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
