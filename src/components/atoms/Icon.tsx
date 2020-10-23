import React from 'react';
import IconFontello, { IconFontelloProps } from './IconFontello';

export type IconProps = Omit<IconFontelloProps, 'iconSet'>;

const config = {
  "name": "",
  "css_prefix_text": "icon-",
  "css_use_suffix": false,
  "hinting": true,
  "units_per_em": 1000,
  "ascent": 850,
  "glyphs": [
    {
      "uid": "d72841cc6f06c1c27537f8a0ddb43b59",
      "css": "checked",
      "code": 59393,
      "src": "custom_icons",
      "selected": true,
      "svg": {
        "path": "M1263.2 36.8L583.3 731.5 189.8 326.1C179.5 315.6 167.4 307.3 154 301.6 140.6 295.9 126.2 292.9 111.7 292.7 97.1 292.6 82.7 295.4 69.2 300.9 55.7 306.4 43.4 314.6 33.1 324.9 22.7 335.1 14.4 347.4 8.8 360.9 3.1 374.4 0.1 388.9 0 403.6-0.2 433.3 11.2 461.8 31.8 482.9L505.6 968.2C512.9 974.6 521 979.9 529.7 984.1 533.2 986.9 537 989.4 541 991.6 554.1 997 568.1 999.9 582.3 1000 596.5 999.9 610.5 997.1 623.6 991.6 628.4 989.1 632.8 986.1 636.9 982.6 644.9 978.9 652.4 974.1 659.1 968.2L1419.1 192.1C1430 182 1438.8 169.7 1444.9 156 1451 142.4 1454.3 127.6 1454.5 112.6 1454.8 97.6 1452 82.8 1446.4 68.9 1440.8 55 1432.5 42.4 1421.9 31.9 1411.4 21.4 1398.8 13.1 1385 7.7 1371.1 2.2 1356.4-0.4 1341.5 0.1 1326.7 0.5 1312.1 4 1298.6 10.3 1285.1 16.6 1273.1 25.6 1263.2 36.8Z",
        "width": 1455
      },
      "search": ["checked"]
    },
  ]
}


const Icon: React.FC<IconProps> = ({ ...restProps }) => {
  return <IconFontello iconSet={config} {...restProps} />;
};

export default Icon;
