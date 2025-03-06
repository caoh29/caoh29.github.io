
import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  className?: string;
  children: React.ReactNode;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ 
  id, 
  className, 
  children,
  containerClassName 
}) => {
  return (
    <section 
      id={id} 
      className={cn("section-padding w-full", className)}
    >
      <div className={cn("container-content", containerClassName)}>
        {children}
      </div>
    </section>
  );
};

export default Section;
