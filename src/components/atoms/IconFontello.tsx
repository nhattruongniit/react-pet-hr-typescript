import React from 'react';

export interface FontelloIcon {
  uid: string;
  css: string;
  code: number;
  src: string;
  selected: boolean;
  svg: {
    path: string;
    width: number;
  };
  search: string[];
}

export interface IconFontelloProps {
  color?: string;
  size?: string | number;
  icon: string;
  iconSet: {
    name: string;
    glyphs: FontelloIcon[]
  };
  className?: string;
  style?: React.CSSProperties;
}

export const IconFontello: React.FC<IconFontelloProps> = (props) => {
  const { color, size = '100%', icon, iconSet, className = '', style = {} } = props;

  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
      fill: 'currentcolor',
      ...style,
    },
    path: {
      fill: color,
    },
  };

  const currentIcon = iconSet.glyphs.find((iconItem) => iconItem.css === icon);

  if (!currentIcon) {
    console.warn(`icon ${icon} does not exist.`);
    return null;
  }

  return (
    <svg
      className={className}
      style={styles.svg}
      width={size}
      height={size}
      viewBox={`0 0 ${currentIcon.svg.width || '1024'} 1024`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path style={styles.path} d={currentIcon.svg.path} />
    </svg>
  );
};

export default IconFontello;
