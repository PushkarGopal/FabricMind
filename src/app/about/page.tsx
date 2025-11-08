import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tight">
            About FabricMind
          </h1>
          <div className="prose prose-lg mt-8 text-foreground/80">
            <p>
              Welcome to FabricMind, your revolutionary partner in fabric discovery. We believe that finding the perfect textile should be an inspiring and effortless journey, not a frustrating hunt. Our platform was born from a passion for design and a vision to harness the power of artificial intelligence to transform the way creatives, designers, and hobbyists source materials.
            </p>
            <p>
              At FabricMind, we've built a sophisticated AI that understands the language of textiles. Whether you're describing the soft, durable cotton you need for a cozy sofa or uploading a photo of a vintage pattern you adore, our technology instantly analyzes your input to provide personalized, high-quality fabric suggestions.
            </p>
            <p>
              Our mission is to bridge the gap between imagination and creation. We empower you to bring your ideas to life by making a world of fabrics accessible at your fingertips. From creating mood boards to visualizing textiles in real-world scenes, FabricMind is more than a search engine—it's a creative co-pilot.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
