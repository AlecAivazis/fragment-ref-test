// @flow
// external imports
import * as React from "react";
import { createFragmentContainer, graphql } from "react-relay";
// local imports
import type { ExampleComponent_repo } from "./__generated__/ExampleComponent_repo.graphql";
import OtherComponent from "./OtherComponent";

type Props = {
  repo: ExampleComponent_repo
};

const ExampleComponent = ({ repo }: Props) => (
  <React.Fragment>
    {repo.description}
    <OtherComponent repo={repo} />
  </React.Fragment>
);

export default createFragmentContainer(
  ExampleComponent,
  graphql`
    fragment ExampleComponent_repo on Repository {
      description
      ...OtherComponent_repo
    }
  `
);
