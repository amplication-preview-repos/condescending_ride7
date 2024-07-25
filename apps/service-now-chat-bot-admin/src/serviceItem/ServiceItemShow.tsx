import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CATALOG_TITLE_FIELD } from "../catalog/CatalogTitle";

export const ServiceItemShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="itemId" source="itemId" />
        <TextField label="name" source="name" />
        <TextField label="description" source="description" />
        <TextField label="price" source="price" />
        <ReferenceField label="Catalog" source="catalog.id" reference="Catalog">
          <TextField source={CATALOG_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
