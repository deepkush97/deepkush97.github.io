import React from "react";
import { InfoSection } from "../InfoSection";
import { SocialMediaCard } from "../SocialMediaCard";
import { socials } from "../../configs/data";
export const ContactSection = () => {
  return (
    <InfoSection id="contact">
      <div className="flex h-full flex-row mt-8">
        {socials.map((social, index) => (
          <SocialMediaCard
            key={index}
            description={social.description}
            url={social.url}
            iconClass={social.iconClass}
            linkText={social.linkText}
          />
        ))}
      </div>
    </InfoSection>
  );
};
