/**
 * Copyright 2022 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import assert from 'assert';
import {readdir, writeFile} from 'fs/promises';
import {join} from 'path';

import {configureSandbox} from './sandbox.js';
import {readAsset} from './util.js';

describe('`puppeteer` with configuration', () => {
  describe('cjs', () => {
    configureSandbox({
      dependencies: ['@puppeteer/browsers', 'puppeteer-core', 'puppeteer'],
      env: cwd => {
        return {
          PUPPETEER_CACHE_DIR: join(cwd, '.cache', 'puppeteer'),
        };
      },
      before: async cwd => {
        await writeFile(
          join(cwd, '.puppeteerrc.cjs'),
          await readAsset('puppeteer', 'configuration', '.puppeteerrc.cjs')
        );
      },
    });

    it('evaluates', async function () {
      const files = await readdir(join(this.sandbox, '.cache', 'puppeteer'));
      assert.equal(files.length, 2);
      assert(files.includes('chrome'));
      assert(files.includes('chrome-headless-shell'));

      const script = await readAsset('puppeteer', 'basic.js');
      await this.runScript(script, 'mjs');
    });
  });

  describe('ts', () => {
    configureSandbox({
      dependencies: [
        '@puppeteer/browsers',
        'puppeteer-core',
        'puppeteer',
        'typescript',
      ],
      env: cwd => {
        return {
          PUPPETEER_CACHE_DIR: join(cwd, '.cache', 'puppeteer'),
        };
      },
      before: async cwd => {
        await writeFile(
          join(cwd, 'puppeteer.config.ts'),
          await readAsset('puppeteer', 'configuration', 'puppeteer.config.ts')
        );
      },
    });

    it('evaluates', async function () {
      const files = await readdir(join(this.sandbox, '.cache', 'puppeteer'));
      assert.equal(files.length, 2);
      assert(files.includes('chrome'));
      assert(files.includes('chrome-headless-shell'));

      const script = await readAsset('puppeteer', 'basic.js');
      await this.runScript(script, 'mjs');
    });
  });
});
