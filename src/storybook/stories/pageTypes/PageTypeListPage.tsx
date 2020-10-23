import { PageTypeListUrlSortField } from "@saleor/pageTypes/urls";
import { storiesOf } from "@storybook/react";
import React from "react";

import {
  listActionsProps,
  pageListProps,
  searchPageProps,
  sortPageProps,
  tabPageProps
} from "../../../fixtures";
import PageTypeListPage, {
  PageTypeListPageProps
} from "../../../pageTypes/components/PageTypeListPage";
import { pageTypes } from "../../../pageTypes/fixtures";
import Decorator from "../../Decorator";

const props: PageTypeListPageProps = {
  ...listActionsProps,
  ...pageListProps.default,
  ...searchPageProps,
  ...sortPageProps,
  sort: {
    ...sortPageProps.sort,
    sort: PageTypeListUrlSortField.name
  },
  ...tabPageProps,
  onBack: () => undefined,
  pageTypes
};

storiesOf("Views / Page types / Page types list", module)
  .addDecorator(Decorator)
  .add("default", () => <PageTypeListPage {...props} />)
  .add("loading", () => (
    <PageTypeListPage {...props} disabled={true} pageTypes={undefined} />
  ))
  .add("no data", () => <PageTypeListPage {...props} pageTypes={[]} />);