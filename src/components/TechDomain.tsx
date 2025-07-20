
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
        "tech-card group relative rounded-xl border border-white/10 p-6 shadow-md transition-all duration-500 hover:shadow-xl backdrop-blur-sm bg-[#181c24]/80",
        className
      )}
    >
      <div className={`absolute inset-x-0 top-0 h-2 rounded-t-xl ${color}`} />
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color} shadow-lg transition-transform duration-500 group-hover:scale-110`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-white">{description}</p>
      
      {/* Enhanced hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-white/5 to-transparent rounded-xl transition-opacity duration-500 pointer-events-none"></div>
    </div>
  );
};

export default TechDomain;
