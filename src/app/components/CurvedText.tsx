import React from "react";
import styled from "styled-components";

interface CurvedTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string;
  initialAngle?: number;
  radius?: number;
  arc?: number; // degrees of the arc that the text occupies (0-360)
  color?: string;
  fontSize?: string;
  onTextClick?: () => void;
}

const SvgWrapper = styled.div<{ $radius: number; $onTextClick: boolean }>`
  position: absolute;
  width: ${({ $radius }) => 2 * $radius}px;
  height: ${({ $radius }) => 2 * $radius}px;
  overflow: visible;

  svg {
    overflow: visible;
  }

  text {
    cursor: ${({ $onTextClick }) => ($onTextClick ? "pointer" : "default")};
    transform: scale(1);
    transition: transform 220ms ease;
    will-change: transform;

    &:hover {
      transform: ${({ $onTextClick }) => ($onTextClick ? "scale(1.07)" : "scale(1)")};
      transition: transform 220ms ease;
      will-change: transform;
    }
  }
`;

const CurvedText: React.FC<CurvedTextProps> = ({
  text,
  initialAngle = 0,
  radius = 300,
  arc = 140,
  color = "var(--yellow-photo)",
  fontSize = "24px",
  onTextClick,
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
    <SvgWrapper $radius={radius} $onTextClick={!!onTextClick} {...props}>
      <svg
        width={radius * 2}
        height={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}
        style={{ overflow: "visible" }}
      >
        <defs>
          <path id={pathId} d={path} fill="none" />
        </defs>

        <text
          fontSize={fontSize}
          fill={color}
          fontWeight="600"
          textAnchor="start"
          dominantBaseline="middle"
          onClick={onTextClick}
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
    </SvgWrapper>
  );
};

export default CurvedText;
