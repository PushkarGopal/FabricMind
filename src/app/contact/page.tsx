import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-foreground tracking-tight">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              We'd love to hear from you. Whether you have a question about our platform, feedback, or anything else, our team is ready to answer all your questions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Mail />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Email</h3>
                        <p className="text-muted-foreground">Reach out to us anytime.</p>
                        <a href="mailto:24210077@iitgn.ac.in" className="text-primary hover:underline">24210077@iitgn.ac.in</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <Phone />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Phone</h3>
                        <p className="text-muted-foreground">Mon-Fri from 9am to 5pm.</p>
                        <a href="tel:+918100705705" className="text-primary hover:underline">+91-8100705705</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="bg-primary/10 text-primary p-3 rounded-full">
                        <MapPin />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Office</h3>
                        <p className="text-muted-foreground">123 Fabric Lane, Design District</p>
                        <p className="text-primary">Textile City, TX 75001</p>
                    </div>
                </div>
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>This form is for demonstration purposes.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your Name" />
                  <Input type="email" placeholder="Your Email" />
                  <Textarea placeholder="Your Message" rows={5} />
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
