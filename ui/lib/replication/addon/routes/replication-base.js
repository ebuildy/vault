/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import Route from '@ember/routing/route';
import UnloadModelRouteMixin from 'vault/mixins/unload-model-route';

export default Route.extend(UnloadModelRouteMixin, {
  store: service(),
  version: service(),
  rm: service('replication-mode'),
  modelPath: 'model.config',
  replicationMode: alias('rm.mode'),
});
