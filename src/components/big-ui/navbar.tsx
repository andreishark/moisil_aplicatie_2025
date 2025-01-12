"use client";

import { MenuIcon } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { NavLogoLink } from "./nav-logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
} from "@radix-ui/react-navigation-menu";
import { ListItem, navigationMenuTriggerStyle } from "../ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

import { cn } from "@/lib/utils";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import { navBarConfig } from "@/configs/navBar";
import { ModeToggle } from "../ui/mode-toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Navbar = () => {
  const navBarPaths = navBarConfig;
  const { theme } = useTheme();
  const [color, setColor] = useState("white");

  useEffect(() => {
    setColor(theme == "light" ? "black" : "white");
  }, [theme]);

  return (
    <div>
      <Card className="w-full bg-navbar py-3 px-4 border-0 flex items-center justify-between gap-1 rounded-none">
        {/* <ShadcnKit className="text-primary cursor-pointer" /> */}
        <NavLogoLink />

        <NavigationMenu className="hidden md:flex items-center gap-10 text-card-foreground list-none">
          {Object.values(navBarPaths).map((objPath) => {
            if ("path" in objPath) {
              return (
                <NavigationMenuItem key={objPath.id}>
                  <Link href={objPath.path} legacyBehavior passHref>
                    <NavigationMenuLink className={cn("bg-transparent")}>
                      <div className="text-lg text-primary font-medium">
                        {objPath.title}
                      </div>
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              );
            }

            if (!("paths" in objPath)) {
              throw "Paths and path doesn't exist in objPath in navbar";
            }

            return (
              <NavigationMenuItem key={objPath.id}>
                <NavigationMenuTrigger className="text-lg text-primary font-medium">
                  {objPath.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent className="absolute bg-navbar">
                  <ul className="grid w-auto gap-3 p-4 grid-cols-1">
                    {objPath.paths.map((objSubPaths) => {
                      return (
                        <ListItem
                          key={objSubPaths.id}
                          title={objSubPaths.title}
                          href={objSubPaths.route}
                          className="text-primary hover:bg-transparent bg-transparent hover:text-secondary"
                        ></ListItem>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          })}
        </NavigationMenu>

        <div className="flex items-center">
          <div className="flex md:hidden mr-2 items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="bg-transparent hover:bg-transparent"
                >
                  <MenuIcon
                    className="h-5 w-5 rotate-0 scale-100"
                    color={color}
                  />
                </Button>
              </SheetTrigger>

              <SheetContent className="bg-navbar border-0" side="right">
                <SheetHeader>
                  <SheetTitle>
                    <NavLogoLink />
                  </SheetTitle>
                </SheetHeader>

                <NavigationMenu className="pt-2 md:flex items-center gap-10 text-card-foreground list-none">
                  {navBarPaths.map((objPath) => {
                    if ("path" in objPath) {
                      return (
                        <NavigationMenuItem key={objPath.id}>
                          <Link href={objPath.path} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(
                                navigationMenuTriggerStyle(),
                                "bg-transparent hover:bg-transparent",
                              )}
                            >
                              <div className="text-primary font-medium text-lg">
                                {objPath.title}
                              </div>
                            </NavigationMenuLink>
                          </Link>
                        </NavigationMenuItem>
                      );
                    }

                    if (!("paths" in objPath)) {
                      throw "Paths and path doesn't exist in objPath in navbar";
                    }

                    return (
                      <NavigationMenuItem key={objPath.id}>
                        <Collapsible>
                          <CollapsibleTrigger asChild>
                            <Button
                              variant="ghost"
                              className="text-lg text-primary font-medium hover:bg-transparent hover:text-primary"
                            >
                              {objPath.title}
                            </Button>
                          </CollapsibleTrigger>

                          <CollapsibleContent className="pl-2 grid grid-cols-1 CollapsibleContent">
                            {objPath.paths.map((objSubPaths) => (
                              <Link
                                href={objSubPaths.route}
                                key={objSubPaths.id}
                                legacyBehavior
                                passHref
                              >
                                <NavigationMenuLink
                                  className={cn(
                                    navigationMenuTriggerStyle(),
                                    "text-primary bg-transparent hover:bg-transparent hover:text-secondary",
                                  )}
                                >
                                  {objSubPaths.title}
                                </NavigationMenuLink>
                              </Link>
                            ))}
                          </CollapsibleContent>
                        </Collapsible>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenu>
              </SheetContent>
            </Sheet>
          </div>

          {/* <ThemeToggle /> */}
          <ModeToggle />
        </div>
      </Card>
    </div>
  );
};

export default Navbar;
