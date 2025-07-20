
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div className={cn(
      "bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 dark:border-gray-800/50 rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden group tech-card",
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
    </div>
  );
};

export default ProjectCard;
