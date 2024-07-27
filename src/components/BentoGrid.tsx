
import { cn } from "@/lib/utils";

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  image, // Add image prop
  href,
  colSpan = "col-span-1", // Add a default colSpan
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  image?: string; // Image URL
  href?: string; // Link URL
  colSpan?: string; // Control column span
}) => {
  return (
    <a
      href={href}
      className={cn(
        "h-[18.9rem] rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none  p-3 dark:bg-black dark:border-white/[0.2] bg-white border justify-between flex flex-col space-y-1",
        colSpan, // Apply colSpan dynamically
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      {image && (
        <div className="flex justify-center mb-2">
          <img
            src={image}
            alt={title as string}
            className="w-full h-40 object-cover rounded-lg"
          />
        </div>
      )}
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className=" font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="line-clamp-2 font-normal text-neutral-600 text-sm dark:text-neutral-300">
          {description}
        </div>
      </div>
    </a>
  );
};

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18.6rem] grid-cols-1 md:grid-cols-3 gap-4 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};
