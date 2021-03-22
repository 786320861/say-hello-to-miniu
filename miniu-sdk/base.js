const miniu = require('miniu');
const semver = require('semver');

function initialConfig() {
  const privateKey = 'MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDHTpkex6Y40+R6pvf8on7wBXI13EymRn/Gd+xAH9uHp/wE6OIWtoiVjQpg+WF5a00q9nXlwa4CofhilU5ChP3pXAj8kEbrNgxZT9OnD0S1JuqJ30iCWjuRTzjaQUYd03FDN+5kFTVjFqfZX1EBnTwMp0Fi1UNK4x0xdbbc+tvVCD/s+zKTEzcL297Y8zhvQ1ocbs0x4A5ASLTZTpJ2Sypfw9w5PK9DUmu/6gEiX2LDUiwsSL7AvCAN02yjo9LQstZ+TY16jumyJnRgzuFJpJQ83s6/y3adEmhMAUEur0LCgqvzmuh5klDvgLup7z+SLWpVqdTRuVCaC1KnRoUhV3ktAgMBAAECggEAAkvKgctFA/SU9kDELJnmonc9mJdAHs5DHJM3GooDam2p/ph8OkzCCA8G5pUY5WAyFGOgehQgIBGjnecgbq2/ixevVtGGr6EAxWqhApSvcvLO0uXKnQ3TD9p8yi7kUuWjsWWMjoScB9cz+dIaSc146qBmpW/VhaBWLsKvZ55QOAUKGmdVB32f1O6/moQMrsp0Sdz7zFz01uvULnrmS1MV0didPbEz5WfIx/+1A5Q36FFa2m4umj2q6ujM8mf7tJ66TCP85lN9Ifya+9Ei22z6S2HTK+ma+iqm3WA4xErT6y8wOcR22IRDHjshkgXQzahQreVx5he1+es06Zu4thEiFQKBgQDphqwJLvgI4WyfKQ4bXSUh5PectqpZ75kt/iW9c9LmA+3DZR7ftSwr0U86L1fBQEYZZ27daVcdtuiWqQzKZTspnkO8FaS2uraTL4TtQs8wqwh1Xp7VUrJ3cXJjHE/BoCIUh38tDgcuG/P+bLyQy5GZGEQjDTvcwDAfFlcmAVYaIwKBgQDafOEnwXf6GUjAcfZWxGyEvU6di5GGPiYq3NPNIo2UZze4bZDlY4jbTQpT6BnGoMvuOM1SyZINVVFI2r2mOSNGLkR2wVmZNI8Vmwn6nh200zzmhd6uQKrdhGd8lWSE3CcmL9vHS0uDoky4x2infq9ej7/1D464zvGjLxErqF2MbwKBgE8E4vG4kvVuUfMJUVyxB/+QGrlMlhgYmxyVAvA4YQS0D6Aud2P7ShcJnGVz353kwdOWzEzfeDr1yX4xdcKGvp42j3T1Xeb3BxCG49Pk53bwaMxOWDCW6wy/tpUS32oFZYLM1pvIQ2W2z7kn0iasu3eyXlv9/mOUJLRgOt0BVsFBAoGBAJaTJeDuNq9IKZlncOwPZvJ8POfavioUPt2fXuCrBYPXNtGFwSw10qXAjHOTK+B2BNVilC6P+HXz7JcXGUirbCH71Pc6/XLWhB3RwajUu4hZZElCzVqt+pO7ok577tCZoOlyZjcNLzfC7LkTxI5agqXaz+ImHKhFBsb9swmxePdFAoGBAJNdScSKvWSVa9H0BD6d8NHB7BwCRnaDSpSoVHh6UbLztYk7fm3YjAF0qvsshercPakgZOM4P+SluOfy3JRWZi+X8888KI+0PF7dpQFxHdnSQvmoSwsR4VJuQS2a4BHOjGFlc+ISGBNMwYBnDfobaClVtyq0VqDh1e3GrhL4A5Lb';
  const toolId = '0e2e645bd8144cc595be5484ed30fcfc';

  miniu.setConfig({
    privateKey,
    toolId,
  });
}

module.exports = async function getFirstTinyApp() {
  initialConfig();
  const miniList = await miniu.miniAppList();
  return miniList.length ? miniList[0] : null;
}
