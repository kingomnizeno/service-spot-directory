import { useState } from "react";
import { SearchHeader } from "@/components/SearchHeader";
import { ServiceCategories } from "@/components/ServiceCategories";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { MapIcon, List } from "lucide-react";

// Mock data for service providers
const mockProviders = [
  {
    id: "1",
    name: "Quick Fix Plumbing",
    category: "Plumbing",
    rating: 4.8,
    reviewCount: 127,
    location: "Downtown",
    distance: "2.1 miles",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=300&fit=crop",
    description: "Professional plumbing services with 24/7 emergency support. Licensed and insured with over 15 years of experience.",
    price: "$45/hr",
    isOpen: true,
    verified: true,
    responseTime: "under 1 hour"
  },
  {
    id: "2",
    name: "Spark Electric Co.",
    category: "Electrical",
    rating: 4.9,
    reviewCount: 89,
    location: "Midtown",
    distance: "3.4 miles",
    image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop",
    description: "Expert electrical repairs and installations. Free estimates and guaranteed work for all residential projects.",
    price: "$65/hr",
    isOpen: true,
    verified: true,
    responseTime: "under 2 hours"
  },
  {
    id: "3",
    name: "Lens & Light Photography",
    category: "Photography",
    rating: 4.7,
    reviewCount: 156,
    location: "Arts District",
    distance: "4.2 miles",
    image: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=400&h=300&fit=crop",
    description: "Wedding and event photography with a creative eye. Package deals available for full-day coverage.",
    price: "$200/session",
    isOpen: false,
    verified: true,
    responseTime: "within 24 hours"
  },
  {
    id: "4",
    name: "Fresh Flavors Catering",
    category: "Catering",
    rating: 4.6,
    reviewCount: 203,
    location: "West End",
    distance: "5.1 miles",
    image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=300&fit=crop",
    description: "Farm-to-table catering for events of all sizes. Customizable menus with vegetarian and vegan options.",
    price: "$25/person",
    isOpen: true,
    verified: true,
    responseTime: "within 4 hours"
  },
  {
    id: "5",
    name: "Auto Care Plus",
    category: "Auto Repair",
    rating: 4.5,
    reviewCount: 98,
    location: "Industrial District",
    distance: "6.3 miles",
    image: "https://images.unsplash.com/photo-1632729403215-55f4415b72b8?w=400&h=300&fit=crop",
    description: "Complete automotive repair and maintenance. State-of-the-art equipment and certified technicians.",
    price: "$85/hr",
    isOpen: true,
    verified: false,
    responseTime: "same day"
  },
  {
    id: "6",
    name: "Pristine Painters",
    category: "Painting",
    rating: 4.8,
    reviewCount: 76,
    location: "Suburban",
    distance: "7.2 miles",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=300&fit=crop",
    description: "Interior and exterior painting services. Premium paint brands and detailed preparation work included.",
    price: "$40/hr",
    isOpen: true,
    verified: true,
    responseTime: "within 3 hours"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [viewMode, setViewMode] = useState<"list" | "map">("list");

  const filteredProviders = mockProviders.filter(provider => {
    const matchesSearch = searchTerm === "" || 
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "" || 
      provider.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setSearchTerm(category);
  };

  const handleFilterClick = () => {
    // TODO: Implement filter modal
    console.log("Filter clicked");
  };

  const handleViewDetails = (id: string) => {
    // TODO: Navigate to provider detail page
    console.log("View details for provider:", id);
  };

  return (
    <div className="min-h-screen bg-background">
      <SearchHeader
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        location={location}
        onLocationChange={setLocation}
        onFilterClick={handleFilterClick}
      />
      
      {!searchTerm && !selectedCategory && (
        <ServiceCategories onCategorySelect={handleCategorySelect} />
      )}
      
      {(searchTerm || selectedCategory) && (
        <section className="py-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  {selectedCategory ? `${selectedCategory} Services` : "Search Results"}
                </h2>
                <p className="text-muted-foreground">
                  {filteredProviders.length} providers found
                </p>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  variant={viewMode === "list" ? "default" : "outline"}
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                  List
                </Button>
                <Button 
                  variant={viewMode === "map" ? "default" : "outline"}
                  onClick={() => setViewMode("map")}
                >
                  <MapIcon className="h-4 w-4" />
                  Map
                </Button>
              </div>
            </div>
            
            {viewMode === "list" ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProviders.map((provider) => (
                  <ServiceCard
                    key={provider.id}
                    provider={provider}
                    onViewDetails={handleViewDetails}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-muted rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Map View Coming Soon
                  </h3>
                  <p className="text-muted-foreground">
                    Interactive map with service provider locations will be available here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      )}
      
      {!searchTerm && !selectedCategory && (
        <section className="py-16 px-4 bg-muted/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Why Choose My Services?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl text-primary-foreground">✓</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Verified Providers</h3>
                <p className="text-muted-foreground">
                  All service providers go through our verification process to ensure quality and reliability.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl text-accent-foreground">★</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Real Reviews</h3>
                <p className="text-muted-foreground">
                  Read authentic reviews from verified customers to make informed decisions.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-2xl text-primary-foreground">🏠</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground">Local Focus</h3>
                <p className="text-muted-foreground">
                  Supporting local businesses and connecting you with services in your community.
                </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Index;
