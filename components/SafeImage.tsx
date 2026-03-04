"use client";

import { useState } from "react";

type SafeImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackLabel?: string;
};

export default function SafeImage({
  fallbackLabel = "Image not available",
  alt,
  onError,
  className,
  ...rest
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`bg-background-container-low border border-border-separator rounded-m flex items-center justify-center ${className || ""}`}
        role={alt ? "img" : undefined}
        aria-label={alt}
      >
        <span className="small text-text-subdued">{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      {...rest}
      alt={alt}
      className={className}
      onError={(event) => {
        setHasError(true);
        if (onError) {
          onError(event);
        }
      }}
    />
  );
}

