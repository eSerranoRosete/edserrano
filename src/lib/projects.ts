type Project = {
  name: string;
  url: string;
  description: string;
  primaryImg: string;
  secondaryImg: string;
  features: string[];
  stack: string[];
  background: string;
  foreground: string;
};

export const projects: Project[] = [
  {
    name: "Moduly.app",
    background: "#4f46e5",
    foreground: "#fff",
    url: "https://moduly.app",
    description:
      "Yeah, another link in bio tool that allows you to quickly create customizable sharable business cards",
    primaryImg:
      "https://utfs.io/f/6fc2c21a-a529-4072-ae88-ea03e8f700e5-q4x9ft.jpg",
    secondaryImg:
      "https://utfs.io/f/99668b27-1024-4238-a776-2023b21654fe-q4x9fs.png",
    features: ["Authentication", "Drag-and-drop builder", "Image Upload"],
    stack: [
      "NextJS",
      "TaliwindCSS",
      "Shadcn/ui",
      "NextAuth",
      "Stripe",
      "Firebase",
    ],
  },
  {
    name: "BlossomAI",
    background: "#000",
    foreground: "#fff",
    url: "https://blossomai.vercel.app/generate",
    description:
      "(Under Construction). Create and deploy AI-powered surveys that drive insights in minutes. Allows you to create tailor-fit surveys according to your product/service, your goal and your audience",
    primaryImg:
      "https://utfs.io/f/5d359293-cfed-4d95-8570-89868f9a771b-erajyn.gif",
    secondaryImg:
      "https://utfs.io/f/89650989-189e-405c-b079-557fa521905f-wdsgc5.jpg",
    features: ["Suvey Editor", "Cloud hosted", "AI-powered"],
    stack: ["NextJS", "TaliwindCSS", "Shadcn/ui", "OpenAI"],
  },
];
