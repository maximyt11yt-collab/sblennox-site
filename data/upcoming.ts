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
    slug: "kiss-me-like-i-didnt-kill-you",
    title: "Kiss Me Like I Didn't Kill You",
    // Place this image in /public/upcoming/ exactly as named (case-sensitive on deploy):
    coverImage: "/upcoming/IMG_2478.JPG",
  },
];



