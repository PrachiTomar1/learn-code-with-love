import { useState } from "react";
import { Search, Filter, Star, Clock, Users, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import webDevImage from "@/assets/course-web-dev.jpg";
import pythonImage from "@/assets/course-python.jpg";
import javascriptImage from "@/assets/course-javascript.jpg";

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLevel, setSelectedLevel] = useState("All");

  const categories = ["All", "Web Development", "Python", "JavaScript", "Data Science", "Mobile", "Backend"];
  const levels = ["All", "Beginner", "Intermediate", "Advanced"];

  const courses = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      description: "Learn HTML, CSS, and JavaScript from scratch with hands-on projects and real-world examples.",
      image: webDevImage,
      category: "Web Development",
      level: "Beginner",
      duration: "8 weeks",
      students: "12,500+",
      rating: 4.9,
      price: "Free",
      instructor: "Sarah Johnson",
      lessons: 45,
    },
    {
      id: 2,
      title: "Python Programming Essentials",
      description: "Master Python basics and build real-world applications including web scrapers and data analysis tools.",
      image: pythonImage,
      category: "Python",
      level: "Beginner",
      duration: "10 weeks",
      students: "9,800+",
      rating: 4.8,
      price: "$49",
      instructor: "Dr. Michael Chen",
      lessons: 52,
    },
    {
      id: 3,
      title: "Modern JavaScript & ES6+",
      description: "Deep dive into modern JavaScript features, async programming, and popular frameworks like React.",
      image: javascriptImage,
      category: "JavaScript",
      level: "Intermediate",
      duration: "12 weeks",
      students: "7,200+",
      rating: 4.9,
      price: "$79",
      instructor: "Alex Rodriguez",
      lessons: 68,
    },
    {
      id: 4,
      title: "React Development Mastery",
      description: "Build dynamic user interfaces with React, including hooks, state management, and testing.",
      image: webDevImage,
      category: "Web Development",
      level: "Intermediate",
      duration: "14 weeks",
      students: "6,500+",
      rating: 4.8,
      price: "$99",
      instructor: "Emma Thompson",
      lessons: 72,
    },
    {
      id: 5,
      title: "Python Data Science",
      description: "Analyze data and build machine learning models using pandas, NumPy, and scikit-learn.",
      image: pythonImage,
      category: "Data Science",
      level: "Advanced",
      duration: "16 weeks",
      students: "4,200+",
      rating: 4.9,
      price: "$149",
      instructor: "Dr. Lisa Wang",
      lessons: 89,
    },
    {
      id: 6,
      title: "Full-Stack JavaScript",
      description: "Build complete web applications with Node.js, Express, MongoDB, and modern frontend frameworks.",
      image: javascriptImage,
      category: "Web Development",
      level: "Advanced",
      duration: "20 weeks",
      students: "3,800+",
      rating: 4.7,
      price: "$199",
      instructor: "Mark Davidson",
      lessons: 95,
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesLevel = selectedLevel === "All" || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-display font-bold text-foreground mb-4">
            Explore Our Courses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover the perfect course for your learning journey. From beginner-friendly introductions 
            to advanced specializations, we have something for everyone.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card border border-border rounded-2xl p-6 shadow-soft mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="w-full px-3 py-2 bg-background border border-border rounded-lg text-foreground focus:ring-2 focus:ring-ring focus:border-transparent"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredCourses.length} of {courses.length} courses
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredCourses.map((course) => (
            <Card key={course.id} className="bg-card border-0 shadow-soft hover-lift group">
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <Badge variant={course.level === "Beginner" ? "secondary" : course.level === "Intermediate" ? "default" : "destructive"}>
                    {course.level}
                  </Badge>
                  <Badge variant="outline" className="bg-white/90">
                    {course.price}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-sm">
                    <Star className="h-4 w-4 text-warning fill-current mr-1" />
                    {course.rating}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <Badge variant="outline" className="text-xs">
                    {course.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-smooth">
                  {course.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                  {course.description}
                </p>
                <div className="text-sm text-muted-foreground mb-4 space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="h-4 w-4 mr-2" />
                      {course.lessons} lessons
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {course.students}
                    </div>
                    <span className="font-medium">By {course.instructor}</span>
                  </div>
                </div>
                <Button asChild className="w-full bg-gradient-primary border-0 hover:shadow-glow">
                  <Link to={`/course/${course.id}`}>
                    View Course
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-muted/50 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              No courses found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search or filter criteria.
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("All");
                setSelectedLevel("All");
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Load More */}
        {filteredCourses.length > 0 && (
          <div className="text-center">
            <Button variant="outline" size="lg" className="hover-lift">
              Load More Courses
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Courses;