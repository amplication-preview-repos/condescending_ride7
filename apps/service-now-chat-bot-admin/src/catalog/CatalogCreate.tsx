import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ServiceItemTitle } from "../serviceItem/ServiceItemTitle";

export const CatalogCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="catalogId" source="catalogId" />
        <ReferenceArrayInput
          source="serviceItems"
          reference="ServiceItem"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ServiceItemTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
