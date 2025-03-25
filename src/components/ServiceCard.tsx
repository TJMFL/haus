import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  delay?: number;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  className,
  delay = 0 
}: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 md:p-8 flex flex-col h-full transition-all hover:translate-y-[-5px] hover:shadow-2xl duration-300 group",
        className
      )}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'both' 
      }}
    >
      <div className="mb-4 text-red-500">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-red-500 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-400 flex-grow">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
