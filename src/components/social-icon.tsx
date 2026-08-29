type SocialIconProps = {
  name: "facebook" | "instagram" | "linkedin" | "twitter";
};

export function SocialIcon({ name }: SocialIconProps) {
  if (name === "instagram") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full fill-none stroke-current stroke-2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" className="fill-current stroke-none" /></svg>;
  }

  if (name === "facebook") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full"><path d="M14 21v-8h3l.5-3H14V8.2c0-.9.3-1.7 1.8-1.7H18V3.8c-.4 0-1.6-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.8V10H8v3h2.5v8H14Z" className="fill-current stroke-none" /></svg>;
  }

  if (name === "linkedin") {
    return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full fill-none stroke-current stroke-2"><path d="M5 8.5V20M5 4v.2M10 20v-6.5c0-2.7 4.5-3.1 4.5.4V20M10 9v11M14.5 12.5c.5-2.4 4.5-2.3 4.5 1.4V20" /></svg>;
  }

  return <svg aria-hidden="true" viewBox="0 0 24 24" className="h-full w-full"><path d="M21 6.2c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.6.8-2.6 1A4 4 0 0 0 11 9.3 11.4 11.4 0 0 1 2.7 5c-1.1 2 .2 4.4 2.1 5.1-.7 0-1.3-.2-1.8-.5 0 2 1.4 3.8 3.3 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 2.9A8.1 8.1 0 0 1 3.3 18c-.3 0-.7 0-1-.1A11.5 11.5 0 0 0 8.5 20c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.5 1.4-1.1 1.9-1.7Z" className="fill-current stroke-none" /></svg>;
}
