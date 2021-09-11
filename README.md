# Form Item Demo

This a form item demo project whose main idea is to implement the main features of [antd](https://ant.design/components/form-cn/#header) form.

## 🚀 Features

The features of this demo are listed below:

- [ ] The form instance can be used with `ref` which has instance methods like `submitForm` for submitting and `resetForm` for resetting.
- [x] The form only accepts `FormItem` and skips anything else automatically.
- [ ] The value of the `name` property of `FormItem` can become the key when submitting form. And There is also a `label` property for indicating the `FormItem`.
- [ ] `FormItem` can collect the value of `Input` automatically.
- [ ] Fancinating UI

## 🌰 Example

```js
function App() {
  const form = useRef(null);

  // submit form
  const handleSubmit = () => {
    form.current.submitForm((formValue) => {
      console.log(formValue);
    });
  };

  // reset form
  const handleReset = () => {
    form.current.resetForm();
  };

  return (
    <div className="container">
      <h1>Form</h1>
      <Form ref={form}>
        <FormItem name="name" label="username">
          <Input />
        </FormItem>
        <FormItem name="mes" label="I wanna say">
          <Input />
        </FormItem>
        <input placeholder="the input we don't need" />
        <Input />
      </Form>
      <div className="btns">
        <button className="btn search" onClick={handleSubmit}>
          SUBMIT
        </button>
        <button className="btn reset" onClick={handleReset}>
          RESET
        </button>
      </div>
    </div>
  );
}
```

## 🔧 Development

Install the dependencies.

```sh
yarn install
```

Start the server and then your browser will open automatically.

```sh
yarn start
```

---

😊 Happy coding!
