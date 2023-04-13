import React from 'react';
import { Image as RNImage } from 'react-native';
import globalStyles from 'src/config/globalStyles';
import { heightRef, widthRef } from 'src/config/screenSize';
import { IImage } from './types';

const Image = ({
  size,
  height = '100%',
  width = '100%',
  style,
  color,
  border,
  borderWidth,
  bgColor = globalStyles.Theme.PrimaryColor,
  resizeMode = 'contain',
  borderRadius,
  ...rest
}: IImage) => {
  let imageHeight = typeof height === 'string' ? height : height * heightRef,
    imageWidth = typeof width === 'string' ? width : width * widthRef;
  if (size !== undefined) {
    imageHeight = size * heightRef;
    imageWidth = size * heightRef;
  }

  return (
    <RNImage
      style={[
        {
          borderWidth:
            border !== undefined ? (borderWidth ? borderWidth : 2) : undefined,
          borderColor: bgColor !== undefined ? bgColor : undefined,
          borderRadius: borderRadius && borderRadius,
          height: imageHeight,
          width: imageWidth,
          resizeMode,
        },
        color !== undefined ? { tintColor: color } : {},
        style,
      ]}
      {...{ ...rest }}
    />
  );
};

export default Image;
