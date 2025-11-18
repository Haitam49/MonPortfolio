import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Contactez-moi
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute question ou opportunité
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">haitamboulhna19@gmail.com</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Téléphone</h3>
                  <p className="text-muted-foreground">+212 6 45 77 74 02</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Localisation</h3>
                  <p className="text-muted-foreground">Casablanca, Maroc</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-border/50">
            <CardContent className="p-6">
              <form className="space-y-4">
                <div>
                  <Input
                    placeholder="Votre nom"
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Votre email"
                    className="bg-background"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Sujet"
                    className="bg-background"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Votre message"
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  Envoyer le message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
