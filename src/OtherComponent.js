// @flow
// external imports
import * as React from "react";
import { createFragmentContainer, graphql } from "react-relay";
// local imports
import type { OtherComponent_repo } from "./__generated__/OtherComponent_repo.graphql";

type Props = {
  repo: OtherComponent_repo
};

const OtherComponent = ({ repo }: Props) => repo.forkCount;

export default createFragmentContainer(
  OtherComponent,
  graphql`
    fragment OtherComponent_repo on Repository {
      forkCount
    }
  `
);
