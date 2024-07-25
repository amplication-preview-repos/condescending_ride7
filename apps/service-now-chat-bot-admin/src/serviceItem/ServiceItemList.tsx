import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CATALOG_TITLE_FIELD } from "../catalog/CatalogTitle";

export const ServiceItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"ServiceItems"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
