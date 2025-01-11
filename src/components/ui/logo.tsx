import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { cn } from "@/lib/utils";

export interface LogoProps extends React.ButtonHTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({ className, src, alt }, ref) => {
    return (
      <Avatar className={cn(className)} ref={ref}>
        <AvatarImage src={src} alt={alt} />
        <AvatarFallback>{alt}</AvatarFallback>
      </Avatar>
    );
  },
);

Logo.displayName = "Logo";

export { Logo };
