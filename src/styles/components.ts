import { textPreset7 } from "~/styles/typography";
import { tw } from "~/utils/tw";

export const buttonStyles = tw(
  textPreset7,
  "flex h-12 w-46.25 items-center justify-center",
  "bg-red-500 text-navy-950 uppercase transition-colors",
  "hover:bg-navy-950 hover:text-white",
);
