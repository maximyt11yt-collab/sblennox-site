export type Upcoming = {
  slug: string;
  title: string;
  plannedDate?: string;
  status?: "Drafting" | "Editing" | "ARC" | "Preorder" | "TBA";
  tagline?: string;
  blurb?: string;
  coverImage?: string;
  preorder?: { link?: string };
};

export const upcoming: Upcoming[] = [
  {
    slug: "kiss-me-like-you-didnt-break-me",
    title: "Kiss Me Like You Didn't Break Me",
    coverImage: "/upcoming/IMG_4384.PNG",
    tagline: "Title reveal — Kiss Me Like You Didn't Break Me",
  },
];



