"use client";

import { useEffect } from "react";
import { fbqEvent } from "@/lib/pixel";

interface Props {
  event: string;
  params?: Record<string, unknown>;
}

export default function PixelEvent({ event, params }: Props) {
  useEffect(() => {
    fbqEvent(event, params);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return null;
}
