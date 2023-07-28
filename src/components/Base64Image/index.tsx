import React from 'react';
import styles from './styles.module.css';

type Base64ImageProps = {
    base64String: string;
    width?: string;
    height?: string;
}

export const Base64Image = (props: Base64ImageProps) => {
  const imageUrl = `data:image/png;base64,${props.base64String}`;
  return <img src={imageUrl} className={styles.img} alt="Base64 Image" style={{ width: props.width, height: props.height }} />;
};