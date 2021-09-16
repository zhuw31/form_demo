import { useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import FormItem from "./components/FormItem";
import Input from "./components/Input";

function App() {
  const form = useRef(null);

  const handleSubmit = () => {
    // @ts-ignore
    form?.current?.submitForm((formValue: string) => {
      console.log(formValue);
    });
  };

  const handleReset = () => {
    // @ts-ignore
    form.current.resetForm();
  };

  return (
    <div className="container">
      <h1>Form</h1>
      <Form ref={form}>
        <FormItem name="name" label="I am">
          <Input />
        </FormItem>
        <FormItem name="mes" label="I wanna say">
          <Input />
        </FormItem>
        <input placeholder="不需要的input" />
        <Input />
      </Form>
      <div className="btns">
        <button className="btn search" onClick={handleSubmit}>
          提交
        </button>
        <button className="btn reset" onClick={handleReset}>
          重置
        </button>
      </div>
    </div>
  );
}

export default App;
