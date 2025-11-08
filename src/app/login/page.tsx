import { AuthForm } from '@/components/auth/auth-form';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 flex items-center justify-center container mx-auto px-4 py-8 md:py-12">
        <div className="w-full max-w-md">
          <h1 className="font-headline text-4xl text-center font-bold text-foreground tracking-tight mb-8">
            Welcome to FabricMind
          </h1>
          <AuthForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
