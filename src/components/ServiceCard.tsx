import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Phone, Heart } from "lucide-react";
import { useState } from "react";

interface ServiceProvider {
  id: string;
  name: string;
  category: string;
  rating: number;
  reviewCount: number;
  location: string;
  distance: string;
  image: string;
  description: string;
  price: string;
  isOpen: boolean;
  verified: boolean;
  responseTime: string;
}

interface ServiceCardProps {
  provider: ServiceProvider;
  onViewDetails: (id: string) => void;
}

export const ServiceCard = ({ provider, onViewDetails }: ServiceCardProps) => {
  const [isFavorited, setIsFavorited] = useState(false);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating 
            ? "fill-warning text-warning" 
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <Card className="overflow-hidden hover:shadow-hover transition-all duration-300 hover:scale-[1.02] group">
      <div className="relative">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 flex gap-2">
          {provider.verified && (
            <Badge variant="default" className="bg-success text-success-foreground">
              Verified
            </Badge>
          )}
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8 bg-white/90 hover:bg-white"
            onClick={(e) => {
              e.stopPropagation();
              setIsFavorited(!isFavorited);
            }}
          >
            <Heart className={`h-4 w-4 ${isFavorited ? "fill-red-500 text-red-500" : ""}`} />
          </Button>
        </div>
        <div className="absolute top-3 left-3">
          <Badge 
            variant={provider.isOpen ? "default" : "secondary"}
            className={provider.isOpen ? "bg-success text-success-foreground" : ""}
          >
            {provider.isOpen ? "Open" : "Closed"}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {provider.name}
            </h3>
            <p className="text-muted-foreground text-sm">{provider.category}</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-semibold text-foreground">{provider.price}</div>
          </div>
        </div>
        
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">{renderStars(provider.rating)}</div>
          <span className="font-semibold text-foreground ml-1">{provider.rating}</span>
          <span className="text-muted-foreground text-sm">({provider.reviewCount} reviews)</span>
        </div>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {provider.description}
        </p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{provider.location} • {provider.distance}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Responds in {provider.responseTime}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="trust" 
            className="flex-1"
            onClick={() => onViewDetails(provider.id)}
          >
            View Details
          </Button>
          <Button variant="outline" size="icon">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};