// src/components/ui/Button.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

// CVA Button Variants
const buttonVariants = cva(
  // Base styles
  "inline-flex items-center justify-center whitespace-nowrap rounded-none font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 uppercase tracking-wider",
  {
    variants: {
      variant: {
        // Primary - مشکی لوکس
        primary: 
          "bg-vessel-black text-vessel-white hover:bg-gray-800 focus-visible:ring-vessel-black shadow-sm",
        
        // Secondary - outline مشکی
        secondary: 
          "border-2 border-vessel-black bg-transparent text-vessel-black hover:bg-vessel-black hover:text-vessel-white focus-visible:ring-vessel-black",
        
        // Gold - طلایی لوکس
        gold: 
          "bg-vessel-gold text-vessel-black hover:bg-yellow-500 focus-visible:ring-vessel-gold shadow-gold",
        
        // Gold Outline
        "gold-outline": 
          "border-2 border-vessel-gold bg-transparent text-vessel-gold hover:bg-vessel-gold hover:text-vessel-black focus-visible:ring-vessel-gold",
        
        // Ghost - شفاف
        ghost: 
          "bg-transparent text-vessel-black hover:bg-gray-100 focus-visible:ring-gray-300",
        
        // Link - فقط متن
        link: 
          "text-vessel-black underline-offset-4 hover:underline p-0 h-auto font-normal normal-case tracking-normal",
        
        // Destructive - قرمز
        destructive: 
          "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-600 shadow-sm",
        
        // White - سفید برای پس‌زمینه تیره
        white: 
          "!bg-white text-vessel-black hover:bg-gray-50 focus-visible:ring-gray-300 shadow-sm",
        
        // Green Golf
        green: 
          "bg-vessel-green text-white hover:bg-green-800 focus-visible:ring-vessel-green shadow-sm",
      },
      size: {
        sm: "h-9 px-3 py-2 text-xs",
        default: "h-11 px-6 py-3 text-sm",
        lg: "h-12 px-8 py-3 text-base",
        xl: "h-14 px-10 py-4 text-lg",
        icon: "h-10 w-10 p-0",
        "icon-sm": "h-8 w-8 p-0",
        "icon-lg": "h-12 w-12 p-0",
      },
      fullWidth: {
        true: "w-full",
        false: "w-auto",
      },
      rounded: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      fullWidth: false,
      rounded: "none",
    },
  }
);

// Button Props Interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

// Button Component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    fullWidth, 
    rounded,
    loading = false,
    leftIcon,
    rightIcon,
    children, 
    disabled,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;

    return (
      <button
        className={cn(buttonVariants({ variant, size, fullWidth, rounded, className }))}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {loading && (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        )}
        {!loading && leftIcon && (
          <span className="mr-2">{leftIcon}</span>
        )}
        {children}
        {!loading && rightIcon && (
          <span className="ml-2">{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };