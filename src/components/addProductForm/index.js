import React, { memo } from 'react'
import {
  Form,
  Title,
  ProgressBar,
  Step,
  StepText,
  StepIconContainer
} from './style';
import InformationSvg from '../../svgs/information';
import ColorsSvg from '../../svgs/colors';
import ImagesSvg from '../../svgs/images';
import PriceSvg from '../../svgs/price';

const steps = [
  { text: 'information',    Icon: InformationSvg },
  { text: 'colors & sizes', Icon: ColorsSvg },
  { text: 'images',         Icon: ImagesSvg },
  { text: 'price',          Icon: PriceSvg }
];

const AddProductForm = () => {
  return (
    <Form>
      <Title>Add Product</Title>

      <ProgressBar
        role="progressbar"
        aria-valuenow="0" 
        aria-valuemin="0" 
        aria-valuemax="3"
      >
        {
          steps.map(({ text, Icon }) => (
            <Step>
              <StepIconContainer>
                <Icon />
              </StepIconContainer>
              <StepText>{text}</StepText>
            </Step>
          ))
        }
      </ProgressBar>
    </Form>
  );
}

export default memo(AddProductForm);