"use client";

import { ChevronDown, MenuIcon } from "lucide-react";
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
} from "../ui/navigation-menu";
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
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={objPath.path}>
                      <div className="text-lg font-medium">{objPath.title}</div>
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            }

            if (!("paths" in objPath)) {
              throw "Paths and path doesn't exist in objPath in navbar";
            }

            return (
              <NavigationMenuItem key={objPath.id}>
                <NavigationMenuTrigger className="text-lg font-medium">
                  {objPath.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 w-[200px] md:grid-cols-1">
                    {objPath.paths.map((objSubPaths) => {
                      return (
                        <ListItem
                          key={objSubPaths.id}
                          title={objSubPaths.title}
                          href={objSubPaths.route}
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
                <Button variant="ghost" size="icon">
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

                <NavigationMenu className="block pt-2 md:flex items-center gap-10 text-card-foreground list-none">
                  {navBarPaths.map((objPath) => {
                    if ("path" in objPath) {
                      return (
                        <NavigationMenuItem key={objPath.id}>
                          <Link href={objPath.path} legacyBehavior passHref>
                            <NavigationMenuLink
                              className={cn(navigationMenuTriggerStyle())}
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
                          <CollapsibleTrigger
                            className={cn(
                              navigationMenuTriggerStyle(),
                              "text-lg font-medium",
                            )}
                          >
                            <div className="flex">
                              {objPath.title}
                              {""}
                              <ChevronDown
                                className="relative top-[1px] ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180 self-center"
                                aria-hidden="true"
                              />
                            </div>
                          </CollapsibleTrigger>

                          <CollapsibleContent className="text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2">
                            {objPath.paths.map((objSubPaths) => {
                              return (
                                <NavigationMenuLink
                                  key={objSubPaths.id}
                                  asChild
                                  className={cn(
                                    navigationMenuTriggerStyle(),
                                    "w-full",
                                  )}
                                >
                                  <Link href={objSubPaths.route}>
                                    <div className="w-full text-left ml-5">
                                      {objSubPaths.title}
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              );
                            })}
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
