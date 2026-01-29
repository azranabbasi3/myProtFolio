import React, { useEffect, useMemo, useState } from "react";
import { Cloud, fetchSimpleIcons, renderSimpleIcon } from "react-icon-cloud";
import { cloudProps } from "./Icon-cloudUtils";

const IconCloud = ({ iconSlugs = [], theme = "light" }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (iconSlugs.length) {
      fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
    }
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;

    return Object.values(data.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        size: 55,
        bgHex: theme === "light" ? "#f3f2ef" : "#080510",
        fallbackHex: theme === "light" ? "#6e6e73" : "#ffffff",
      }),
    );
  }, [data, theme]);

  return <Cloud {...cloudProps}>{renderedIcons}</Cloud>;
};

export default IconCloud;
