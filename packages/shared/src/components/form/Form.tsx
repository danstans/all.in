import React, { Children } from "react";
import { formStyles } from "./Form.styles";
import { FormProps } from "./Form.types";
import cn from "classnames";
import { FormProvider, useForm } from "react-hook-form";

const Form = (props: FormProps): JSX.Element => {
  const methods = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {React.Children.map(props.children, (child) => {
          return child.props.name
            ? React.createElement(child.type, {
                ...{
                  ...child.props,
                  register: methods.register,
                  key: child.props.name,
                },
              })
            : child;
        })}
      </form>
    </FormProvider>
  );
};

export default Form;
