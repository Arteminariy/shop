import React, { FC } from 'react';
import Picture from '../Picture/Picture';
import './Card.css';

interface ICardProps {
  borderWidth: number,
  borderColor: string,
  backgrondColor: string,
  height: number,
  picture: string,
  text: string
}

const Card: FC<ICardProps> = ({borderWidth, borderColor, backgrondColor, height, picture, text}) => (
  <div
    className="card"
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      border: "solid",
      borderWidth: borderWidth.toString() + "px",
      borderColor: borderColor,
      backgroundColor: backgrondColor,
      height: height.toString() + "px",
      width: height.toString() + "px"
    }}
  >
    <Picture
      preview={false}
      width={height / 2}
      link={picture}
    />
    <p>
      {text}
    </p>
  </div>
);

export default Card;
