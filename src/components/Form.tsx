import React, {
  Children,
  cloneElement,
  forwardRef,
  useEffect,
  useMemo,
  useState,
} from "react";

const Form = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({});

  const handleChange = (n, v) => setFormData((f) => ({ ...f, [n]: v }));

  const children = useMemo(
    () =>
      Children.map(props.children, (child) => {
        if (child.type.name === "FormItem") {
          const childProps = child.props;
          return cloneElement(
            child,
            {
              key: childProps.name,
              inputValue: "",
              onChange: handleChange,
            },
            child.props.children
          );
        }

        return null;
      }),
    [props.children]
  );

  useEffect(() => {
    if (ref.current) {
      ref.current.submitForm = (cb) => cb(formData);
      ref.current.resetForm = () => {
        setFormData((f) =>
          Object.values(f).reduce((acc, cur) => ({ ...acc, [cur]: "" }), {})
        );
      };
    }
  }, [ref, formData]);

  return <div ref={ref}>{children}</div>;
});

export default Form;
