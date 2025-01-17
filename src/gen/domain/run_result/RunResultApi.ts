/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { RunResult } from './RunResult';
import { SuiteApi } from '../suite/SuiteApi';
import { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';
import { ProjectApi } from '../project/ProjectApi';
import { RunApi } from '../run/RunApi';
import { TestApi } from '../test/TestApi';
import { StatusApi } from '../status/StatusApi';
import { LabelAssignedApi } from '../label_assigned/LabelAssignedApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { AttachmentApi } from '../attachment/AttachmentApi';
import { CommentApi } from '../comment/CommentApi';
import { DefectRunResultApi } from '../defect_run_result/DefectRunResultApi';
import { DefectApi } from '../defect/DefectApi';

export interface RunResultApi extends RunResult {
  suite?: SuiteApi;
  app_version_plat_version?: AppVersionPlatVersionApi;
  project?: ProjectApi;
  run?: RunApi;
  test?: TestApi;
  status?: StatusApi;
  label_assigned?: LabelAssignedApi;
  run_result_step?: RunResultStepApi[];
  attachment?: AttachmentApi;
  comment?: CommentApi;
  defect?: DefectApi[];
  pivot?: DefectRunResultApi;
  defect_run_result?: Partial<DefectRunResultApi>;
}
