import React from 'react';
import InputField from '../components/ui/InputField';
import TextArea from '../components/ui/TextArea';
import Button from '../components/ui/Button';
import Droparea from '../components/ui/Droparea';

export default function AddItem() {
  return (
    <section className="section__container">
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
    </section>
  );
}
