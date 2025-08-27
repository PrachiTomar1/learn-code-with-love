import { ArrowRight, Play, Star, BookOpen, Users, Zap, Trophy, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import heroImage from "@/assets/hero-image.jpg";
import webDevImage from "@/assets/course-web-dev.jpg";
import pythonImage from "@/assets/course-python.jpg";
import javascriptImage from "@/assets/course-javascript.jpg";

const Home = () => {
  const stats = [
    { label: "Happy Learners", value: "50,000+", icon: Users },
    { label: "Courses Available", value: "150+", icon: BookOpen },
    { label: "Success Stories", value: "95%", icon: Trophy },
    { label: "Average Rating", value: "4.9/5", icon: Star },
  ];

  const featuredCourses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript from scratch with hands-on projects",
      image: webDevImage,
      level: "Beginner",
      duration: "8 weeks",
      students: "12,500+",
      rating: 4.9,
    },
    {
      id: 2,
      title: "Python Programming Essentials",
      description: "Master Python basics and build real-world applications",
      image: pythonImage,
      level: "Beginner",
      duration: "10 weeks", 
      students: "9,800+",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Modern JavaScript & ES6+",
      description: "Deep dive into modern JavaScript features and frameworks",
      image: javascriptImage,
      level: "Intermediate",
      duration: "12 weeks",
      students: "7,200+",
      rating: 4.9,
    },
  ];

  const features = [
    {
      icon: Heart,
      title: "Learn with Love",
      description: "Our supportive community and encouraging approach makes coding feel welcoming and fun.",
    },
    {
      icon: Zap,
      title: "Interactive Learning",
      description: "Code directly in your browser with instant feedback and real-time collaboration.",
    },
    {
      icon: Trophy,
      title: "Proven Results",
      description: "95% of our students land their dream job or advance their career within 6 months.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-display font-bold text-primary-foreground mb-6 leading-tight">
                Code with 
                <span className="block text-gradient-primary bg-white/10 rounded-2xl px-4 py-2 mt-2">
                  Confidence
                </span>
                Learn with Love
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                Join thousands of learners in our supportive community. Master coding through interactive lessons, 
                real projects, and personalized mentorship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  asChild
                  className="bg-white text-primary hover:bg-white/90 shadow-large hover:shadow-glow group"
                >
                  <Link to="/courses">
                    Start Learning
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
                  </Link>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative animate-float">
              <img
                src={heroImage}
                alt="Students learning to code together"
                className="rounded-3xl shadow-large hover-lift"
              />
              <div className="absolute -top-4 -right-4 bg-success rounded-2xl p-4 shadow-medium animate-bounce-gentle">
                <Heart className="h-8 w-8 text-success-foreground" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-fade-in">
                  <div className="bg-gradient-primary p-4 rounded-2xl w-16 h-16 mx-auto mb-4 flex items-center justify-center shadow-soft">
                    <Icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-display font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Why Choose Learn with Love?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe learning to code should be joyful, supportive, and effective. 
              Here's what makes our approach special.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="bg-gradient-card border-0 shadow-soft hover-lift">
                  <CardContent className="p-8 text-center">
                    <div className="bg-gradient-primary p-4 rounded-2xl w-16 h-16 mx-auto mb-6 flex items-center justify-center shadow-soft">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-foreground mb-4">
              Popular Courses
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Start your coding journey with our most loved courses, designed by industry experts 
              and perfected by thousands of successful students.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="bg-card border-0 shadow-soft hover-lift group">
                <div className="relative overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-success text-success-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <span>{course.duration}</span>
                    <span>{course.students} students</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-warning fill-current mr-1" />
                      {course.rating}
                    </div>
                  </div>
                  <Button asChild className="w-full bg-gradient-primary border-0 hover:shadow-glow">
                    <Link to={`/course/${course.id}`}>
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="hover-lift">
              <Link to="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-display font-bold text-primary-foreground mb-6">
            Ready to Start Your Coding Journey?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Join our welcoming community and discover the joy of coding. 
            Start with our free courses and unlock your potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              asChild
              className="bg-white text-primary hover:bg-white/90 shadow-large hover:shadow-glow"
            >
              <Link to="/courses">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              variant="outline"
              size="lg"
              asChild
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            >
              <Link to="/about">
                Learn More About Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;