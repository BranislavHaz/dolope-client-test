import Image from "next/image";

const Img = ({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  placeholder = "empty",
  style,
}) => {
  const webpSrc = src.replace(/\.\w+$/, ".webp");

  return (
    <picture>
      <source srcSet={webpSrc} type="image/webp" />
      <Image
        src={src}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        fill={fill}
        priority={priority}
        placeholder={placeholder}
        style={style}
      />
    </picture>
  );
};

export default Img;
