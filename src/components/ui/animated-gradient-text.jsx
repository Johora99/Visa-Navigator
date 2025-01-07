import { cn } from "@/lib/utils";

export default function AnimatedGradientText({
  children,
  className,
}) {
  return (
    <div
      className={cn(
        "",
        className
      )}
    >
      <div
        className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`}
      />
      <h3
        className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] group-hover:animate-gradient bg-[length:300%_100%] transition-all duration-1000 ease-out text-2xl"
      >
        {children}
      </h3>
    </div>
  );
}
