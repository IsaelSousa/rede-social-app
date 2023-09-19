import React from 'react';
import { Img } from './styles';

type Base64ImageProps = {
    base64String: string;
    width?: string;
    height?: string;
}

export const Base64Image = (props: Base64ImageProps) => {
  const imageUrl = `data:image/png;base64,${props.base64String}`;
  return <Img src={imageUrl} alt="Base64 Image" style={{ width: props.width, height: props.height }} />;
};