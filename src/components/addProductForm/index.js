import React, { memo, useState } from 'react'
import {
  Form,
  Title,
  ProgressBar,
  Step,
  StepText,
  StepIconContainer,
  FormContainer
} from './style';
import InformationSvg from '../../svgs/information';
import ColorsSvg from '../../svgs/colors';
import ImagesSvg from '../../svgs/images';
import PriceSvg from '../../svgs/price';
import Information from './components/information'; 

const steps = [
  { text: 'information',              Icon: InformationSvg },
  { text: 'colors\u00A0&\u00A0sizes', Icon: ColorsSvg },
  { text: 'images',                   Icon: ImagesSvg },
  { text: 'price',                    Icon: PriceSvg }
];

const AddProductForm = () => {
  const [ productName, setProductName ] = useState('');
  const [ category, setCategory ] = useState('');
  const [ subCategory, setSubCategory ] = useState('');
  const [ description, setDescription ] = useState('');

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
          steps.map(({ text, Icon }, index) => (
            <Step 
              key={text} 
              data-finished={false}
              data-active={index === 0}
            >
              <StepIconContainer className="progressbar__iconContainer">
                <Icon />
              </StepIconContainer>
              <StepText>{text}</StepText>
            </Step>
          ))
        }
      </ProgressBar>

      <FormContainer>
        <Information 
          productName={productName}
          setProductName={setProductName}
          category={category}
          setCategory={setCategory}
          subCategory={subCategory}
          setSubCategory={setSubCategory}
          description={description}
          setDescription={setDescription}
        />
      </FormContainer>
    </Form>
  );
}

export default memo(AddProductForm);