import { useEffect, useState } from "react";

export const docsBuild = __HEADPLANE_DOCS__;

// Only main is published for now, so stable and beta share one site. The
// version picker and banner stay hidden until a build sets a docs channel.
export const stableOrigin = "https://northplane.sageware.io";
export const betaOrigin = "https://northplane.sageware.io";

export interface Release {
  version: string;
  path: string;
}

let releaseList: Promise<Release[]> | undefined;

// Production lists every published release in versions.json, so archived and
// beta builds also learn about releases made after them.
export function useReleases() {
  const [releases, setReleases] = useState<Release[]>([]);

  useEffect(() => {
    releaseList ??= fetch(`${stableOrigin}/versions.json`)
      .then((response) => (response.ok ? response.json() : []))
      .catch(() => []);

    let isActive = true;
    void releaseList.then((list) => {
      if (isActive && Array.isArray(list)) {
        setReleases(list);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);

  return releases;
}

// The same page on another site. `pathname` is the app path, without a base.
export function pageOn(origin: string, base: string, pathname: string) {
  return `${origin}${base}${pathname.replace(/^\//, "")}`;
}
