import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';

const { AwesomeReport } = require('jasmine-awesome-report');

const awesomeReportConfig = {
  fullPath: 'reports',
  fileName: 'awesome',
  merge: true,
};

const reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.PRETTY,
    },
  }));
  jasmine.getEnv().addReporter(AwesomeReport.getReport(awesomeReportConfig));
};

export { reporter };
