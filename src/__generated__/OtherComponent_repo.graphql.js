/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type OtherComponent_repo$ref: FragmentReference;
export type OtherComponent_repo = {|
  +forkCount: number,
  +$refType: OtherComponent_repo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "OtherComponent_repo",
  "type": "Repository",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "forkCount",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '03649df2c24c80c24a1469490e25be26';
module.exports = node;
