import React, {
  Children,
  cloneElement,
  forwardRef,
  PropsWithChildren,
  ReactElement,
  Ref,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FormItemProps } from "./FormItem";

const Form = forwardRef<Ref<HTMLDivElement>>((props, ref) => {
  const [formData, setFormData] = useState({});

  const handleChange = (n: string, v: string) =>
    setFormData((f) => ({ ...f, [n]: v }));

  const children = useMemo(
    () =>
      Children.map(props.children, (child) => {
        const item = child as ReactElement<PropsWithChildren<FormItemProps>>;

        if (item.type === "FormItem") {
          const childProps = item.props;
          return cloneElement(
            item,
            {
              key: childProps.name,
              inputValue: "",
              onChange: handleChange,
            },
            item.props.children
          );
        }

        return null;
      }),
    [props.children]
  );

  ref.current.submitForm = (cb) => cb(formData);
  ref.current.resetForm = () => {
    setFormData((f) =>
      Object.values(f).reduce((acc, cur) => ({ ...acc, [cur]: "" }), {})
    );
  };

  useEffect(() => {
    if (ref.current) {
    }
  }, [ref]);

  return <div ref={ref}>{children}</div>;
});

export default Form;
