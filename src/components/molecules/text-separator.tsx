import { cn } from "@/utils/cn";

interface TextSeparatorProps {
  className?: string;
  children?: React.ReactNode;
}

function TextSeparator({ children, className }: TextSeparatorProps) {
  return (
    <div className={cn("relative flex flex-nowrap items-center", className)}>
      <div className="flex-grow border-t border-gray-200"></div>
      <span className="mx-4 flex-shrink text-gray-400">{children}</span>
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  );
}

export { TextSeparator };
