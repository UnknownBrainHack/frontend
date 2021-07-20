import { useEffect, useRef, useState } from "react";
import { useBreakpoint } from "../../../helpers/hooks";
import { ZoomImageWrapper, BaseImage, ZoomedImage } from "./styled";

export default function ZoomImage({ src }) {
  const [offset, setOffset] = useState(0);
  const [enabledZoom, setEnabledZoom] = useState(true);
  const baseImage = useRef();
  const zoomedImage = useRef();
  const breakpoint = useBreakpoint();
  function getOffset() {
    const {
      left,
      top,
      width,
      height,
    } = baseImage.current.getBoundingClientRect();
    setOffset({
      left,
      top,
      width,
      height,
    });
  }
  useEffect(() => {
    getOffset();
  }, []);
  useEffect(() => {
    switch (breakpoint) {
    case "laptop":
    case "desktop":
      setEnabledZoom(true);
      break;
    default:
      setEnabledZoom(false);
      break;
    }
  }, [breakpoint]);


  function getPosition(val, min, max) {
    if (val < min) {
      return 0;
    }
    if (val > max) {
      return min * 4;
    }
    return (val - min) * 2;
  }

  function zoomLensLeft(pos) {
    const leftMin = offset.width / 4;
    return (
      (getPosition(pos, leftMin, offset.width - leftMin) / offset.width) * 100
    );
  }

  function zoomLensTop(pos) {
    const topMin = offset.height / 4;
    return (
      (getPosition(pos, topMin, offset.height - topMin) / offset.height) * 100
    );
  }

  function handleMouseMove(event) {
    if (offset) {
      const offsetX = zoomLensLeft(event.clientX - offset.left);
      const offsetY = zoomLensTop(event.clientY - offset.top);
      const backgroundPosition = offsetX + "% " + offsetY + "%";
      zoomedImage.current.style.backgroundPosition = backgroundPosition;
    }
  }

  function handleMouseEnter() {
    if (enabledZoom) {
      zoomedImage.current.style.display = "block";
      getOffset();
    }
  }

  function handleMouseLeave() {
    zoomedImage.current.style.display = "none";
  }

  function handleScroll() {
    getOffset();
  }

  return (
    <ZoomImageWrapper>
      <BaseImage
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onScroll={handleScroll}
        ref={baseImage}
        src={src}
        alt=""
      />
      <ZoomedImage ref={zoomedImage} src={src} />
    </ZoomImageWrapper>
  );
}
