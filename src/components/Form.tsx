import {
  Children,
  cloneElement,
  forwardRef,
  isValidElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";

interface formProps {
  children: ReactNode | ReactNode[];
}

const Form = forwardRef<HTMLDivElement, formProps>((props, ref) => {
  const [formData, setFormData] = useState<Record<string, string> | null>(null);

  const handleChange = (n: string, v: string) =>
    setFormData((f) => ({ ...f, [n]: v }));

  const children = useMemo(
    () =>
      Children.map(props.children, (child) => {
        if (!isValidElement(child)) {
          return null;
        }

        // @ts-ignore
        if (child.type?.displayName === "FormItem") {
          const formItemProps = child.props;
          return cloneElement(
            child,
            {
              key: formItemProps.name,
              inputValue: formData ? formData[formItemProps.name] : "",
              onChange: (v: string) => handleChange(formItemProps.name, v),
            },
            formItemProps.children
          );
        }

        return null;
      }),
    [props.children, formData]
  );

  useEffect(() => {
    if (ref && typeof ref === "object" && ref.current) {
      // @ts-ignore
      ref.current.submitForm = (cb) => {
        cb(formData);
      };

      // @ts-ignore
      ref.current.resetForm = () => {
        setFormData(null);
      };
    }
  }, [ref, formData]);

  return <div ref={ref}>{children}</div>;
});

export default Form;
