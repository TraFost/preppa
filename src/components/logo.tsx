import Image from "next/image"

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

export function Logo({ className, width = 28, height = 28 }: LogoProps) {
  return (
    <Image
      src="/preppa-favicon.webp"
      alt="Preppa"
      width={width}
      height={height}
      className={className}
    />
  )
}
