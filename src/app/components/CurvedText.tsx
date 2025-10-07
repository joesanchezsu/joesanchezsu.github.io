import React from "react";
import styled from "styled-components";

interface CurvedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  initialAngle?: number;
  radius?: number; // radio del círculo
  arc?: number; // grados del arco que ocupa el texto (0-360)
  color?: string;
}

const SvgWrapper = styled.div<{ $radius: number }>`
  position: absolute;
  width: ${({ $radius }) => 2 * $radius}px;
  height: ${({ $radius }) => 2 * $radius}px;
  overflow: visible;
`;

const CurvedText: React.FC<CurvedTextProps> = ({
  text,
  initialAngle = 0,
  radius = 300,
  arc = 140,
  color = "var(--yellow-photo)",
  ...props
}) => {
  const pathId = `curve-${text.replace(/\s+/g, "-")}`;

  // Calculate the arc (from degrees to SVG coordinates)
  const startAngle = (initialAngle + arc / 2) * (Math.PI / 180);
  const endAngle = (initialAngle + arc) * (Math.PI / 180);
  const startX = radius + radius * Math.cos(startAngle);
  const startY = radius + radius * Math.sin(startAngle);
  const endX = radius + radius * Math.cos(endAngle);
  const endY = radius + radius * Math.sin(endAngle);

  const path = `
    M ${startX},${startY}
    A ${radius},${radius} 0 0,1 ${endX},${endY}
  `;

  return (
    <SvgWrapper $radius={radius} {...props}>
      <svg width={radius * 2} height={radius * 2}>
        <defs>
          <path id={pathId} d={path} fill="none" />
        </defs>

        <text
          fontSize="24px"
          fill={color}
          fontWeight="600"
          textAnchor="start"
          dominantBaseline="hanging"
        >
          <textPath href={`#${pathId}`}>{text}</textPath>
        </text>
      </svg>
    </SvgWrapper>
  );
};

export default CurvedText;
