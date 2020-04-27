import React, { memo, useState, useCallback } from 'react'
import {
  Form,
  Title,
  FormContainer
} from './style';
import Information from './components/information'; 
import ProgressBar from './components/ProgressBar';
import ColorsAndSizes from './components/colorsAndSizes';

const AddProductForm = () => {
  // Inputs
  const [ productName, setProductName ] = useState('');
  const [ category, setCategory ] = useState('');
  const [ subCategory, setSubCategory ] = useState('');
  const [ description, setDescription ] = useState('');
  
  // Active step
  const [ activeStep, setActiveStep ] = useState(0);

  const handleStepSubmit = useCallback((event, disabled) => {    
    if (!disabled) {
      event.preventDefault();
      setActiveStep(activeStep + 1);
    }
  }, [ activeStep ]);
    
  return (
    <Form>
      <Title>Add Product</Title>

      <ProgressBar />

      <FormContainer>
        {
          activeStep === 0 ?
          <Information 
            productName={productName}
            setProductName={setProductName}
            category={category}
            setCategory={setCategory}
            subCategory={subCategory}
            setSubCategory={setSubCategory}
            description={description}
            setDescription={setDescription}
            setActiveStep={activeStep}
            onStepSubmit={handleStepSubmit}
          /> :
          <ColorsAndSizes />
        }
      </FormContainer>
    </Form>
  );
}

export default memo(AddProductForm);