import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            Privacy Policy
          </h1>
          <div className="prose prose-lg mt-8 text-foreground/80">
            <p>
              This is a placeholder privacy policy. In a real application, this page would detail how user data is collected, used, and protected.
            </p>
            
            <h2>1. Information We Collect</h2>
            <p>
              We collect information you provide directly to us, such as when you create an account, upload an image, or submit a search query. This may include your email address and any text or images you provide.
            </p>

            <h2>2. How We Use Your Information</h2>
            <p>
              We use the information we collect to operate, maintain, and provide you with the features and functionality of the FabricMind service. Your search queries and images are sent to our AI models to generate fabric suggestions.
            </p>
            
            <h2>3. Data Storage and Security</h2>
            <p>
              Your data is stored securely. We take reasonable measures to protect your information from loss, theft, misuse, and unauthorized access.
            </p>

            <h2>4. Sharing of Your Information</h2>
            <p>
              We do not share your personal information with third parties except as necessary to provide our service (e.g., with our AI model providers) or as required by law.
            </p>

            <h2>5. Your Choices</h2>
            <p>
              You may update or correct your account information at any time by logging into your account.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
