import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { CatalogTitle } from "../catalog/CatalogTitle";

export const ServiceItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="itemId" source="itemId" />
        <TextInput label="name" source="name" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="price" source="price" />
        <ReferenceInput source="catalog.id" reference="Catalog" label="Catalog">
          <SelectInput optionText={CatalogTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
