import { cn } from "@/lib/utils";

type Props = {
  imageUrl: string;
  caption: string;
  className?: string;
};

export default function ImageCard({ imageUrl, caption, className }: Props) {
  return (
    <figure
      className={cn(
        "w-62.5 overflow-hidden rounded-base border border-border/30 bg-main font-base shadow-sm",
        className,
      )}
    >
      <img className="w-full aspect-4/3" src={imageUrl} alt="image" />
      <figcaption className="border-t text-main-foreground border-border/30 p-4">
        {caption}
      </figcaption>
    </figure>
  );
}
