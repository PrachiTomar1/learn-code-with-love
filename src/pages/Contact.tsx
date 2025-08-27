import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@learnwithlove.dev",
      description: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+1 (555) 123-4567",
      description: "Monday to Friday, 9AM-6PM EST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "123 Learning Street, Tech City, TC 12345",
      description: "Our headquarters and main campus"
    },
    {
      icon: Clock,
      title: "Support Hours",
      content: "24/7 Online Support",
      description: "Community forum always available"
    }
  ];

  const faqs = [
    {
      question: "How do I get started?",
      answer: "Simply create a free account and start with our beginner-friendly courses. No prior experience needed!"
    },
    {
      question: "Are the courses really free?",
      answer: "Yes! We offer many courses completely free. Premium courses provide additional features like mentorship and certificates."
    },
    {
      question: "What if I get stuck?",
      answer: "Our supportive community is here to help! Ask questions in our forum, join study groups, or reach out to mentors."
    },
    {
      question: "Do you offer job placement assistance?",
      answer: "Yes! We provide career guidance, portfolio reviews, interview prep, and connections to our hiring partners."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
            Let's Connect & 
            <span className="block text-gradient-primary bg-white/10 rounded-2xl px-4 py-2 mt-4">
              Learn Together
            </span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Have questions about our courses? Need help getting started? Want to share your success story? 
            We'd love to hear from you! Our friendly team is here to support your coding journey.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <MessageSquare className="h-8 w-8 text-primary mr-3" />
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Your first name" className="mt-2" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Your last name" className="mt-2" />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <select 
                        id="subject"
                        className="w-full mt-2 px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
                      >
                        <option value="">Select a topic</option>
                        <option value="course-question">Course Questions</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="billing">Billing & Payments</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="feedback">Feedback & Suggestions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us how we can help you..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>
                    <Button className="w-full bg-gradient-primary border-0 hover:shadow-glow" size="lg">
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index} className="border-0 shadow-soft hover-lift">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="bg-gradient-primary p-3 rounded-xl flex-shrink-0 shadow-soft">
                              <Icon className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <div>
                              <h3 className="font-display font-semibold text-foreground mb-1">
                                {info.title}
                              </h3>
                              <p className="text-primary font-medium mb-1">
                                {info.content}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {info.description}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Quick Links */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle>Quick Help</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="#faq">Browse FAQ</a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="/courses">View Courses</a>
                    </Button>
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href="/about">About Us</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Quick answers to common questions about our platform and courses.
            </p>
          </div>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-soft">
                <CardContent className="p-8">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help!
            </p>
            <Button className="bg-gradient-primary border-0 hover:shadow-glow">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-primary-foreground mb-6">
            Join Our Learning Community
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Connect with fellow learners, share your progress, get help when you're stuck, 
            and celebrate successes together. Learning is always better with friends!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 shadow-large hover:shadow-glow"
            >
              Join Discord Community
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              Follow on Twitter
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;