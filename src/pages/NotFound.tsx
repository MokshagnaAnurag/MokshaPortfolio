
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center space-y-6 p-6">
        <div className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
          404
        </div>
        <h1 className="text-2xl md:text-3xl font-bold">Page Not Found</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <div className="pt-4">
          <Button onClick={() => navigate("/")} className="inline-flex items-center">
            <ArrowLeft size={16} className="mr-2" /> Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
