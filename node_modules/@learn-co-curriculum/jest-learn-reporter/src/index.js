const fs = require('fs')

class LearnReporter {
  constructor(globalConfig, options) {
    this._globalConfig = globalConfig;
    this._options = options;
  }

  onRunComplete(_, results) {
    const start = results.startTime
    const end = Date.now()
    const duration = end - start
    const stats = {
      "suites": results.numTotalTestSuites,
      "tests": results.numTotalTests,
      "passes": results.numPassedTests,
      "pending": results.numPendingTests,
      "failures": results.numFailedTests,
      "start": new Date(start).toISOString(),
      "end": new Date(end).toISOString(),
      "duration": duration
    }

    const output = JSON.stringify({ stats }, null, 2)

    fs.writeFile('.results.json', output, err => {
      if (err) return console.error('\nError saving coverage:', err);
    })
  }
}

module.exports = LearnReporter