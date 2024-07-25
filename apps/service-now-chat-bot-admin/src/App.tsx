import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ServiceRequestList } from "./serviceRequest/ServiceRequestList";
import { ServiceRequestCreate } from "./serviceRequest/ServiceRequestCreate";
import { ServiceRequestEdit } from "./serviceRequest/ServiceRequestEdit";
import { ServiceRequestShow } from "./serviceRequest/ServiceRequestShow";
import { ServiceItemList } from "./serviceItem/ServiceItemList";
import { ServiceItemCreate } from "./serviceItem/ServiceItemCreate";
import { ServiceItemEdit } from "./serviceItem/ServiceItemEdit";
import { ServiceItemShow } from "./serviceItem/ServiceItemShow";
import { CatalogList } from "./catalog/CatalogList";
import { CatalogCreate } from "./catalog/CatalogCreate";
import { CatalogEdit } from "./catalog/CatalogEdit";
import { CatalogShow } from "./catalog/CatalogShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"ServiceNowChatBot"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ServiceRequest"
          list={ServiceRequestList}
          edit={ServiceRequestEdit}
          create={ServiceRequestCreate}
          show={ServiceRequestShow}
        />
        <Resource
          name="ServiceItem"
          list={ServiceItemList}
          edit={ServiceItemEdit}
          create={ServiceItemCreate}
          show={ServiceItemShow}
        />
        <Resource
          name="Catalog"
          list={CatalogList}
          edit={CatalogEdit}
          create={CatalogCreate}
          show={CatalogShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
