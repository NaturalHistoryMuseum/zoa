import { g as P, d as k } from "./main-71f5d4de.js";
import "vue";
import "@fortawesome/fontawesome-svg-core";
import "@fortawesome/free-solid-svg-icons";
function Y(r) {
  r = r.replace(/_/g, "-"), r = r.replace(/[.:][\w-]*$/, "");
  try {
    return new Intl.Locale(r).baseName;
  } catch {
    return "en-US";
  }
}
var B = Y;
const x = B;
let h;
if (typeof navigator < "u") {
  const r = navigator;
  h = Array.isArray(r.languages) ? r.languages[0] : r.language;
} else if (typeof process < "u") {
  const r = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_a0104b4e-ece3-4196-ba59-566d668e18c3", STATS_TRP: "true", DEPLOYMENT_BASEPATH: "/opt/runner", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "npm/8.19.4 node/v16.20.2 linux x64 workspaces/false ci/github-actions", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_a0104b4e-ece3-4196-ba59-566d668e18c3", PIPX_HOME: "/opt/pipx", npm_node_execpath: "/opt/hostedtoolcache/node/16.20.2/x64/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", npm_config_noproxy: "", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/zoa/zoa/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "NaturalHistoryMuseum", GRADLE_HOME: "/usr/share/gradle-8.6", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/26.1.10909125", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", STATS_RDCL: "true", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "5260760", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu22", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "ginger/tabs", npm_config_userconfig: "/home/runner/.npmrc", npm_config_local_prefix: "/home/runner/work/zoa/zoa", SYSTEMD_EXEC_PID: "596", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", COLOR: "0", GOROOT_1_20_X64: "/opt/hostedtoolcache/go/1.20.14/x64", NVM_DIR: "/home/runner/.nvm", npm_config_metrics_registry: "https://registry.npmjs.org/", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", GOROOT_1_21_X64: "/opt/hostedtoolcache/go/1.21.7/x64", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20240212.1.0", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.0/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", RUNNER_USER: "runner", STATS_V3PS: "true", CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", JOURNAL_STREAM: "8:17164", GITHUB_WORKFLOW: "Build dist (dev/patch)", _: "/opt/hostedtoolcache/node/16.20.2/x64/bin/npm", npm_config_prefix: "/opt/hostedtoolcache/node/16.20.2/x64", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "7930217638", npm_config_cache: "/home/runner/.npm", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "ae101de431a8e1f51549bd39be79c7336ab40bde", GITHUB_BASE_REF: "dev", ImageOS: "ubuntu22", GITHUB_WORKFLOW_REF: "NaturalHistoryMuseum/zoa/.github/workflows/build.yml@refs/heads/dev", PERFLOG_LOCATION_SETTING: "RUNNER_PERFLOG", GITHUB_ACTION_REPOSITORY: "", npm_config_node_gyp: "/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/zoa/zoa/node_modules/.bin:/home/runner/work/zoa/node_modules/.bin:/home/runner/work/node_modules/.bin:/home/runner/node_modules/.bin:/home/node_modules/.bin:/node_modules/.bin:/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/node_modules/@npmcli/run-script/lib/node-gyp-bin:/opt/hostedtoolcache/node/16.20.2/x64/bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_8eb56af9-ea34-42f7-b235-798012e7123a", INVOCATION_ID: "ef5b7d7420a145d8b2e967920830eedb", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", GOROOT_1_19_X64: "/opt/hostedtoolcache/go/1.19.13/x64", NODE: "/opt/hostedtoolcache/node/16.20.2/x64/bin/node", npm_package_name: "@nhm-data/zoa", GITHUB_ACTION: "__run_2", GITHUB_RUN_NUMBER: "18", GITHUB_TRIGGERING_ACTOR: "alycejenni", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 2", XDG_CONFIG_HOME: "/home/runner/.config", STATS_VMD: "true", GITHUB_REF_NAME: "dev", GITHUB_REPOSITORY: "NaturalHistoryMuseum/zoa", npm_lifecycle_script: "vite build", STATS_UE: "true", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", GITHUB_REPOSITORY_ID: "630464665", GITHUB_ACTIONS: "true", npm_package_version: "0.8.0", npm_lifecycle_event: "build", GITHUB_REF_PROTECTED: "false", GITHUB_WORKSPACE: "/home/runner/work/zoa/zoa", ACCEPT_EULA: "Y", GITHUB_JOB: "build-dist", RUNNER_PERFLOG: "/home/runner/perflog", GITHUB_SHA: "ae101de431a8e1f51549bd39be79c7336ab40bde", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/dev", GITHUB_ACTOR: "alycejenni", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", LEIN_HOME: "/usr/local/lib/lein", npm_config_globalconfig: "/opt/hostedtoolcache/node/16.20.2/x64/etc/npmrc", npm_config_init_module: "/home/runner/.npm-init.js", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_a0104b4e-ece3-4196-ba59-566d668e18c3", JAVA_HOME: "/usr/lib/jvm/temurin-11-jdk-amd64", PWD: "/home/runner/work/zoa/zoa", GITHUB_ACTOR_ID: "23579762", RUNNER_WORKSPACE: "/home/runner/work/zoa", npm_execpath: "/opt/hostedtoolcache/node/16.20.2/x64/lib/node_modules/npm/bin/npm-cli.js", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", STATS_TIS: "mining", GITHUB_EVENT_NAME: "pull_request", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", LEIN_JAR: "/usr/local/lib/lein/self-installs/leiningen-2.11.1-standalone.jar", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_a0104b4e-ece3-4196-ba59-566d668e18c3", npm_config_global_prefix: "/opt/hostedtoolcache/node/16.20.2/x64", EDGEWEBDRIVER: "/usr/local/share/edge_driver", STATS_EXT: "true", npm_command: "run-script", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/25.2.9519653", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", STATS_EXTP: "https://provjobdsettingscdn.blob.core.windows.net/settings/provjobdsettings-0.5.154/provjobd.data", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/25.2.9519653", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_a0104b4e-ece3-4196-ba59-566d668e18c3", INIT_CWD: "/home/runner/work/zoa/zoa", EDITOR: "vi", NODE_ENV: "production" };
  h = r.LC_ALL || r.LC_MESSAGES || r.LANG || r.LANGUAGE;
}
h || (h = "en-US");
var y = x(h);
const H = {};
for (let r = 1; r < 100; r++) {
  const e = (r < 9 ? "0" : "") + r;
  H[e] = r + (r > 51 ? 1900 : 2e3);
}
var j = H;
const K = {
  "Eastern Daylight Time": -240,
  "Eastern Standard Time": -300,
  "Central Daylight Time": -300,
  "Central Standard Time": -360,
  "Mountain Daylight Time": -360,
  "Mountain Standard Time": -420,
  "Pacific Daylight Time": -420,
  "Pacific Standard Time": -480,
  ACDT: 630,
  // Australian Central Daylight Savings Time
  ACST: 570,
  // Australian Central Standard Time
  ACT: 480,
  // ASEAN Common Time
  ADT: -180,
  // Atlantic Daylight Time
  AEDT: 660,
  // Australian Eastern Daylight Savings Time
  AEST: 600,
  // Australian Eastern Standard Time
  AFT: 270,
  // Afghanistan Time
  AKDT: -480,
  // Alaska Daylight Time
  AKST: -540,
  // Alaska Standard Time
  AMST: -180,
  // Amazon Summer Time (Brazil)
  AMT: -240,
  // Amazon Time (Brazil)
  ART: -180,
  // Argentina Time
  AST: 180,
  // Arabia Standard Time
  AWDT: 540,
  // Australian Western Daylight Time
  AWST: 480,
  // Australian Western Standard Time
  AZOST: -60,
  // Azores Standard Time
  AZT: 240,
  // Azerbaijan Time
  BDT: 360,
  // Bangladesh Daylight Time (Bangladesh Daylight saving time keeps UTC+06 offset)
  BIOT: 360,
  // British Indian Ocean Time
  BIT: -720,
  // Baker Island Time
  BOT: -240,
  // Bolivia Time
  BRST: -120,
  // Brasilia Summer Time
  BRT: -180,
  // Brasilia Time
  BTT: 360,
  // Bhutan Time
  CAT: 120,
  // Central Africa Time
  CCT: 390,
  // Cocos Islands Time
  CDT: -300,
  // Central Daylight Time (North America)
  CEDT: 120,
  // Central European Daylight Time
  CEST: 120,
  // Central European Summer Time (Cf. HAEC)
  CET: 60,
  // Central European Time
  CHADT: 825,
  // Chatham Daylight Time
  CHAST: 765,
  // Chatham Standard Time
  CHOT: 480,
  // Choibalsan
  ChST: 600,
  // Chamorro Standard Time
  CHUT: 600,
  // Chuuk Time
  CIST: -480,
  // Clipperton Island Standard Time
  CIT: 480,
  // Central Indonesia Time
  CKT: -600,
  // Cook Island Time
  CLST: -180,
  // Chile Summer Time
  CLT: -240,
  // Chile Standard Time
  COST: -240,
  // Colombia Summer Time
  COT: -300,
  // Colombia Time
  CST: -360,
  // Central Standard Time (North America)
  CT: 480,
  // China time
  CVT: -60,
  // Cape Verde Time
  CXT: 420,
  // Christmas Island Time
  DAVT: 420,
  // Davis Time
  DDUT: 600,
  // Dumont d'Urville Time
  DFT: 60,
  // AIX specific equivalent of Central European Time
  EASST: -300,
  // Easter Island Standard Summer Time
  EAST: -360,
  // Easter Island Standard Time
  EAT: 180,
  // East Africa Time
  ECT: -300,
  // Ecuador Time
  EDT: -240,
  // Eastern Daylight Time (North America)
  EEDT: 180,
  // Eastern European Daylight Time
  EEST: 180,
  // Eastern European Summer Time
  EET: 120,
  // Eastern European Time
  EGST: 0,
  // Eastern Greenland Summer Time
  EGT: -60,
  // Eastern Greenland Time
  EIT: 540,
  // Eastern Indonesian Time
  EST: -300,
  // Eastern Standard Time (North America)
  FET: 180,
  // Further-eastern European Time
  FJT: 720,
  // Fiji Time
  FKST: -180,
  // Falkland Islands Standard Time
  FKT: -240,
  // Falkland Islands Time
  FNT: -120,
  // Fernando de Noronha Time
  GALT: -360,
  // Galapagos Time
  GAMT: -540,
  // Gambier Islands
  GET: 240,
  // Georgia Standard Time
  GFT: -180,
  // French Guiana Time
  GILT: 720,
  // Gilbert Island Time
  GIT: -540,
  // Gambier Island Time
  GMT: 0,
  // Greenwich Mean Time
  GST: -120,
  // South Georgia and the South Sandwich Islands
  GYT: -240,
  // Guyana Time
  HADT: -540,
  // Hawaii-Aleutian Daylight Time
  HAEC: 120,
  // Heure Avancée d'Europe Centrale francised name for CEST
  HAST: -600,
  // Hawaii-Aleutian Standard Time
  HKT: 480,
  // Hong Kong Time
  HMT: 300,
  // Heard and McDonald Islands Time
  HOVT: 420,
  // Khovd Time
  HST: -600,
  // Hawaii Standard Time
  IBST: 0,
  // International Business Standard Time
  ICT: 420,
  // Indochina Time
  IDT: 180,
  // Israel Daylight Time
  IOT: 180,
  // Indian Ocean Time
  IRDT: 270,
  // Iran Daylight Time
  IRKT: 480,
  // Irkutsk Time
  IRST: 210,
  // Iran Standard Time
  IST: 120,
  // Israel Standard Time
  JST: 540,
  // Japan Standard Time
  KGT: 360,
  // Kyrgyzstan time
  KOST: 660,
  // Kosrae Time
  KRAT: 420,
  // Krasnoyarsk Time
  KST: 540,
  // Korea Standard Time
  LHST: 630,
  // Lord Howe Standard Time
  LINT: 840,
  // Line Islands Time
  MAGT: 720,
  // Magadan Time
  MART: -510,
  // Marquesas Islands Time
  MAWT: 300,
  // Mawson Station Time
  MDT: -360,
  // Mountain Daylight Time (North America)
  MET: 60,
  // Middle European Time Same zone as CET
  MEST: 120,
  // Middle European Summer Time Same zone as CEST
  MHT: 720,
  // Marshall Islands
  MIST: 660,
  // Macquarie Island Station Time
  MIT: -510,
  // Marquesas Islands Time
  MMT: 390,
  // Myanmar Time
  MSK: 180,
  // Moscow Time
  MST: -420,
  // Mountain Standard Time (North America)
  MUT: 240,
  // Mauritius Time
  MVT: 300,
  // Maldives Time
  MYT: 480,
  // Malaysia Time
  NCT: 660,
  // New Caledonia Time
  NDT: -90,
  // Newfoundland Daylight Time
  NFT: 660,
  // Norfolk Time
  NPT: 345,
  // Nepal Time
  NST: -150,
  // Newfoundland Standard Time
  NT: -150,
  // Newfoundland Time
  NUT: -660,
  // Niue Time
  NZDT: 780,
  // New Zealand Daylight Time
  NZST: 720,
  // New Zealand Standard Time
  OMST: 360,
  // Omsk Time
  ORAT: 300,
  // Oral Time
  PDT: -420,
  // Pacific Daylight Time (North America)
  PET: -300,
  // Peru Time
  PETT: 720,
  // Kamchatka Time
  PGT: 600,
  // Papua New Guinea Time
  PHOT: 780,
  // Phoenix Island Time
  PKT: 300,
  // Pakistan Standard Time
  PMDT: -120,
  // Saint Pierre and Miquelon Daylight time
  PMST: -180,
  // Saint Pierre and Miquelon Standard Time
  PONT: 660,
  // Pohnpei Standard Time
  PST: -480,
  // Pacific Standard Time (North America)
  PYST: -180,
  // Paraguay Summer Time (South America)
  PYT: -240,
  // Paraguay Time (South America)
  RET: 240,
  // Réunion Time
  ROTT: -180,
  // Rothera Research Station Time
  SAKT: 660,
  // Sakhalin Island time
  SAMT: 240,
  // Samara Time
  SAST: 120,
  // South African Standard Time
  SBT: 660,
  // Solomon Islands Time
  SCT: 240,
  // Seychelles Time
  SGT: 480,
  // Singapore Time
  SLST: 330,
  // Sri Lanka Standard Time
  SRET: 660,
  // Srednekolymsk Time
  SRT: -180,
  // Suriname Time
  SST: 480,
  // Singapore Standard Time
  SYOT: 180,
  // Showa Station Time
  TAHT: -600,
  // Tahiti Time
  THA: 420,
  // Thailand Standard Time
  TFT: 300,
  // Indian/Kerguelen
  TJT: 300,
  // Tajikistan Time
  TKT: 780,
  // Tokelau Time
  TLT: 540,
  // Timor Leste Time
  TMT: 300,
  // Turkmenistan Time
  TOT: 780,
  // Tonga Time
  TVT: 720,
  // Tuvalu Time
  UCT: 0,
  // Coordinated Universal Time
  ULAT: 480,
  // Ulaanbaatar Time
  USZ1: 120,
  // Kaliningrad Time
  UTC: 0,
  // Coordinated Universal Time
  UYST: -120,
  // Uruguay Summer Time
  UYT: -180,
  // Uruguay Standard Time
  UZT: 300,
  // Uzbekistan Time
  VET: -240,
  // Venezuelan Standard Time
  VLAT: 600,
  // Vladivostok Time
  VOLT: 240,
  // Volgograd Time
  VOST: 360,
  // Vostok Station Time
  VUT: 660,
  // Vanuatu Time
  WAKT: 720,
  // Wake Island Time
  WAST: 120,
  // West Africa Summer Time
  WAT: 60,
  // West Africa Time
  WEDT: 60,
  // Western European Daylight Time
  WEST: 60,
  // Western European Summer Time
  WET: 0,
  // Western European Time
  WIT: 420,
  // Western Indonesian Time
  WST: 480,
  // Western Standard Time
  YAKT: 540,
  // Yakutsk Time
  YEKT: 300,
  // Yekaterinburg Time
  Z: 0
  // Zulu Time (Coordinated Universal Time)
};
var C = K;
const V = j, z = C, W = {
  zone: z,
  year: V,
  meridiem: { am: 0, pm: 12, "a.m.": 0, "p.m.": 12 },
  month: {
    january: 1,
    jan: 1,
    february: 2,
    feb: 2,
    march: 3,
    mar: 3,
    april: 4,
    apr: 4,
    may: 5,
    june: 6,
    jun: 6,
    july: 7,
    jul: 7,
    august: 8,
    aug: 8,
    september: 9,
    sep: 9,
    october: 10,
    oct: 10,
    november: 11,
    nov: 11,
    december: 12,
    dec: 12
  },
  dayname: {
    sunday: 0,
    sun: 0,
    monday: 1,
    mon: 1,
    tuesday: 2,
    tue: 2,
    wednesday: 3,
    wed: 3,
    thursday: 4,
    thu: 4,
    friday: 5,
    fri: 5,
    saturday: 6,
    sat: 6
  },
  digit: {}
};
var X = W;
const J = C, U = {
  MONTHNAME: "january|february|march|april|may|june|july|august|september|october|november|december|jan\\.?|feb\\.?|mar\\.?|apr\\.?|may\\.?|jun\\.?|jul\\.?|aug\\.?|sep\\.?|oct\\.?|nov\\.?|dec\\.?",
  DAYNAME: "sunday|monday|tuesday|wednesday|thursday|friday|saturday|sun\\.?|mon\\.?|tue\\.?|wed\\.?|thu\\.?|fri\\.?|sat\\.?",
  ZONE: "\\(?(" + Object.keys(J).join("|") + ")\\)?",
  MERIDIEM: "[ap]\\.?m?\\.?",
  ORDINAL: "st|nd|rd|th|\\.",
  YEAR: "[1-9]\\d{3}|\\d{2}",
  MONTH: "1[0-2]|0?[1-9]",
  MONTH2: "1[0-2]|0[1-9]",
  DAY: "3[01]|[12]\\d|0?[1-9]",
  DAY2: "3[01]|[12]\\d|0[1-9]",
  OFFSET: "[+-][01]?\\d?\\:?(?:[0-5]\\d)?",
  H24: "[01]\\d|2[0-3]",
  H12: "0?[1-9]|1[012]",
  MIN: "[0-5]\\d",
  SEC: "[0-5]\\d|60",
  MS: "\\d{9}|\\d{6}|\\d{1,3}",
  SPACE: "[\\s,-]"
}, Z = {
  ...U,
  YEAR: "*{4}|*{2}",
  MONTH: "*{1,2}",
  MONTH2: "*{2}",
  DAY: "*{1,2}",
  DAY2: "*{2}",
  OFFSET: "[+-]*{1,2}\\:?*{0,2}",
  H24: "*{2}",
  H12: "*{1,2}",
  MIN: "*{2}",
  SEC: "*{2}",
  MS: "*{9}|*{6}|*{3}"
};
var q = { latn: U, other: Z };
const w = {
  arab: 1632,
  arabext: 1776,
  bali: 6992,
  beng: 2534,
  deva: 2406,
  fullwide: 65296,
  gujr: 2790,
  khmr: 6112,
  knda: 3302,
  laoo: 3792,
  limb: 6470,
  mlym: 3430,
  mong: 6160,
  mymr: 4160,
  orya: 2918,
  tamldec: 3046,
  telu: 3174,
  thai: 3664,
  tibt: 3872
}, L = "[０１２３４５６７８９〇一二三四五六七八九\\d]", I = {
  0: 0,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  "０": 0,
  "１": 1,
  "２": 2,
  "３": 3,
  "４": 4,
  "５": 5,
  "６": 6,
  "７": 7,
  "８": 8,
  "９": 9,
  "〇": 0,
  一: 1,
  二: 2,
  三: 3,
  四: 4,
  五: 5,
  六: 6,
  七: 7,
  八: 8,
  九: 9
}, p = {};
function Q(r) {
  if (p[r])
    return p[r];
  if (r === "fullwide" || r === "hanidec")
    return { group: L, lookup: { ...I } };
  const e = w[r];
  if (!e)
    return { group: "\\d", lookup: { ...I } };
  const t = String.fromCharCode(e), n = String.fromCharCode(e + 9), o = {};
  for (let a = 0; a < 10; a++)
    o[String.fromCharCode(e + a)] = a;
  return p[r] = {
    group: `[${t}-${n}]`,
    lookup: o
  }, p[r];
}
var v = { chineseGroup: L, defaultLookup: I, startCodes: w, buildDigits: Q };
const ee = [
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond"
];
var te = ee;
const oe = X, { latn: ne, other: g } = q, { buildDigits: re } = v, N = y, se = te, D = {};
let ae = class $ {
  /**
   * Get a singleton instance with the given locale
   * @param {String} locale such as en, en-US, es, fr-FR, etc.
   * @returns {LocaleHelper}
   */
  static factory(e = N) {
    return D[e.toLowerCase()] || (D[e.toLowerCase()] = new $(e)), D[e.toLowerCase()];
  }
  /**
   * Create a new instance with the given locale
   * @param {String} locale such as en, en-US, es, fr-FR, etc.
   */
  constructor(e = N) {
    this.locale = e, this.lookups = { ...oe }, this.vars = { ...ne };
    const t = new Intl.NumberFormat(this.locale);
    this.numberingSystem = t.resolvedOptions().numberingSystem, this.build();
  }
  /**
   * Cast a string to an integer, minding numbering system
   * @param {String|Number} digitString  Such as "2020" or "二〇二〇"
   * @returns {Number}
   */
  toInt(e) {
    if (typeof e == "number")
      return e;
    if (this.numberingSystem === "latn")
      return parseInt(e, 10);
    let t = "";
    for (let n = 0; n < e.length; n++)
      t += String(this.lookups.digit[e[n]]);
    return parseInt(t, 10);
  }
  /**
   * Build lookups for digits, month names, day names, and meridiems based on the locale
   */
  build() {
    this.numberingSystem !== "latn" && this.buildNumbers(), /^en/i.test(this.locale) || (this.buildMonthNames(), this.buildDaynames(), this.buildMeridiems());
  }
  /**
   * Build lookups for digits
   */
  buildNumbers() {
    const e = this.numberingSystem, { group: t, lookup: n } = re(e);
    this.lookups.digit = n;
    for (const o in g)
      g.hasOwnProperty(o) && (this.vars[o] = g[o].replace(/\*/g, t));
  }
  /**
   * Build lookup for month names
   */
  buildMonthNames() {
    const e = {}, t = {};
    if (/^fi/i.test(this.locale))
      "tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu".split("|").forEach((o, a) => {
        ["", "k", "kuu", "kuuta"].forEach((s, i) => {
          const l = i < 2 ? "\\.?" : "";
          e[o + s + l] = !0, t[o + s] = a + 1;
        });
      });
    else {
      const n = [], o = (i) => i.type === "month";
      for (let i = 0; i < 12; i++)
        n.push(new Date(2017, i, 1));
      const a = ["full", "long", "medium"];
      for (const i of a) {
        const l = Intl.DateTimeFormat(this.locale, { dateStyle: i });
        for (let c = 0; c < 12; c++) {
          let _ = l.formatToParts(n[c]).find(o).value.toLowerCase();
          if (/^ko/i.test(this.locale) && (_ += "월"), i === "medium") {
            if (/^ar|zh/i.test(this.locale))
              return;
            _ = _.replace(/\.$/, ""), e[`${_}\\.?`] = !0;
          } else
            e[_] = !0;
          t[_] = c + 1;
        }
      }
      const s = Intl.DateTimeFormat(this.locale, { month: "short" });
      for (let i = 0; i < 12; i++) {
        let c = s.formatToParts(n[i]).find(o).value.toLowerCase();
        c = c.replace(/\.$/, ""), e[`${c}\\.?`] = !0, t[c] = i + 1;
      }
    }
    this.vars.MONTHNAME = Object.keys(e).join("|"), this.lookups.month = t;
  }
  /**
   * Build lookup for day name
   */
  buildDaynames() {
    const e = [], t = (s) => s.type === "weekday";
    for (let s = 0; s < 7; s++)
      e.push(new Date(2017, 0, s + 1));
    const n = ["long", "short"], o = [], a = {};
    for (const s of n) {
      const i = Intl.DateTimeFormat(this.locale, { weekday: s });
      for (let l = 0; l < 7; l++) {
        let T = i.formatToParts(e[l]).find(t).value.toLowerCase();
        s === "short" ? (T = T.replace(/\.$/, ""), o.push(`${T}\\.?`)) : o.push(T), a[T] = l;
      }
    }
    this.vars.DAYNAME = o.join("|"), this.lookups.dayname = a;
  }
  /**
   * Build lookup for meridiems (e.g. AM/PM)
   */
  buildMeridiems() {
    const e = [new Date(2017, 0, 1), new Date(2017, 0, 1, 23, 0, 0)], t = (s) => s.type === "dayPeriod", n = [], o = {}, a = Intl.DateTimeFormat(this.locale, { timeStyle: "long" });
    for (let s = 0; s < 2; s++) {
      const l = a.formatToParts(e[s]).find(t);
      if (!l)
        return;
      const c = l.value.toLowerCase();
      n.push(c), o[c] = s * 12;
    }
    this.vars.MERIDIEM = n.join("|"), this.lookups.meridiem = o;
  }
  /**
   * Given a list of unit names and matches, build result object
   * @param {Array} units  Unit names such as "year", "month" and "millisecond"
   * @param {Array} matches  The values matched by a Format's RegExp
   * @returns {Object}
   */
  getObject(e, t) {
    const n = {};
    return e.forEach((o, a) => {
      if (!o)
        return;
      let s = t[a + 1];
      s = s.toLowerCase(), s = s.replace(/\.$/, ""), o === "offset" ? n.offset = this.offsetToMinutes(s) : this.lookups[o] ? n[o] = this.lookups[o][s] || this.toInt(s) : n[o] = this.toInt(s);
    }), n;
  }
  /**
   * Take a response object and cast each unit to Number
   * @param {Object} object  An object with one or more units
   * @returns {Object}  An object with same units but Numeric
   */
  castObject(e) {
    const t = {};
    return se.forEach((n) => {
      n in e && (t[n] = this.toInt(e[n]));
    }), typeof e.offset == "string" ? t.offset = this.offsetToMinutes(e.offset) : typeof e.offset == "number" && (t.offset = e.offset), t;
  }
  /**
   * Convert an offset string to Numeric minutes (e.g. "-0500", "+5", "+03:30")
   * @param {String} offsetString
   * @returns {Number}
   */
  offsetToMinutes(e) {
    const t = e.match(/^([+-])(..?):?(..)?$/);
    if (t) {
      const [, n, o, a] = t;
      return (n === "-" ? -1 : 1) * (this.toInt(o) * 60 + this.toInt(a || 0));
    }
    return 0;
  }
  /**
   * Compile template into a RegExp and return it
   * @param {String} template  The template string
   * @returns {RegExp}
   */
  compile(e) {
    const t = e.replace(/_([A-Z0-9]+)_/g, (n, o) => {
      if (!this.vars[o])
        throw new Error(`Template string contains invalid variable _${o}_`);
      return this.vars[o];
    });
    return new RegExp(t, "i");
  }
};
var f = ae;
const M = f, E = y;
let ie = class {
  /**
   * Given a definition, create a parsable format
   * @param {Object} definition  The format definition
   * @property {String} template  A template for RegExp that can handle multiple languages
   * @property {RegExp} matcher  An actual RegExp to match against
   * @property {Array} units  If the template or RegExp match exact units, you can define the units
   * @property {Function} handler  A flexible alternative to units; must return an object
   * @property {Array} locales  A list of locales that this format should be restricted to
   */
  constructor({
    template: e = null,
    matcher: t = null,
    units: n = null,
    handler: o = null,
    locales: a = null
  }) {
    if (!Array.isArray(n) && typeof o != "function")
      throw new Error(
        'new Format must receive a "units" array or "handler" function'
      );
    if (typeof e != "string" && !(t instanceof RegExp))
      throw new Error(
        'new Format must receive a "template" string or "matcher" RegExp'
      );
    this.template = e, this.units = n, this.matcher = t, this.handler = o, this.locales = a, this.regexByLocale = {};
  }
  /**
   * Build the RegExp from the template for a given locale
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {RegExp}  A RegExp that matches when this format is recognized
   */
  getRegExp(e = E) {
    return this.template ? (this.regexByLocale[e] || (this.regexByLocale[e] = M.factory(e).compile(
      this.template
    )), this.regexByLocale[e]) : this.matcher;
  }
  /**
   * Run this format's RegExp against the given string
   * @param {String} string  The date string
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {Array|null}  Array of matches or null on non-match
   */
  getMatches(e, t = E) {
    return e.match(this.getRegExp(t));
  }
  /**
   * Given matches against this RegExp, convert to object
   * @param {String[]} matches  An array of matched parts
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {Object}  Object which may contain year, month, day, hour, minute, second, millisecond, offset, invalid
   */
  toDateTime(e, t = E) {
    const n = M.factory(t);
    if (this.units)
      return n.getObject(this.units, e);
    const o = this.handler(e, t);
    return !o || o.invalid ? o : n.castObject(o);
  }
  /**
   * Attempt to parse a string in this format
   * @param {String} string  The date string
   * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
   * @returns {Object|null}  Null if format can't handle this string, Object for result or error
   */
  attempt(e, t = E) {
    e = String(e).trim();
    const n = this.getMatches(e, t);
    if (n) {
      const o = this.toDateTime(n, t);
      if (o && !o.invalid)
        return o;
    }
    return null;
  }
  /**
   * Return the current date (used to support unit testing)
   * @returns {Date}
   */
  now() {
    return /* @__PURE__ */ new Date();
  }
};
var m = ie;
function ce(r, e) {
  return function(n, o = e) {
    const a = r.attempt(n, o);
    if (a.invalid)
      return a;
    const s = new Date(2e3, 0, 1);
    return typeof a.day == "number" && s.setUTCDate(a.day), typeof a.year == "number" && s.setUTCFullYear(a.year), typeof a.month == "number" && s.setUTCMonth(a.month - 1), s.setUTCHours(a.hour || 0), s.setUTCMinutes(a.minute || 0), s.setUTCSeconds(a.second || 0), s.setUTCMilliseconds(a.millisecond || 0), typeof a.offset == "number" ? new Date(s - a.offset * 60 * 1e3) : s;
  };
}
var le = ce;
function me(r) {
  return function(t, n) {
    return t instanceof Date ? t : typeof t == "number" ? new Date(t) : r(t, n);
  };
}
var ue = me;
const O = y, R = le, Te = ue;
let _e = class {
  /**
   * Initialize an object with an empty array of registered formats
   */
  constructor() {
    this.formats = [];
  }
  /**
   * Register a format object representing a parseable date format
   * @param {Format} format  The Format to add
   * @returns {Parser}
   * @chainable
   */
  addFormat(e) {
    return this.formats.push(e), e.parser = this, this;
  }
  /**
   * Register multiple formats
   * @param {Format[]} formats  The array of Formats to add
   * @returns {Parser}
   * @chainable
   */
  addFormats(e) {
    return e.forEach((t) => this.addFormat(t)), this;
  }
  /**
   * Unregister a format
   * @param {Format} format  The Format to remove
   * @returns {Boolean}  true if format was found and removed, false if it wasn't registered
   */
  removeFormat(e) {
    const t = this.formats.indexOf(e);
    if (t > -1) {
      const n = this.formats[t];
      return this.formats.splice(t, 1), n.parser = null, !0;
    }
    return !1;
  }
  /**
   * Attempt to parse a date string
   * @param {String} date  A parseable date string
   * @param {String} locale  The name of the locale
   * @returns {Object}
   */
  attempt(e, t = O) {
    for (const o of this.formats) {
      if (Array.isArray(o.locales) && o.locales.length > 0 && !o.locales.includes(new Intl.Locale(t).baseName))
        continue;
      const a = o.attempt(e, t);
      if (a)
        return a;
    }
    let n = String(e).slice(0, 200);
    return n === "" && (n = "empty string"), { invalid: `Unable to parse ${n}` };
  }
  /**
   * Export this parser as a single function that takes a string
   * @param {String} locale  The default locale it should use
   * @returns {Function}
   */
  exportAsFunction(e = O) {
    return R(this, e);
  }
  /**
   * Export this parser as a single function that takes a string or Date
   * @param {String} locale  The default locale it should use
   * @returns {Function}
   */
  exportAsFunctionAny(e = O) {
    return Te(R(this, e));
  }
};
var de = _e;
const he = m, fe = new he({
  template: "^@(\\d+)$",
  handler: function(r) {
    const e = parseInt(r[1], 10), t = new Date(e * 1e3);
    return {
      year: t.getUTCFullYear(),
      month: t.getUTCMonth() + 1,
      day: t.getUTCDate(),
      hour: t.getUTCHours(),
      minute: t.getUTCMinutes(),
      second: t.getUTCSeconds()
    };
  }
});
var pe = fe;
const Ee = m, Ae = new Ee({
  matcher: /^\/Date\((\d+)([+-]\d{4})?\)\/$/,
  handler: function(r) {
    const e = parseInt(r[1], 10), t = new Date(e);
    return {
      year: t.getUTCFullYear(),
      month: t.getUTCMonth() + 1,
      day: t.getUTCDate(),
      hour: t.getUTCHours(),
      minute: t.getUTCMinutes(),
      second: t.getUTCSeconds(),
      millisecond: t.getUTCMilliseconds(),
      offset: r[2] || 0
    };
  }
});
var ye = Ae;
const Se = {
  y: "year",
  M: "month",
  d: "day",
  w: "week",
  h: "hour",
  m: "minute",
  s: "second",
  ms: "millisecond"
};
var ge = Se;
const De = m, Oe = ge, Ie = new De({
  /* prettier-ignore */
  //          $1          $2        $3                                                                                   $4
  matcher: /^(\+|-|in|) ?([\d.]+) ?(years?|months?|weeks?|days?|hours?|minutes?|seconds?|milliseconds?|ms|s|m|h|w|d|M|y)( ago)?$/i,
  handler: function([, r, e, t, n]) {
    e = parseFloat(e), t.length <= 2 ? t = Oe[t] : (t = t.replace(/s$/, ""), t = t.toLowerCase()), t === "week" && (t = "day", e *= 7), (r === "-" || n) && (e *= -1);
    const o = this.now();
    return t === "millisecond" ? o.setUTCMilliseconds(o.getUTCMilliseconds() + e) : t === "second" ? o.setUTCSeconds(o.getUTCSeconds() + e) : t === "minute" ? o.setUTCMinutes(o.getUTCMinutes() + e) : t === "hour" ? o.setUTCHours(o.getUTCHours() + e) : t === "day" ? o.setUTCDate(o.getUTCDate() + e) : t === "month" ? o.setUTCMonth(o.getUTCMonth() + e) : t === "year" && o.setUTCFullYear(o.getUTCFullYear() + e), {
      year: o.getUTCFullYear(),
      month: o.getUTCMonth() + 1,
      day: o.getUTCDate(),
      hour: o.getUTCHours(),
      minute: o.getUTCMinutes(),
      second: o.getUTCSeconds(),
      millisecond: o.getUTCMilliseconds()
    };
  }
});
var Ce = Ie;
const Ne = m, Me = f, { chineseGroup: A } = v;
let d;
const Re = new Ne({
  /* prettier-ignore */
  //           $1                         $2                  $3
  template: `^(${A}{4}|${A}{2})\\s*年\\s*(${A}{1,2})\\s*月\\s*(${A}{1,2})\\s*日$`,
  handler: function([, r, e, t]) {
    return d || (d = new Me("zh"), d.numberingSystem = "hanidec", d.buildNumbers()), d.castObject({ year: r, month: e, day: t });
  }
});
var be = Re;
const He = m, Ue = new He({
  /* prettier-ignore */
  //           $1            $2
  template: "^(_DAY_)[\\/. ](_MONTH_)$",
  units: ["day", "month"]
});
var we = Ue;
const Le = m, ve = new Le({
  /* prettier-ignore */
  //           $1                       $2
  template: "^(_DAY_)(?:_ORDINAL_)?[ -](_MONTHNAME_)$",
  units: ["day", "month"]
});
var $e = ve;
const Fe = m, Ge = new Fe({
  /* prettier-ignore */
  //                                $1                   $2    $3              $4
  template: "^(?:(?:_DAYNAME_),? )?(_DAY_)(?:_ORDINAL_)?([ -])(_MONTHNAME_)\\2(_YEAR_)$",
  units: ["day", null, "month", "year"]
});
var Pe = Ge;
const ke = m, Ye = new ke({
  /* prettier-ignore */
  //           $1     $2        $3          $4
  template: "^(_DAY_)([\\/. -])(_MONTH_)\\2(_YEAR_)$",
  units: ["day", null, "month", "year"]
});
var Be = Ye;
const xe = m, je = new xe({
  /* prettier-ignore */
  //           $1                 $2
  template: "^(_MONTH_)(?:[\\/-])(_DAY_)$",
  units: ["month", "day"]
});
var Ke = je;
const Ve = m, ze = new Ve({
  /* prettier-ignore */
  //           $1       $2      $3        $4
  template: "^(_MONTH_)([\\/-])(_DAY_)\\2(_YEAR_)$",
  units: ["month", null, "day", "year"],
  // only certain locales use this date
  // see https://en.wikipedia.org/wiki/Date_format_by_country
  // see https://www.localeplanet.com/icu/
  locales: [
    "ee-TG",
    // Togo (Ewe)
    "en-AS",
    // American Samoa
    "en-CA",
    // Canada
    "en-FM",
    // Federated States of Micronesia
    "en-GH",
    // Ghana
    "en-GU",
    // Guam
    "en-KE",
    // Kenya
    "en-KY",
    // Cayman Islands
    "en-MH",
    // Marshall Islands
    "en-MP",
    // Northern Mariana Islands
    "en-US",
    // United States
    "en-VI",
    // US Virgin Islands
    "en-WS",
    // Western Samoa
    "sm-AS",
    // American Samoa (Samoan)
    "sm-SM"
    // Samoa
  ]
});
var We = ze;
const Xe = m, Je = new Xe({
  /* prettier-ignore */
  //                                $1             $2
  template: "^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?$",
  units: ["month", "day"]
});
var Ze = Je;
const qe = m, Qe = new qe({
  /* prettier-ignore */
  //                                $1             $2                      $3
  template: "^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?,? (_YEAR_)$",
  units: ["month", "day", "year"]
});
var et = Qe;
const tt = f, ot = m, nt = new ot({
  /* prettier-ignore */
  //           $1                               $2                 $3           $4                 $5
  template: "^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H12_|_H24_)(?:\\:(_MIN_)(?:\\:(_SEC_))?)?_SPACE_*(_MERIDIEM_)$",
  handler: function(r, e) {
    let [, t, n, o, a, s] = r, i = {};
    if (t && (i = this.parser.attempt(t, e), i.invalid))
      return null;
    const l = tt.factory(e);
    if (s) {
      const c = l.lookups.meridiem[s.toLowerCase()] || 0;
      n = parseFloat(n), n === 12 ? n = c : n > 12 && c === 12 ? n += 0 : n += c;
    }
    return i.hour = n, o && (i.minute = o), a && (i.second = a), i;
  }
});
var rt = nt;
const st = f, at = m, b = C, it = new at({
  /* prettier-ignore */
  //           $1                               $2        $3           $4              $5                                $6                 $7
  template: "^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H24_)\\:(_MIN_)(?:\\:(_SEC_)(?:[\\.,](_MS_))?)?_SPACE_*(?:GMT)?_SPACE_*(_OFFSET_)?_SPACE_*(_ZONE_)?$",
  handler: function(r, e) {
    let [, t, n, o, a, s, i, l] = r, c = {};
    if (t && (c = this.parser.attempt(t, e), c.invalid))
      return c;
    if (c.hour = n, c.minute = o, a && (c.second = a), s && s.length > 3 ? c.millisecond = s.slice(0, 3) : s && (c.millisecond = s), l && !i && l in b)
      c.offset = b[l];
    else if (i) {
      const T = st.factory(e);
      c.offset = T.offsetToMinutes(i);
    }
    return c;
  }
});
var ct = it;
const lt = m, mt = new lt({
  matcher: /^(now|today|tomorrow|yesterday)/i,
  handler: function(r) {
    const e = this.now(), t = r[1].toLowerCase();
    switch (t) {
      case "tomorrow":
        e.setUTCDate(e.getUTCDate() + 1);
        break;
      case "yesterday":
        e.setUTCDate(e.getUTCDate() - 1);
        break;
    }
    const n = {
      year: e.getUTCFullYear(),
      month: e.getUTCMonth() + 1,
      day: e.getUTCDate()
    };
    return t === "now" && (n.hour = e.getUTCHours(), n.minute = e.getUTCMinutes(), n.second = e.getUTCSeconds(), n.millisecond = e.getUTCMilliseconds()), n;
  }
});
var ut = mt;
const Tt = m, _t = new Tt({
  /* prettier-ignore */
  //                         $1            $2      $3      $4      $5      $6         $7
  template: "^(?:_DAYNAME_) (_MONTHNAME_) (_DAY_) (_H24_):(_MIN_):(_SEC_) (_OFFSET_) (_YEAR_)$",
  units: ["month", "day", "hour", "minute", "second", "offset", "year"]
});
var dt = _t;
const ht = m, ft = new ht({
  /* prettier-ignore */
  //           $1      $2  $3          $4
  template: "^(_YEAR_)(-?)(_MONTH_)\\2(_DAY_)$",
  units: ["year", null, "month", "day"]
});
var pt = ft;
const F = de, Et = m, At = f, yt = pe, St = ye, gt = Ce, Dt = be, Ot = we, It = $e, Ct = Pe, Nt = Be, Mt = y, Rt = Ke, bt = We, Ht = Ze, Ut = et, wt = rt, Lt = ct, vt = ut, $t = dt, Ft = pt, u = new F();
u.addFormats([
  Lt,
  wt,
  // from most unambiguous and popular to least
  Ft,
  Ct,
  Ut,
  bt,
  Nt,
  Dt,
  $t,
  vt,
  gt,
  Ht,
  It,
  Rt,
  Ot,
  yt,
  St
]);
u.Parser = F;
u.Format = Et;
u.LocaleHelper = At;
u.defaultLocale = Mt;
u.fromString = Date.fromString = u.exportAsFunction();
u.fromAny = Date.fromAny = u.exportAsFunctionAny();
typeof window < "u" && (window.anyDateParser = u);
var S = u;
const Gt = /* @__PURE__ */ P(S), Pt = new RegExp(
  `(${k.abbreviated_months.map((r) => r.toLowerCase()).join("|")})`
), kt = new S.Format({
  matcher: /^'?(\d{2}|\d{4})$/,
  units: ["year"]
}), Yt = new S.Format({
  matcher: /^(\d{1,2})\D*'?(\d{2}|\d{4})$/,
  units: ["month", "year"]
}), G = new S.Parser();
G.addFormats([kt, Yt]);
function Wt(r) {
  r = r.trim();
  let e = [], t;
  return t = G.attempt(r), t.invalid || e.push({
    year: t.year,
    month: t.month,
    day: t.day
  }), t = Gt.attempt(r), t.invalid || e.push({
    year: t.year,
    month: t.month,
    day: t.day
  }), Pt.test(r.toLowerCase()) || [...e].forEach((n) => {
    n.day <= 12 && n.day !== n.month && e.push({
      year: n.year,
      month: n.day,
      day: n.month
    });
  }), e;
}
export {
  Wt as parseDate
};
