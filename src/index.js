/**
 * React Twitter Conversion Tracking
 * @package react-twitter-conversion-tracking
 * @author Evan Michael Kyle https://kyle.ventures
 */

var ConvId;
var debug;

function log(...args) {
  console.info(...['[react-twitter-conversion-tracker-plus]'].concat(args));
}

var TwitterConvTrkr = {

  init: function (convId, options) {
    if (!options) {
      options = {};
    }
    ConvId = convId;
    debug = !!options.debug;
    !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
    },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='//static.ads-twitter.com/uwt.js',
    a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');

    if (ConvId) {
      if (debug) {
        log(`calling twq('init','${ConvId}')`);
      }
      twq('init',ConvId);
    }
    else console.error('TwitterConvTrkr.init(convId) missing conversion id.');
  },

  pageView: function() {
    if (ConvId) {
      if (debug) {
        log(`calling twq('track','PageView')`);
      }
      twq('track','PageView');
    }
    else console.error('TwitterConvTrkr init must be called first.');
  },

  track: function(action) {
    if (ConvId) {
      if (debug) {
        log(`calling twq('track', '${action}')`);
      }
      twq('track', action);
    }
    else console.error('TwitterConvTrkr init must be called first.');
  }
}

module.exports = TwitterConvTrkr;
