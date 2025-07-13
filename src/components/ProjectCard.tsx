
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
<<<<<<< HEAD
=======
import { Card } from "@/components/ui/card";
>>>>>>> ab37948 (Initial commit)

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  links: {
    github?: string;
    demo?: string;
  };
  className?: string;
}

const ProjectCard = ({
  title,
  description,
  category,
  image,
  tags,
  links,
  className,
}: ProjectCardProps) => {
  return (
<<<<<<< HEAD
    <div className={cn(
      "tech-card group overflow-hidden",
      className
    )}>
      <div className="aspect-video overflow-hidden rounded-md mb-5 bg-muted relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="font-medium">
            {category}
          </Badge>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground mb-4">
        {description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-5">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="bg-background">
            {tag}
          </Badge>
        ))}
      </div>
      
      <div className="flex items-center gap-3 mt-auto">
        {links.github && (
          <Button variant="outline" size="sm" asChild>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <Github size={16} /> GitHub
            </a>
          </Button>
        )}
        {links.demo && (
          <Button variant="secondary" size="sm" asChild>
            <a
              href={links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          </Button>
        )}
      </div>
=======
    <div
      className={cn(
        "relative group rounded-2xl p-[2px] bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <Card
        className={
          `rounded-2xl 
    bg-white/90 dark:bg-[#18192a]/95 
    border border-blue-200 dark:border-[#23234a] 
    shadow-lg flex flex-col h-full transition-all duration-300 overflow-hidden
    text-black dark:text-white`
        }
      >
        {/* Image */}
        <div className="aspect-video overflow-hidden rounded-t-2xl mb-5 bg-muted relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {/* Category badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white shadow-md border border-white/20">
              {category}
            </span>
          </div>
        </div>
        {/* Title */}
        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-blue-400 transition-colors px-6">
          {title}
        </h3>
        {/* Description */}
        <p className="text-muted-foreground mb-4 px-6">
          {description}
        </p>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5 px-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-blue-100 via-indigo-100 to-purple-100 dark:from-blue-900/40 dark:via-indigo-900/40 dark:to-purple-900/40 text-blue-700 dark:text-blue-200 border border-blue-200 dark:border-blue-800 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Buttons */}
        <div className="flex items-center gap-3 mt-auto px-6 pb-6">
          {links.github && (
            <Button
              size="sm"
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md px-4 py-2 transition-colors"
            >
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                <Github size={16} /> GitHub
              </a>
            </Button>
          )}
          {links.demo && (
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-blue-600 text-blue-600 dark:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg px-4 py-2"
            >
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </Button>
          )}
        </div>
      </Card>
>>>>>>> ab37948 (Initial commit)
    </div>
  );
};

export default ProjectCard;
