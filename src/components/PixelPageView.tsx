"use client";

import { useEffect } from "react";
import { fbqEvent } from "@/lib/pixel";
import { gtagViewItem } from "@/lib/gtag";

interface Props {
  event: string;
  params?: Record<string, unknown>;
}

export default function PixelEvent({ event, params }: Props) {
  useEffect(() => {
    fbqEvent(event, params);
    if (event === "ViewContent") gtagViewItem();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
