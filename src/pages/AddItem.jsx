import React from 'react';
import InputField from '../components/ui/InputField';
import TextArea from '../components/ui/TextArea';
import Button from '../components/ui/Button';
import Droparea from '../components/ui/Droparea';
import { motion } from 'framer-motion';

export default function AddItem() {
  return (
    <motion.section
      className="section__container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <section>
        <Droparea />
      </section>
      <section>
        <InputField title="Input Item Name" />
        <TextArea title="Something" />
        <InputField title="Input Start Price" />
        <Button>Publish item</Button>
        <Button secondary>Save draft</Button>
      </section>
    </motion.section>
  );
}
