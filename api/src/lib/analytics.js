const Analytics = require("analytics-node");

const WRITE_KEY = process.env.SEGMENT_API_WRITE_KEY || null;

const analytics = WRITE_KEY
  ? new Analytics(WRITE_KEY, { flushAt: 1 })
  : {
      identify: () => {},
      track: () => {},
      page: () => {},
      group: () => {},
      alias: () => {},
      flush: () => {},
    };

export default analytics;
