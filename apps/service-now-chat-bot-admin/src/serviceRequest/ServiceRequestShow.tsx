import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ServiceRequestShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="requestId" source="requestId" />
        <TextField label="description" source="description" />
        <TextField label="created" source="created" />
        <TextField label="status" source="status" />
      </SimpleShowLayout>
    </Show>
  );
};
