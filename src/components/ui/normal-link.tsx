import Link from "next/link";
import { Button } from "./button";
import React from "react";

import { cn } from "@/lib/utils";

export interface NormalLinkProps
  extends React.ButtonHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

const NormalLink = React.forwardRef<HTMLAnchorElement, NormalLinkProps>(
  ({ className, children, href, ...props }, ref) => {
    return (
      <Button
        variant="linkHover2"
        className={cn(className, "font-normal text-base px-0 py-0 h-0")}
        asChild
      >
        <Link ref={ref} href={href} {...props}>
          {children}
        </Link>
      </Button>
    );
  },
);

NormalLink.displayName = "normal-link";

export default NormalLink;
