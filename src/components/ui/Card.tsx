// src/components/ui/Card.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// CVA Card Variants
const cardVariants = cva(
  // Base styles
  "bg-white border transition-all duration-300",
  {
    variants: {
      variant: {
        default: 
          "border-gray-200 shadow-sm hover:shadow-md",
        luxury: 
          "border-gray-100 shadow-luxury hover:shadow-luxury-lg",
        elevated: 
          "border-none shadow-lg hover:shadow-xl",
        outlined: 
          "border-2 border-gray-300 shadow-none hover:border-vessel-black",
        ghost: 
          "border-transparent shadow-none hover:bg-gray-50",
        product: 
          "border-gray-100 shadow-sm hover:shadow-lg group cursor-pointer overflow-hidden",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
      },
      interactive: {
        true: "cursor-pointer hover:scale-[1.02] active:scale-[0.98]",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      rounded: "none",
      interactive: false,
    },
  }
);

// Card Props Interface
export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean;
}

// Card Component
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, rounded, interactive, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, size, rounded, interactive, className }))}
      {...props}
    />
  )
);

// Card Header
const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 pb-4", className)}
    {...props}
  />
));

// Card Title
const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-xl font-semibold leading-none tracking-tight font-montserrat",
      className
    )}
    {...props}
  />
));

// Card Description
const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-600 font-inter", className)}
    {...props}
  />
));

// Card Content
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pt-0", className)} {...props} />
));

// Card Footer
const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center pt-4", className)}
    {...props}
  />
));

Card.displayName = "Card";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";
CardDescription.displayName = "CardDescription";
CardContent.displayName = "CardContent";
CardFooter.displayName = "CardFooter";

export { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  CardFooter,
  cardVariants 
};