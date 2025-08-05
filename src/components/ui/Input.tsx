// src/components/ui/Input.tsx
import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Eye, EyeOff } from 'lucide-react';

// CVA Input Variants
const inputVariants = cva(
    // Base styles
    "flex w-full border bg-white px-3 py-2 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "border-gray-300 focus-visible:border-vessel-black focus-visible:ring-2 focus-visible:ring-vessel-black/20",
                error:
                    "border-red-500 focus-visible:border-red-500 focus-visible:ring-2 focus-visible:ring-red-500/20",
                success:
                    "border-green-500 focus-visible:border-green-500 focus-visible:ring-2 focus-visible:ring-green-500/20",
                ghost:
                    "border-transparent bg-gray-50 focus-visible:bg-white focus-visible:border-gray-300",
            },
            size: {
                sm: "h-9 px-2 text-xs",
                default: "h-11 px-3",
                lg: "h-12 px-4 text-base",
            },
            rounded: {
                none: "rounded-none",
                sm: "rounded-sm",
                md: "rounded-md",
                lg: "rounded-lg",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
            rounded: "none",
        },
    }
);

// Input Props Interface
export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
    label?: string;
    error?: string;
    success?: string;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    isPassword?: boolean;
}

// Input Component
const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({
        className,
        variant,
        size,
        rounded,
        type = "text",
        label,
        error,
        success,
        leftIcon,
        rightIcon,
        isPassword = false,
        ...props
    }, ref) => {
        const [showPassword, setShowPassword] = React.useState(false);
        const [inputType, setInputType] = React.useState(type);

        // Handle password visibility
        React.useEffect(() => {
            if (isPassword) {
                setInputType(showPassword ? 'text' : 'password');
            } else {
                setInputType(type);
            }
        }, [isPassword, showPassword, type]);

        // Determine variant based on error/success
        const computedVariant = React.useMemo(() => {
            if (error) return 'error';
            if (success) return 'success';
            return variant;
        }, [error, success, variant]);

        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-2 font-montserrat">
                        {label}
                    </label>
                )}

                <div className="relative">
                    {leftIcon && (
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {leftIcon}
                        </div>
                    )}

                    <input
                        type={inputType}
                        className={cn(
                            inputVariants({ variant: computedVariant, size, rounded }),
                            leftIcon && "pl-10",
                            (rightIcon || isPassword) && "pr-10",
                            className
                        )}
                        ref={ref}
                        {...props}
                    />

                    {isPassword && (
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            {showPassword ? (
                                <EyeOff className="h-4 w-4" />
                            ) : (
                                <Eye className="h-4 w-4" />
                            )}
                        </button>
                    )}

                    {rightIcon && !isPassword && (
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                            {rightIcon}
                        </div>
                    )}
                </div>

                {error && (
                    <p className="mt-1 text-sm text-red-600 font-inter">{error}</p>
                )}

                {success && (
                    <p className="mt-1 text-sm text-green-600 font-inter">{success}</p>
                )}
            </div>
        );
    }
);

Input.displayName = "Input";

export { Input, inputVariants };