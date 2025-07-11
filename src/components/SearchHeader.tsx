import { Search, MapPin, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface SearchHeaderProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  location: string;
  onLocationChange: (value: string) => void;
  onFilterClick: () => void;
}

export const SearchHeader = ({ 
  searchTerm, 
  onSearchChange, 
  location, 
  onLocationChange, 
  onFilterClick 
}: SearchHeaderProps) => {
  return (
    <div className="w-full bg-gradient-hero py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Trusted Local Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Connect with verified local professionals in your community. 
            Real reviews from real customers.
          </p>
        </div>
        
        <Card className="p-6 shadow-hover bg-background/95 backdrop-blur-sm">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="What service do you need?"
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Enter your location"
                value={location}
                onChange={(e) => onLocationChange(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            
            <div className="flex gap-2">
              <Button variant="hero" className="flex-1 h-12">
                <Search className="h-4 w-4" />
                Search
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                onClick={onFilterClick}
                className="h-12 w-12"
              >
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};