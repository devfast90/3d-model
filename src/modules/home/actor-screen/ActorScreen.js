import Header1 from "../../../shared/components/header1/Header1";
import "./ActorScreen.css";
import useWindowOnScrollRatio from "../../../shared/hooks/useOnWindowScrollRatio";
import { useEffect, useState } from "react";

export default function ActorScreen({ scrollContainerHeight }) {
  const scrollRatio = useWindowOnScrollRatio({
    scrollContainerHeight,
    offsetSelector: ".actor-screen"
  });

  return (
    <>
      <div className={"actor-screen"}>
        <div className={"text-container"}>
          {scrollRatio < 0.33 && (
            <Header1 className={`text-content1 text-open-animation`}>
              Be weird, dumb, sexy, broken, whatever. Just not f&$!#g boring.
            </Header1>
          )}
          {scrollRatio > 0.33 && scrollRatio < 0.66 && (
            <Header1 className={"text-content2 text-open-animation"}>
              Second Content
            </Header1>
          )}
          {scrollRatio > 0.66 && (
            <Header1 className={"text-content3 text-open-animation"}>
              Third Content
            </Header1>
          )}
        </div>
        <div className={"image-modal"}>
          <div
            className={"mash"}
            style={{ height: `${Math.min(scrollRatio * 2, 1) * 100}%` }}
          />
          <div
            className={"actor"}
            style={{ height: `${(scrollRatio - 0.5) * 2 * 100}%` }}
          />
        </div>
      </div>
    </>
  );
}
