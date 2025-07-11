import { Card, CardContent } from "@/components/ui/card";
import { 
  Wrench, 
  Zap, 
  Camera, 
  Utensils, 
  Car, 
  Paintbrush,
  Scissors,
  Home,
  Heart,
  Laptop
} from "lucide-react";

const categories = [
  { icon: Wrench, name: "Plumbing", count: 127 },
  { icon: Zap, name: "Electrical", count: 89 },
  { icon: Camera, name: "Photography", count: 156 },
  { icon: Utensils, name: "Catering", count: 203 },
  { icon: Car, name: "Auto Repair", count: 98 },
  { icon: Paintbrush, name: "Painting", count: 76 },
  { icon: Scissors, name: "Hair & Beauty", count: 145 },
  { icon: Home, name: "Cleaning", count: 189 },
  { icon: Heart, name: "Healthcare", count: 67 },
  { icon: Laptop, name: "IT Services", count: 112 }
];

interface ServiceCategoriesProps {
  onCategorySelect: (category: string) => void;
}

export const ServiceCategories = ({ onCategorySelect }: ServiceCategoriesProps) => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover trusted professionals across all service categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.name}
                className="cursor-pointer hover:shadow-hover transition-all duration-300 hover:scale-105 hover:border-primary/20"
                onClick={() => onCategorySelect(category.name)}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.count} providers
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};