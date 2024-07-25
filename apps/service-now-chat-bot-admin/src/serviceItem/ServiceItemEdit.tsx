import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CatalogTitle } from "../catalog/CatalogTitle";

export const ServiceItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="itemId" source="itemId" />
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <ReferenceInput source="catalog.id" reference="Catalog" label="Catalog">
          <SelectInput optionText={CatalogTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
