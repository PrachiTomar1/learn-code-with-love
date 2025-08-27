import { useParams } from "react-router-dom";
import { Star, Clock, Users, Play, CheckCircle, BookOpen, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import webDevImage from "@/assets/course-web-dev.jpg";
import pythonImage from "@/assets/course-python.jpg";
import javascriptImage from "@/assets/course-javascript.jpg";

const CourseDetail = () => {
  const { id } = useParams();

  const course = {
    id: 1,
    title: "Web Development Fundamentals",
    description: "Master the building blocks of the web with HTML, CSS, and JavaScript. This comprehensive course takes you from complete beginner to confident web developer through hands-on projects and real-world applications.",
    image: webDevImage,
    category: "Web Development",
    level: "Beginner",
    duration: "8 weeks",
    students: "12,500+",
    rating: 4.9,
    reviews: 2847,
    price: "Free",
    instructor: {
      name: "Sarah Johnson",
      bio: "Former Google engineer with 10+ years of experience. Passionate about making coding accessible to everyone.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      courses: 12,
      students: 45000,
    },
    lessons: 45,
    projects: 8,
    certificate: true,
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "Web APIs", "DOM Manipulation", "Flexbox & Grid"],
    requirements: [
      "No prior coding experience required",
      "A computer with internet connection",
      "Willingness to learn and practice",
      "Text editor (we'll help you set this up)"
    ],
    outcomes: [
      "Build responsive websites from scratch",
      "Understand modern HTML5 and CSS3 features",
      "Create interactive web pages with JavaScript",
      "Use Git for version control",
      "Deploy websites to the internet",
      "Debug and troubleshoot code effectively",
      "Follow web development best practices",
      "Start freelancing or land your first job"
    ],
    curriculum: [
      {
        week: 1,
        title: "Getting Started with HTML",
        lessons: ["Introduction to Web Development", "HTML Basics", "Semantic HTML", "Forms and Tables", "Practice Project: Personal Portfolio"],
        duration: "3 hours"
      },
      {
        week: 2,
        title: "Styling with CSS",
        lessons: ["CSS Fundamentals", "Colors, Fonts & Typography", "Box Model & Layout", "Flexbox Basics", "Project: Style Your Portfolio"],
        duration: "4 hours"
      },
      {
        week: 3,
        title: "Advanced CSS & Responsive Design",
        lessons: ["CSS Grid", "Responsive Design", "Media Queries", "CSS Animations", "Project: Responsive Website"],
        duration: "4 hours"
      },
      {
        week: 4,
        title: "JavaScript Fundamentals",
        lessons: ["JavaScript Basics", "Variables & Data Types", "Functions & Scope", "Arrays & Objects", "Practice Exercises"],
        duration: "5 hours"
      },
      {
        week: 5,
        title: "DOM Manipulation",
        lessons: ["Understanding the DOM", "Event Handling", "Dynamic Content", "Forms & Validation", "Project: Interactive Calculator"],
        duration: "4 hours"
      },
      {
        week: 6,
        title: "Asynchronous JavaScript",
        lessons: ["Promises & Async/Await", "Fetch API", "Working with APIs", "Error Handling", "Project: Weather App"],
        duration: "5 hours"
      },
      {
        week: 7,
        title: "Version Control & Tools",
        lessons: ["Git Basics", "GitHub", "Development Tools", "Debugging", "Best Practices"],
        duration: "3 hours"
      },
      {
        week: 8,
        title: "Final Project & Deployment",
        lessons: ["Project Planning", "Building Your Final Project", "Testing & Optimization", "Deployment", "Career Guidance"],
        duration: "6 hours"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-hero py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="mb-4">
                <Badge variant="secondary" className="mb-2">{course.category}</Badge>
                <Badge variant={course.level === "Beginner" ? "secondary" : "default"}>{course.level}</Badge>
              </div>
              <h1 className="text-4xl lg:text-5xl font-display font-bold text-primary-foreground mb-6">
                {course.title}
              </h1>
              <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-6 text-primary-foreground/80">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-warning fill-current mr-2" />
                  <span className="font-semibold">{course.rating}</span>
                  <span className="ml-1">({course.reviews} reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  {course.students} students
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  {course.duration}
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 mr-2" />
                  {course.lessons} lessons
                </div>
              </div>
            </div>
            <div className="lg:col-span-1">
              <Card className="bg-card/90 backdrop-blur-sm border-0 shadow-large sticky top-8">
                <CardContent className="p-6">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <div className="text-center mb-6">
                    <div className="text-3xl font-display font-bold text-primary mb-2">
                      {course.price}
                    </div>
                    <p className="text-muted-foreground">Limited time offer</p>
                  </div>
                  <Button className="w-full bg-gradient-primary border-0 hover:shadow-glow mb-4" size="lg">
                    <Play className="mr-2 h-5 w-5" />
                    Enroll Now
                  </Button>
                  <Button variant="outline" className="w-full mb-6">
                    Preview Course
                  </Button>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Lessons:</span>
                      <span className="font-medium">{course.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Projects:</span>
                      <span className="font-medium">{course.projects}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Duration:</span>
                      <span className="font-medium">{course.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Certificate:</span>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 text-success mr-1" />
                        <span className="font-medium">Yes</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content Tabs */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-8">
                <Card className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CheckCircle className="h-6 w-6 text-success mr-3" />
                      What You'll Learn
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.outcomes.map((outcome, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{outcome}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle>Skills You'll Gain</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {course.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="px-3 py-1">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle>Requirements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {course.requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2.5 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="curriculum">
                <Card className="border-0 shadow-soft">
                  <CardHeader>
                    <CardTitle>Course Curriculum</CardTitle>
                    <p className="text-muted-foreground">
                      {course.curriculum.length} weeks • {course.lessons} lessons • 34 hours total
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {course.curriculum.map((week) => (
                        <div key={week.week} className="border border-border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <h4 className="font-display font-semibold text-foreground">
                              Week {week.week}: {week.title}
                            </h4>
                            <span className="text-sm text-muted-foreground">{week.duration}</span>
                          </div>
                          <ul className="space-y-2">
                            {week.lessons.map((lesson, index) => (
                              <li key={index} className="flex items-center text-muted-foreground">
                                <Play className="h-4 w-4 mr-3 text-primary" />
                                {lesson}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="instructor">
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-6">
                      <img
                        src={course.instructor.avatar}
                        alt={course.instructor.name}
                        className="w-24 h-24 rounded-full object-cover shadow-medium"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-display font-semibold text-foreground mb-2">
                          {course.instructor.name}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {course.instructor.bio}
                        </p>
                        <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                          <div>
                            <span className="font-semibold text-foreground">{course.instructor.courses}</span> Courses
                          </div>
                          <div>
                            <span className="font-semibold text-foreground">{course.instructor.students.toLocaleString()}</span> Students
                          </div>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-warning fill-current mr-1" />
                            <span className="font-semibold text-foreground">4.9</span> Rating
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="reviews">
                <Card className="border-0 shadow-soft">
                  <CardContent className="p-8">
                    <div className="text-center mb-8">
                      <div className="text-4xl font-display font-bold text-foreground mb-2">
                        {course.rating}
                      </div>
                      <div className="flex items-center justify-center mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-6 w-6 text-warning fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground">
                        Based on {course.reviews} reviews
                      </p>
                    </div>
                    <div className="space-y-6">
                      {[
                        {
                          name: "Alex Morgan",
                          rating: 5,
                          comment: "This course completely changed my career path. Sarah's teaching style is incredible and the projects are so practical. Highly recommended!",
                          date: "2 weeks ago"
                        },
                        {
                          name: "Jessica Chen", 
                          rating: 5,
                          comment: "As a complete beginner, I was worried about keeping up. But the course is so well-structured and supportive. I built my first website in week 3!",
                          date: "1 month ago"
                        },
                        {
                          name: "Michael Rodriguez",
                          rating: 4,
                          comment: "Great content and excellent instructor. The only thing I'd improve is having more advanced projects, but overall fantastic value.",
                          date: "1 month ago"
                        }
                      ].map((review, index) => (
                        <div key={index} className="border-b border-border pb-6 last:border-b-0">
                          <div className="flex items-start justify-between mb-3">
                            <div>
                              <h5 className="font-semibold text-foreground">{review.name}</h5>
                              <div className="flex items-center mt-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="h-4 w-4 text-warning fill-current" />
                                ))}
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{review.date}</span>
                          </div>
                          <p className="text-muted-foreground leading-relaxed">
                            {review.comment}
                          </p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseDetail;