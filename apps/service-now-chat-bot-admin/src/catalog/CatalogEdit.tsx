import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { ServiceItemTitle } from "../serviceItem/ServiceItemTitle";

export const CatalogEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
