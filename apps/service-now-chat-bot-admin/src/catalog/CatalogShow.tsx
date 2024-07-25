import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CATALOG_TITLE_FIELD } from "./CatalogTitle";

export const CatalogShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="catalogId" source="catalogId" />
        <ReferenceManyField
          reference="ServiceItem"
          target="catalogId"
          label="ServiceItems"
        >
          <Datagrid rowClick="show">
            <TextField label="ID" source="id" />
            <DateField source="createdAt" label="Created At" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="itemId" source="itemId" />
            <TextField label="name" source="name" />
            <TextField label="description" source="description" />
            <TextField label="price" source="price" />
            <ReferenceField
              label="Catalog"
              source="catalog.id"
              reference="Catalog"
            >
              <TextField source={CATALOG_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
