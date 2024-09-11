module.exports = {
  testEnvironment: 'node',
  // verbose: false, permite exibir o Console Log no report.html
  verbose: false,
  roots: ['<rootDir>/__tests__'],
  reporters: [
    'default',
    ['jest-html-reporter', {
      pageTitle: "Test Report - API Porto - Análise de Crédito.",
      // outputPath: './report/report.html',
      outputPath: process.env.REPORT_PATH || './report/default.html',
      expand: true,
      includeFailureMsg: true,
      includeConsoleLog: true
    }],
  ],
};
