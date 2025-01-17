/**
 * Copyright (C) 2021 BitModern, Inc - All Rights Reserved
 */

/* eslint-disable import/no-cycle */
/* eslint-disable @typescript-eslint/no-empty-interface */

import { LabelAssigned } from './LabelAssigned';
import { LabelApi } from '../label/LabelApi';
import { PlanApi } from '../plan/PlanApi';
import { RunResultApi } from '../run_result/RunResultApi';
import { AppApi } from '../app/AppApi';
import { StepApi } from '../step/StepApi';
import { PurposeApi } from '../purpose/PurposeApi';
import { RunResultStepApi } from '../run_result_step/RunResultStepApi';
import { StatusApi } from '../status/StatusApi';
import { PlatApi } from '../plat/PlatApi';
import { AppVersionPlatVersionApi } from '../app_version_plat_version/AppVersionPlatVersionApi';
import { StatusTypeApi } from '../status_type/StatusTypeApi';
import { TestQualityApi } from '../test_quality/TestQualityApi';
import { TestQualityTypeApi } from '../test_quality_type/TestQualityTypeApi';
import { NativeDefectResApi } from '../native_defect_res/NativeDefectResApi';
import { MilestoneApi } from '../milestone/MilestoneApi';
import { NativeDefectStatusApi } from '../native_defect_status/NativeDefectStatusApi';
import { RunApi } from '../run/RunApi';
import { PlatVersionApi } from '../plat_version/PlatVersionApi';
import { AppVersionApi } from '../app_version/AppVersionApi';
import { SuiteApi } from '../suite/SuiteApi';
import { TestApi } from '../test/TestApi';
import { ProjectApi } from '../project/ProjectApi';
import { CaseTypeApi } from '../case_type/CaseTypeApi';
import { CasePriorityApi } from '../case_priority/CasePriorityApi';

export interface LabelAssignedApi extends LabelAssigned {
  label?: LabelApi;
  plan?: PlanApi;
  run_result?: RunResultApi;
  app?: AppApi;
  step?: StepApi;
  purpose?: PurposeApi;
  run_result_step?: RunResultStepApi;
  status?: StatusApi;
  plat?: PlatApi;
  app_version_plat_version?: AppVersionPlatVersionApi;
  status_type?: StatusTypeApi;
  test_quality?: TestQualityApi;
  test_quality_type?: TestQualityTypeApi;
  native_defect_res?: NativeDefectResApi;
  milestone?: MilestoneApi;
  native_defect_status?: NativeDefectStatusApi;
  run?: RunApi;
  plat_version?: PlatVersionApi;
  app_version?: AppVersionApi;
  suite?: SuiteApi;
  test?: TestApi;
  project?: ProjectApi;
  case_type?: CaseTypeApi;
  case_priority?: CasePriorityApi;
}
