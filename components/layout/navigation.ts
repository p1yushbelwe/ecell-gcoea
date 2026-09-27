export type NavbarItem =
  | {
      label: string;
      href: string;
      sectionId?: never;
    }
  | {
      label: string;
      sectionId: string;
      href?: never;
    };

  export const defaultNavbarItems: NavbarItem[] = [
    { label: "About", sectionId: "about" },
    { label: "Events", sectionId: "events" },
    { label: "Team", href: "/team" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact", sectionId: "contact" },
  ];

export const navbarItemHref = (item: NavbarItem): string => {
  if ("href" in item && item.href) return item.href;
  return `/#${item.sectionId}`;
};