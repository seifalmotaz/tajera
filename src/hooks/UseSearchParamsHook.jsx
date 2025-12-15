"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function UseSearchParamsHook() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();
  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      const NewPath = pathname + "?" + params.toString();
      return NewPath;
    },
    [searchParams, pathname]
  );
  return { pathname, searchParams, router, createQueryString };
}