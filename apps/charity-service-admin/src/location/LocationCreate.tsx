import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LocationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" multiline source="address" />
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
