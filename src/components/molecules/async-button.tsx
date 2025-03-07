import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { cn } from "@/utils/cn";
import { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "../atoms/button";
import { Spinner } from "../atoms/spinner";
import { Ban, Check } from "lucide-react";

type AsyncButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    isLoading?: boolean;
    isSuccess?: boolean;
    isError?: boolean;
    defaultText: string;
    loadingText?: string;
    successText?: string;
    errorText?: string;
    className?: string;
    asChild?: boolean;
  };

function AsyncButton({
  isLoading = false,
  isSuccess = false,
  isError = false,
  defaultText,
  loadingText = "Loading...",
  successText = "Success!",
  errorText = "Error!",
  className,
  ...props
}: AsyncButtonProps) {
  let currentText = defaultText;
  let CurrentElement: React.ReactNode | null = null;
  if (isLoading) {
    currentText = loadingText;
    CurrentElement = <Spinner className="w-[18px] stroke-3 text-white" />;
  } else if (isSuccess) {
    currentText = successText;
    CurrentElement = <Check className="w-[18px] stroke-3 text-white" />;
  } else if (isError) {
    currentText = errorText;
    CurrentElement = <Ban className="w-[18px] stroke-3 text-white" />;
  }

  return (
    <Button
      className={cn("relative w-full overflow-hidden", className)}
      {...props}
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentText}
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -16, opacity: 0 }}
          transition={{ duration: 0.12 }}
          className="absolute flex items-center gap-2"
        >
          {CurrentElement && <>{CurrentElement}</>} {currentText}
        </motion.div>
      </AnimatePresence>
    </Button>
  );
}

export { AsyncButton };
