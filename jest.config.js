module.exports = {
    testEnvironment: 'node',
    verbose: true,
    roots: ['<rootDir>/__tests__'],
    reporters: [
      'default',
      ['jest-html-reporter', {
        pageTitle: "Test Report - Collection of API reqres.in",
        outputPath: './test-report/report.html',
        expand: true,
        includeFailureMsg: true,
      }],
    ],
  };
 