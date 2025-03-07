import { type VariantProps, cva } from "class-variance-authority";
import { Loader2, Circle } from "lucide-react";
import { cn } from "@/utils/cn";

const spinnerVariants = cva("relative", {
  variants: {
    show: {
      true: "block",
      false: "hidden",
    },
  },
  defaultVariants: {
    show: true,
  },
});

const loaderVariants = cva("text-primary", {
  variants: {
    size: {
      small: "size-6",
      medium: "size-8",
      large: "size-12",
    },
  },
  defaultVariants: {
    size: "medium",
  },
});

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string;
}

function Spinner({ size, show, className }: SpinnerContentProps) {
  return (
    <span className={spinnerVariants({ show })}>
      <Circle
        className={cn(
          loaderVariants({ size }),
          "absolute inset-0 opacity-15",
          className,
        )}
      />
      <Loader2
        className={cn(loaderVariants({ size }), "animate-spin", className)}
      />
    </span>
  );
}

export { Spinner };
