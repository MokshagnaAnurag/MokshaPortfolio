
import { cn } from "@/lib/utils";

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
  );
};

export default TechDomain;
