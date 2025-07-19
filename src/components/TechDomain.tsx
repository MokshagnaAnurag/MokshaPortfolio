
import { cn } from "@/lib/utils";
<<<<<<< HEAD
<<<<<<< HEAD
=======
import { Card } from "@/components/ui/card";
>>>>>>> ab37948 (Initial commit)
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)

interface TechDomainProps {
  title: string;
  icon: React.ReactNode;
  color: string;
  description: string;
  className?: string;
}

const TechDomain = ({
  title,
  icon,
  color,
  description,
  className,
}: TechDomainProps) => {
  return (
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
    <div 
      className={cn(
        "relative rounded-xl border p-6 shadow-sm transition-all hover:shadow-md",
        className
      )}
    >
      <div className={`absolute inset-x-0 top-0 h-1 ${color}`} />
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color} bg-opacity-20`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
<<<<<<< HEAD
=======
    <Card 
      className={cn(
        "tech-card group relative rounded-xl border p-6 shadow-md transition-all duration-500 hover:shadow-xl backdrop-blur-sm",
        className
      )}
    >
      <div className={`absolute inset-x-0 top-0 h-2 rounded-t-xl ${color}`} />
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color} shadow-lg transition-transform duration-500 group-hover:scale-110`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
      </div>
      <p className="text-muted-foreground">{description}</p>
      
      {/* Enhanced hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/5 to-transparent rounded-xl transition-opacity duration-500 pointer-events-none"></div>
    </Card>
>>>>>>> ab37948 (Initial commit)
=======
>>>>>>> 9f0c42e (Update portfolio: new navbar, about, and experience sections)
  );
};

export default TechDomain;
