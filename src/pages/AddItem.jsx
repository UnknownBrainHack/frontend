import React from 'react';
import InputField from '../components/ui/InputField';
import TextArea from "../components/ui/TextArea";
import Button from "../components/ui/Button";
import Tabs from "../components/ui/Tabs";

export default function AddItem() {
  return (
    <div>
      <InputField title="Input Item Name" />
      <TextArea title="Something" />
      <Button>Принять</Button>
      <Button secondary>Отменить</Button>
      <Tabs>
        <span title="прривет1">1</span>
        <div title="прривет2">2</div>
        <div title="прривет3">3</div>
      </Tabs>
    </div>
  );
}
