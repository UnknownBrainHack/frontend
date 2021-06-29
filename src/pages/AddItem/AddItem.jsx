import React from 'react';
import InputField from '../../components/ui/InputField/InputField';
import TextArea from '../../components/ui/TextArea';
import Button from '../../components/ui/Button';
import Droparea from '../../components/ui/Droparea';
import { motion } from 'framer-motion';
import * as S from './styled';

export default function AddItem() {
  return (
    <motion.section
      className="section__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <S.LeftSection>
        <Droparea />
      </S.LeftSection>
      <S.RightSection>
        <InputField placeholder="Some name" title="Input Item Name" big />
        <TextArea title="Something" />
        <InputField
          big
          placeholder="0.128 wETC"
          title="Input Start Price"
          type="number"
        />
        <S.ButtonsWrapper>
          <Button>Publish item</Button>
          <Button secondary>Save draft</Button>
        </S.ButtonsWrapper>
      </S.RightSection>
    </motion.section>
  );
}
