import React from "react";
import { cn } from "@/lib/utils";
import { Logo } from "../ui/logo";
import Link from "next/link";

/* eslint-disable  */
export interface NavLogoProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {}

const NavLogo = React.forwardRef<HTMLDivElement, NavLogoProps>(
  ({ className }, ref) => {
    const src = `/assets/sigla_648.svg`;
    const alt = "logo";

    return (
      <Logo
        src={src}
        alt={alt}
        className={cn("w-20 h-20", className)}
        ref={ref}
      />
    );
  },
);

const NavLogoLink = React.forwardRef<HTMLDivElement, NavLogoProps>(
  ({ className }, ref) => {
    const href = "/";

    return (
      <Link href={href}>
        <NavLogo className={className} ref={ref} />
      </Link>
    );
  },
);

NavLogo.displayName = "NavLogo";
NavLogoLink.displayName = "NavLogoLink";

export { NavLogo as NavLogo, NavLogoLink as NavLogoLink };
