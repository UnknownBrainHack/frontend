import React, { useState } from 'react';
import InputField from '../../components/ui/InputField/InputField';
import Textarea from '../../components/ui/Textarea/Textarea';
import Button from '../../components/ui/Button/Button';
import DropArea from '../../components/ui/DropArea/DropArea';
import { Container } from '../../components/ui/styled';
import {
  AddItemWrapper,
  ButtonsWrapper,
  LeftSection,
  RightSection,
} from './styled';

export default function AddItem() {
  const [price, setPrice] = useState('');
  const handlerPrice = (e) => {
    if (e.target.value.length > 15) {
      return;
    }
    setPrice(e.target.value);
  };
  return (
    <Container>
      <AddItemWrapper
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <LeftSection>
          <DropArea />
        </LeftSection>
        <RightSection>
          <InputField placeholder="Some name" title="Input ProductPage Name" big />
          <Textarea title="Something" />
          <InputField
            big
            value={price}
            onChange={handlerPrice}
            placeholder="0.128 wETC"
            suggestion="wETC"
            title="Input Start Price"
            type="number"
          />
          <ButtonsWrapper>
            <Button>Publish item</Button>
            <Button secondary>Save draft</Button>
          </ButtonsWrapper>
        </RightSection>
      </AddItemWrapper>
    </Container>
  );
}
