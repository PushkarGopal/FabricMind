import { Header } from '@/components/layout/header';
import { FabricSearchContainer } from '@/components/search/fabric-search-container';
import { FeaturedFabrics } from '@/components/results/featured-fabrics';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight">
            Discover Your Perfect Fabric
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Let our AI assistant guide you through a world of textiles. Describe your ideal fabric or show us a picture to get started.
          </p>
        </div>
        <FabricSearchContainer />
        <div className="mt-16">
          <FeaturedFabrics />
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground">
        <p>Created by Pushkar Gopal</p>
      </footer>
    </div>
  );
}
