/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteFragment } from 'relay-runtime';
type OtherComponent_repo$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ExampleComponent_repo$ref: FragmentReference;
export type ExampleComponent_repo = {|
  +description: ?string,
  +$fragmentRefs: OtherComponent_repo$ref,
  +$refType: ExampleComponent_repo$ref,
|};
*/


const node/*: ConcreteFragment*/ = {
  "kind": "Fragment",
  "name": "ExampleComponent_repo",
  "type": "Repository",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "description",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "FragmentSpread",
      "name": "OtherComponent_repo",
      "args": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = '1a0fc39ccf97e2ee35f7ea29f89b967e';
module.exports = node;
