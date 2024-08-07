import React from 'react';
import SVG, { SVGIconProps } from './SvgIcon';
import { teal } from '../colors';

type Props = SVGIconProps;
export default function CellphoneIcon({
  color = teal.main,
  size = "medium",
  altText = "Cellphone",
  ...props
}: Props) {
  return <SVG size={size} aria-labelledby="CellphoneIcon" {...props}>
    <title id="CellphoneIcon" >{altText}</title>
    <path
      fill={color}
      d="M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z"
    />
  </SVG>
}
