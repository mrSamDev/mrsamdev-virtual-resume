import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

type Location = string;
type ApiResponse = Location[];

const fetchLocations = async (): Promise<ApiResponse> => {
  const response = await fetch("http://mynotes.mrsamdev.xyz/list");
  if (!response.ok) {
    throw new Error("Failed to fetch locations");
  }
  return response.json();
};

const fallbackLocations: Location[] = ["Germany", "Netherlands", "London", "Switzerland", "Canada", "Australia", "Singapore", "UAE", "Sweden", "Denmark", "Norway", "Austria"];

const RotatingLocation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);

  const { data: apiLocations, isLoading } = useQuery<ApiResponse, Error>({
    queryKey: ["locations"],
    queryFn: fetchLocations,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  const locations: Location[] = apiLocations?.length ? apiLocations : fallbackLocations;

  useEffect(() => {
    if (!locations?.length) return;

    const interval = setInterval(() => {
      setIsAnimating(true);

      setTimeout(() => {
        setCurrentIndex((prev: number) => (prev + 1) % locations.length);
        setIsAnimating(false);
      }, 150);
    }, 3000);

    return () => clearInterval(interval);
  }, [locations]);

  // Show fallback locations even during loading
  const currentLocation: Location = locations[currentIndex];

  return (
    <div className="inline-block">
      <span className="text-xs text-gray-500">
        Kerala, India • Open to relocation in{" "}
        <span className="inline-block w-20 text-center">
          <span className={`inline-block transition-all duration-300 ${isAnimating ? "opacity-0 transform translate-y-1" : "opacity-100 transform translate-y-0"}`}>{currentLocation}</span>
        </span>
        {isLoading && <span className="ml-1 inline-block w-1 h-1 bg-gray-400 rounded-full animate-pulse" />}
      </span>
    </div>
  );
};

export default RotatingLocation;
