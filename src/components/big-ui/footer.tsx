import Link from "next/link";
import { FacebookIcon } from "lucide-react";
import { InstagramIcon } from "lucide-react";
import { YoutubeIcon } from "lucide-react";
import { Button } from "../ui/button";
import TiktokIcon from "../ui/icons/tiktok";
import NormalLink from "../ui/normal-link";

const Copyright = () => {
  return (
    <div className="flex flex-col items-center">
      <p>
        {"Copyright ©"}
        <NormalLink href="https://github.com/andreishark">
          Andrei
        </NormalLink>{" "}
      </p>
      <p>
      {"Copyright ©"}
        <NormalLink href="https://github.com/BlueskyBV">
          Alexandru
        </NormalLink>{" "}
      </p>
      <p>
      {"Copyright ©"}
        <NormalLink href="https://github.com/warlockina">
          Sofia
        </NormalLink>{" "}
        {new Date().getFullYear()}
      </p>
      <p className="text-primary">
        {"Copyright ©"}
        <NormalLink href="">Moisil</NormalLink> {new Date().getFullYear()}
      </p>
    </div>
  );
};

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-center">
      <p className="font-semibold text-lg text-primaryOrange">Contact us</p>
      <div className="flex flex-col items-start">
        <p>
          Email:{" "}
          <NormalLink href="mailto:andrei.varlan@saguna.ro">
            andrei.varlan@saguna.ro
          </NormalLink>
        </p>
        {/* <p> */}
        {/*   Telephone: <NormalLink href="tel:+1234567890"></NormalLink> */}
        {/* </p> */}
        {/* <p> */}
        {/*   Location: <NormalLink href="">Appolonia</NormalLink> */}
        {/* </p> */}
      </div>
    </div>
  );
};

const SocialMedia = () => {
  return (
    <div className="flex flex-wrap justify-center space-x-3">
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.facebook.com/Minitechnicus">
          <FacebookIcon />
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://www.instagram.com/Minitechnicus">
          <InstagramIcon />
        </Link>
      </Button>
      <Button variant="ghost" size="icon" asChild>
        <Link href="https://youtube.com/@mini.technicus?si=53Ni5Ua6n4YlKcSI">
          <YoutubeIcon />
        </Link>
      </Button>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="pt-10 w-full flex justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col items-center sm:gap-4 gap-8 sm:py-8 py-10 sm:text-center md:text-left">
          <div className="flex justify-center flex-col space-y-4 md:space-y-0 md:justify-between md:flex-row w-full border-solid border-t divide-current sm:pt-4 pt-8">
            <Copyright />
            <ContactInfo />
            <SocialMedia />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
