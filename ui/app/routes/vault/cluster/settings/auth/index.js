/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SettingsAuthIndexRouter extends Route {
  @service router;

  beforeModel() {
    return this.router.replaceWith('vault.cluster.settings.auth.enable');
  }
}
