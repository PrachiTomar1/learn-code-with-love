import { Heart, Target, Users, Award, Lightbulb, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & Lead Educator",
      bio: "Former Google engineer with 10+ years of experience making coding accessible to everyone.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Dr. Michael Chen",
      role: "Curriculum Director",
      bio: "PhD in Computer Science, passionate about creating engaging learning experiences.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Emma Thompson",
      role: "Community Manager",
      bio: "Building supportive learning communities and helping students achieve their goals.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    },
    {
      name: "Alex Rodriguez",
      role: "Senior Developer & Mentor",
      bio: "Full-stack developer and mentor, specializing in modern web technologies.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Love-Centered Learning",
      description: "We believe learning should be joyful, supportive, and filled with encouragement every step of the way.",
    },
    {
      icon: Users,
      title: "Inclusive Community",
      description: "Our platform welcomes learners from all backgrounds, creating a diverse and supportive environment.",
    },
    {
      icon: Lightbulb,
      title: "Practical Innovation",
      description: "We combine cutting-edge teaching methods with hands-on projects that prepare you for real-world challenges.",
    },
    {
      icon: Globe,
      title: "Global Accessibility",
      description: "Making quality coding education available to anyone, anywhere, regardless of their circumstances.",
    },
  ];

  const stats = [
    { number: "50,000+", label: "Students Worldwide" },
    { number: "150+", label: "Expert Instructors" },
    { number: "95%", label: "Job Placement Rate" },
    { number: "4.9/5", label: "Average Rating" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6">
            Our Mission: Making Coding
            <span className="block text-gradient-primary bg-white/10 rounded-2xl px-4 py-2 mt-4">
              Accessible & Lovable
            </span>
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform how people learn to code. Through our supportive community, 
            innovative teaching methods, and love-centered approach, we make programming education 
            accessible, enjoyable, and effective for everyone.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="text-lg leading-relaxed mb-6">
                Learn with Love was born from a simple observation: too many people were giving up on their 
                coding dreams because traditional education felt cold, intimidating, and disconnected from real-world applications.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Our founder, Sarah Johnson, experienced this firsthand when transitioning from a non-tech background 
                to becoming a successful software engineer at Google. She realized that with the right support, 
                encouragement, and teaching approach, anyone could master programming.
              </p>
              <p className="text-lg leading-relaxed">
                Today, we've helped over 50,000 students worldwide discover the joy of coding, build amazing projects, 
                and launch successful careers in technology. Our secret? We put love, support, and community 
                at the heart of everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              These principles guide everything we do, from course design to community building.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover-lift">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <div className="bg-gradient-primary p-4 rounded-2xl flex-shrink-0 shadow-soft">
                        <Icon className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-display font-bold text-gradient-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate educators, experienced developers, and dedicated mentors working together 
              to make your learning journey extraordinary.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-card border-0 shadow-soft hover-lift text-center">
                <CardContent className="p-6">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover shadow-medium"
                  />
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h2 className="text-4xl font-display font-bold text-primary-foreground mb-6">
            Our Mission
          </h2>
          <p className="text-xl text-primary-foreground/90 leading-relaxed mb-8">
            To create a world where anyone, regardless of their background or circumstances, 
            can learn to code with confidence, joy, and the support of a loving community. 
            We believe that when learning is filled with encouragement and practical application, 
            students don't just succeed—they thrive.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-white/90 shadow-large hover:shadow-glow"
          >
            <Link to="/courses">
              Join Our Mission
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;