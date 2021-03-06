import path from 'path';

import { IFiles } from '../../src/interfaces/files.interface';
import { CreateBundleRequestDto } from '../../src/dto/create-bundle.request.dto';
import { ExtendBundleRequestDto } from '../../src/dto/extend-bundle.request.dto';
import { UploadFilesRequestDto } from '../../src/dto/upload-files.request.dto';
import { ReportTelemetryRequestDto } from '../../src/dto/report-telemetry.request.dto';

import { defaultBaseURL as baseURL } from '../../src/constants/common';
import { sessionToken, bundleId, expiredBundleId } from './base-config';

const hashMain = '3e297985';
const hashApp = 'c8bc6452';

const root = __dirname;
export const mockProjectPath = path.resolve(root, '../mocked_data');
const analysedFile = `/sample_repository/main.js`;

export const mockFiles = [
  analysedFile,
  `/sample_repository/sub_folder/test2.js`,
  `/sample_repository/utf8.js`,
  `/test.java`,
];

export const mockAnalysisResults = {
  [analysedFile]: { '0': [{ rows: [1, 2], cols: [3, 4], markers: [] }] },
  suggestions: {
    '0': {
      id: 'TestSuggestion',
      message: 'some message',
      severity: 1,
    },
  },
};

export const mockNewAnalysisResults = {
  analysisResults: {
    suggestions: {
      '0': {
        id: 'TestSuggestion',
        message: 'Some message',
        severity: 1,
      },
    },
    files: {
      [analysedFile]: {
        0: [
          {
            cols: [120, 150],
            rows: [140, 140],
            markers: [],
          },
        ],
      },
    },
  },
  progress: 80,
  analysisURL: 'mock-analysis-url',
};

const files: IFiles = {
  '/home/user/repo/main.js': hashMain,
  '/home/user/repo/app.js': hashApp,
};

export const createBundleRequest = new CreateBundleRequestDto({
  baseURL,
  sessionToken,
  files,
});

export const extendBundleRequest = new ExtendBundleRequestDto({
  baseURL,
  sessionToken,
  bundleId,
  files,
  removedFiles: [],
});

export const extendBundleRequestExpired = new ExtendBundleRequestDto({
  baseURL,
  sessionToken,
  bundleId: expiredBundleId,
  files,
  removedFiles: [],
});

export const uploadFilesRequest = new UploadFilesRequestDto({
  baseURL,
  sessionToken,
  bundleId,
  content: [
    {
      fileHash: hashMain,
      fileContent: 'const module = new Module();',
    },
    {
      fileHash: hashApp,
      fileContent: 'const App = new App();',
    },
  ],
});

export const reportTelemetryRequest = new ReportTelemetryRequestDto({
  baseURL,
  sessionToken,
  bundleId,
  source: 'testSource',
  type: 'testType',
  message: 'testMessage',
  path: '/test/path',
  data: {
    foo: 'bar',
    bar: [
      'fo',
      'foo',
      'fooo'
    ]
  }
});
