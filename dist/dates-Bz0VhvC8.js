import { g as Pe, d as ke } from "./main-yg-IINZ0.js";
var E, oe;
function $e() {
  if (oe) return E;
  oe = 1;
  function e(r) {
    r = r.replace(/_/g, "-"), r = r.replace(/[.:][\w-]*$/, "");
    try {
      return new Intl.Locale(r).baseName;
    } catch {
      return "en-US";
    }
  }
  return E = e, E;
}
var v, ae;
function C() {
  if (ae) return v;
  ae = 1;
  const e = $e();
  let r;
  if (typeof navigator < "u") {
    const a = navigator;
    r = Array.isArray(a.languages) ? a.languages[0] : a.language;
  } else if (typeof process < "u") {
    const a = process.env;
    r = a.LC_ALL || a.LC_MESSAGES || a.LANG || a.LANGUAGE;
  }
  return r || (r = "en-US"), v = e(r), v;
}
var w, se;
function xe() {
  if (se) return w;
  se = 1;
  const e = {};
  for (let r = 1; r < 100; r++) {
    const a = (r < 9 ? "0" : "") + r;
    e[a] = r + (r > 51 ? 1900 : 2e3);
  }
  return w = e, w;
}
var Y, ie;
function ne() {
  return ie || (ie = 1, Y = {
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
  }), Y;
}
var F, ue;
function Ge() {
  if (ue) return F;
  ue = 1;
  const e = xe();
  return F = {
    zone: ne(),
    year: e,
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
  }, F;
}
var U, ce;
function je() {
  if (ce) return U;
  ce = 1;
  const e = ne(), r = {
    MONTHNAME: "january|february|march|april|may|june|july|august|september|october|november|december|jan\\.?|feb\\.?|mar\\.?|apr\\.?|may\\.?|jun\\.?|jul\\.?|aug\\.?|sep\\.?|oct\\.?|nov\\.?|dec\\.?",
    DAYNAME: "sunday|monday|tuesday|wednesday|thursday|friday|saturday|sun\\.?|mon\\.?|tue\\.?|wed\\.?|thu\\.?|fri\\.?|sat\\.?",
    ZONE: "\\(?(" + Object.keys(e).join("|") + ")\\)?",
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
  }, a = {
    ...r,
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
  return U = { latn: r, other: a }, U;
}
var H, me;
function qe() {
  if (me) return H;
  me = 1;
  const e = {
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
  }, r = "[０１２３４５６７８９〇一二三四五六七八九\\d]", a = {
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
  }, i = {};
  function n(t) {
    if (i[t])
      return i[t];
    if (t === "fullwide" || t === "hanidec")
      return { group: r, lookup: { ...a } };
    const s = e[t];
    if (!s)
      return { group: "\\d", lookup: { ...a } };
    const o = String.fromCharCode(s), y = String.fromCharCode(s + 9), u = {};
    for (let c = 0; c < 10; c++)
      u[String.fromCharCode(s + c)] = c;
    return i[t] = {
      group: `[${o}-${y}]`,
      lookup: u
    }, i[t];
  }
  return H = { chineseGroup: r, defaultLookup: a, startCodes: e, buildDigits: n }, H;
}
var L, le;
function Ke() {
  return le || (le = 1, L = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
  ]), L;
}
var N, he;
function S() {
  if (he) return N;
  he = 1;
  const e = Ge(), { latn: r, other: a } = je(), { buildDigits: i } = qe(), n = C(), t = Ke(), s = {};
  class o {
    /**
     * Get a singleton instance with the given locale
     * @param {String} locale such as en, en-US, es, fr-FR, etc.
     * @returns {LocaleHelper}
     */
    static factory(u = n) {
      return s[u.toLowerCase()] || (s[u.toLowerCase()] = new o(u)), s[u.toLowerCase()];
    }
    /**
     * Create a new instance with the given locale
     * @param {String} locale such as en, en-US, es, fr-FR, etc.
     */
    constructor(u = n) {
      this.locale = u, this.lookups = { ...e }, this.vars = { ...r };
      const c = new Intl.NumberFormat(this.locale);
      this.numberingSystem = c.resolvedOptions().numberingSystem, this.build();
    }
    /**
     * Cast a string to an integer, minding numbering system
     * @param {String|Number} digitString  Such as "2020" or "二〇二〇"
     * @returns {Number}
     */
    toInt(u) {
      if (typeof u == "number")
        return u;
      if (this.numberingSystem === "latn")
        return parseInt(u, 10);
      let c = "";
      for (let l = 0; l < u.length; l++)
        c += String(this.lookups.digit[u[l]]);
      return parseInt(c, 10);
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
      const u = this.numberingSystem, { group: c, lookup: l } = i(u);
      this.lookups.digit = l;
      for (const m in a)
        a.hasOwnProperty(m) && (this.vars[m] = a[m].replace(/\*/g, c));
    }
    /**
     * Build lookup for month names
     */
    buildMonthNames() {
      const u = {}, c = {};
      if (/^fi/i.test(this.locale))
        "tammi|helmi|maalis|huhti|touko|kesä|heinä|elo|syys|loka|marras|joulu".split("|").forEach((m, f) => {
          ["", "k", "kuu", "kuuta"].forEach((h, d) => {
            const M = d < 2 ? "\\.?" : "";
            u[m + h + M] = !0, c[m + h] = f + 1;
          });
        });
      else {
        const l = [], m = (d) => d.type === "month";
        for (let d = 0; d < 12; d++)
          l.push(new Date(2017, d, 1));
        const f = ["full", "long", "medium"];
        for (const d of f) {
          const M = Intl.DateTimeFormat(this.locale, { dateStyle: d });
          for (let p = 0; p < 12; p++) {
            let A = M.formatToParts(l[p]).find(m).value.toLowerCase();
            if (/^ko/i.test(this.locale) && (A += "월"), d === "medium") {
              if (/^ar|zh/i.test(this.locale))
                return;
              A = A.replace(/\.$/, ""), u[`${A}\\.?`] = !0;
            } else
              u[A] = !0;
            c[A] = p + 1;
          }
        }
        const h = Intl.DateTimeFormat(this.locale, { month: "short" });
        for (let d = 0; d < 12; d++) {
          let p = h.formatToParts(l[d]).find(m).value.toLowerCase();
          p = p.replace(/\.$/, ""), u[`${p}\\.?`] = !0, c[p] = d + 1;
        }
      }
      this.vars.MONTHNAME = Object.keys(u).join("|"), this.lookups.month = c;
    }
    /**
     * Build lookup for day name
     */
    buildDaynames() {
      const u = [], c = (h) => h.type === "weekday";
      for (let h = 0; h < 7; h++)
        u.push(new Date(2017, 0, h + 1));
      const l = ["long", "short"], m = [], f = {};
      for (const h of l) {
        const d = Intl.DateTimeFormat(this.locale, { weekday: h });
        for (let M = 0; M < 7; M++) {
          let D = d.formatToParts(u[M]).find(c).value.toLowerCase();
          h === "short" ? (D = D.replace(/\.$/, ""), m.push(`${D}\\.?`)) : m.push(D), f[D] = M;
        }
      }
      this.vars.DAYNAME = m.join("|"), this.lookups.dayname = f;
    }
    /**
     * Build lookup for meridiems (e.g. AM/PM)
     */
    buildMeridiems() {
      const u = [new Date(2017, 0, 1), new Date(2017, 0, 1, 23, 0, 0)], c = (h) => h.type === "dayPeriod", l = [], m = {}, f = Intl.DateTimeFormat(this.locale, { timeStyle: "long" });
      for (let h = 0; h < 2; h++) {
        const M = f.formatToParts(u[h]).find(c);
        if (!M)
          return;
        const p = M.value.toLowerCase();
        l.push(p), m[p] = h * 12;
      }
      this.vars.MERIDIEM = l.join("|"), this.lookups.meridiem = m;
    }
    /**
     * Given a list of unit names and matches, build result object
     * @param {Array} units  Unit names such as "year", "month" and "millisecond"
     * @param {Array} matches  The values matched by a Format's RegExp
     * @returns {Object}
     */
    getObject(u, c) {
      const l = {};
      return u.forEach((m, f) => {
        if (!m)
          return;
        let h = c[f + 1];
        h = h.toLowerCase(), h = h.replace(/\.$/, ""), m === "offset" ? l.offset = this.offsetToMinutes(h) : this.lookups[m] ? l[m] = this.lookups[m][h] || this.toInt(h) : l[m] = this.toInt(h);
      }), l;
    }
    /**
     * Take a response object and cast each unit to Number
     * @param {Object} object  An object with one or more units
     * @returns {Object}  An object with same units but Numeric
     */
    castObject(u) {
      const c = {};
      return t.forEach((l) => {
        l in u && (c[l] = this.toInt(u[l]));
      }), typeof u.offset == "string" ? c.offset = this.offsetToMinutes(u.offset) : typeof u.offset == "number" && (c.offset = u.offset), c;
    }
    /**
     * Convert an offset string to Numeric minutes (e.g. "-0500", "+5", "+03:30")
     * @param {String} offsetString
     * @returns {Number}
     */
    offsetToMinutes(u) {
      const c = u.match(/^([+-])(..?):?(..)?$/);
      if (c) {
        const [, l, m, f] = c;
        return (l === "-" ? -1 : 1) * (this.toInt(m) * 60 + this.toInt(f || 0));
      }
      return 0;
    }
    /**
     * Compile template into a RegExp and return it
     * @param {String} template  The template string
     * @returns {RegExp}
     */
    compile(u) {
      const c = u.replace(/_([A-Z0-9]+)_/g, (l, m) => {
        if (!this.vars[m])
          throw new Error(`Template string contains invalid variable _${m}_`);
        return this.vars[m];
      });
      return new RegExp(c, "i");
    }
  }
  return N = o, N;
}
var R, fe;
function T() {
  if (fe) return R;
  fe = 1;
  const e = S(), r = C();
  class a {
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
      template: n = null,
      matcher: t = null,
      units: s = null,
      handler: o = null,
      locales: y = null
    }) {
      if (!Array.isArray(s) && typeof o != "function")
        throw new Error(
          'new Format must receive a "units" array or "handler" function'
        );
      if (typeof n != "string" && !(t instanceof RegExp))
        throw new Error(
          'new Format must receive a "template" string or "matcher" RegExp'
        );
      this.template = n, this.units = s, this.matcher = t, this.handler = o, this.locales = y, this.regexByLocale = {};
    }
    /**
     * Build the RegExp from the template for a given locale
     * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
     * @returns {RegExp}  A RegExp that matches when this format is recognized
     */
    getRegExp(n = r) {
      return this.template ? (this.regexByLocale[n] || (this.regexByLocale[n] = e.factory(n).compile(
        this.template
      )), this.regexByLocale[n]) : this.matcher;
    }
    /**
     * Run this format's RegExp against the given string
     * @param {String} string  The date string
     * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
     * @returns {Array|null}  Array of matches or null on non-match
     */
    getMatches(n, t = r) {
      return n.match(this.getRegExp(t));
    }
    /**
     * Given matches against this RegExp, convert to object
     * @param {String[]} matches  An array of matched parts
     * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
     * @returns {Object}  Object which may contain year, month, day, hour, minute, second, millisecond, offset, invalid
     */
    toDateTime(n, t = r) {
      const s = e.factory(t);
      if (this.units)
        return s.getObject(this.units, n);
      const o = this.handler(n, t);
      return !o || o.invalid ? o : s.castObject(o);
    }
    /**
     * Attempt to parse a string in this format
     * @param {String} string  The date string
     * @param {String} locale  The language locale such as en-US, pt-BR, zh, es, etc.
     * @returns {Object|null}  Null if format can't handle this string, Object for result or error
     */
    attempt(n, t = r) {
      n = String(n).trim();
      const s = this.getMatches(n, t);
      if (s) {
        const o = this.toDateTime(s, t);
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
  }
  return R = a, R;
}
var b, de;
function ze() {
  if (de) return b;
  de = 1;
  function e(r, a) {
    return function(n, t = a) {
      const s = r.attempt(n, t);
      if (s.invalid)
        return s;
      const o = new Date(2e3, 0, 1);
      return typeof s.day == "number" && o.setUTCDate(s.day), typeof s.year == "number" && o.setUTCFullYear(s.year), typeof s.month == "number" && o.setUTCMonth(s.month - 1), o.setUTCHours(s.hour || 0), o.setUTCMinutes(s.minute || 0), o.setUTCSeconds(s.second || 0), o.setUTCMilliseconds(s.millisecond || 0), typeof s.offset == "number" ? new Date(o - s.offset * 60 * 1e3) : o;
    };
  }
  return b = e, b;
}
var q, Te;
function Be() {
  if (Te) return q;
  Te = 1;
  function e(r) {
    return function(i, n) {
      return i instanceof Date ? i : typeof i == "number" ? new Date(i) : r(i, n);
    };
  }
  return q = e, q;
}
var I, ye;
function We() {
  if (ye) return I;
  ye = 1;
  const e = C();
  T();
  const r = ze(), a = Be();
  class i {
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
    addFormat(t) {
      return this.formats.push(t), t.parser = this, this;
    }
    /**
     * Register multiple formats
     * @param {Format[]} formats  The array of Formats to add
     * @returns {Parser}
     * @chainable
     */
    addFormats(t) {
      return t.forEach((s) => this.addFormat(s)), this;
    }
    /**
     * Unregister a format
     * @param {Format} format  The Format to remove
     * @returns {Boolean}  true if format was found and removed, false if it wasn't registered
     */
    removeFormat(t) {
      const s = this.formats.indexOf(t);
      if (s > -1) {
        const o = this.formats[s];
        return this.formats.splice(s, 1), o.parser = null, !0;
      }
      return !1;
    }
    /**
     * Attempt to parse a date string
     * @param {String} date  A parseable date string
     * @param {String} locale  The name of the locale
     * @returns {Object}
     */
    attempt(t, s = e) {
      for (const y of this.formats) {
        if (Array.isArray(y.locales) && y.locales.length > 0 && !y.locales.includes(new Intl.Locale(s).baseName))
          continue;
        const u = y.attempt(t, s);
        if (u)
          return u;
      }
      let o = String(t).slice(0, 200);
      return o === "" && (o = "empty string"), { invalid: `Unable to parse ${o}` };
    }
    /**
     * Export this parser as a single function that takes a string
     * @param {String} locale  The default locale it should use
     * @returns {Function}
     */
    exportAsFunction(t = e) {
      return r(this, t);
    }
    /**
     * Export this parser as a single function that takes a string or Date
     * @param {String} locale  The default locale it should use
     * @returns {Function}
     */
    exportAsFunctionAny(t = e) {
      return a(r(this, t));
    }
  }
  return I = i, I;
}
var O, pe;
function Ve() {
  if (pe) return O;
  pe = 1;
  const e = T();
  return O = new e({
    template: "^@(\\d+)$",
    handler: function(a) {
      const i = parseInt(a[1], 10), n = new Date(i * 1e3);
      return {
        year: n.getUTCFullYear(),
        month: n.getUTCMonth() + 1,
        day: n.getUTCDate(),
        hour: n.getUTCHours(),
        minute: n.getUTCMinutes(),
        second: n.getUTCSeconds()
      };
    }
  }), O;
}
var P, Me;
function Ze() {
  if (Me) return P;
  Me = 1;
  const e = T();
  return P = new e({
    matcher: /^\/Date\((\d+)([+-]\d{4})?\)\/$/,
    handler: function(a) {
      const i = parseInt(a[1], 10), n = new Date(i);
      return {
        year: n.getUTCFullYear(),
        month: n.getUTCMonth() + 1,
        day: n.getUTCDate(),
        hour: n.getUTCHours(),
        minute: n.getUTCMinutes(),
        second: n.getUTCSeconds(),
        millisecond: n.getUTCMilliseconds(),
        offset: a[2] || 0
      };
    }
  }), P;
}
var k, _e;
function Je() {
  return _e || (_e = 1, k = {
    y: "year",
    M: "month",
    d: "day",
    w: "week",
    h: "hour",
    m: "minute",
    s: "second",
    ms: "millisecond"
  }), k;
}
var $, De;
function Xe() {
  if (De) return $;
  De = 1;
  const e = T(), r = Je();
  return $ = new e({
    /* prettier-ignore */
    //          $1          $2        $3                                                                                   $4
    matcher: /^(\+|-|in|) ?([\d.]+) ?(years?|months?|weeks?|days?|hours?|minutes?|seconds?|milliseconds?|ms|s|m|h|w|d|M|y)( ago)?$/i,
    handler: function([, i, n, t, s]) {
      n = parseFloat(n), t.length <= 2 ? t = r[t] : (t = t.replace(/s$/, ""), t = t.toLowerCase()), t === "week" && (t = "day", n *= 7), (i === "-" || s) && (n *= -1);
      const o = this.now();
      return t === "millisecond" ? o.setUTCMilliseconds(o.getUTCMilliseconds() + n) : t === "second" ? o.setUTCSeconds(o.getUTCSeconds() + n) : t === "minute" ? o.setUTCMinutes(o.getUTCMinutes() + n) : t === "hour" ? o.setUTCHours(o.getUTCHours() + n) : t === "day" ? o.setUTCDate(o.getUTCDate() + n) : t === "month" ? o.setUTCMonth(o.getUTCMonth() + n) : t === "year" && o.setUTCFullYear(o.getUTCFullYear() + n), {
        year: o.getUTCFullYear(),
        month: o.getUTCMonth() + 1,
        day: o.getUTCDate(),
        hour: o.getUTCHours(),
        minute: o.getUTCMinutes(),
        second: o.getUTCSeconds(),
        millisecond: o.getUTCMilliseconds()
      };
    }
  }), $;
}
var x, Ae;
function Qe() {
  if (Ae) return x;
  Ae = 1;
  const e = T(), r = S(), { chineseGroup: a } = qe();
  let i;
  return x = new e({
    /* prettier-ignore */
    //           $1                         $2                  $3
    template: `^(${a}{4}|${a}{2})\\s*年\\s*(${a}{1,2})\\s*月\\s*(${a}{1,2})\\s*日$`,
    handler: function([, t, s, o]) {
      return i || (i = new r("zh"), i.numberingSystem = "hanidec", i.buildNumbers()), i.castObject({ year: t, month: s, day: o });
    }
  }), x;
}
var G, Se;
function et() {
  if (Se) return G;
  Se = 1;
  const e = T();
  return G = new e({
    /* prettier-ignore */
    //           $1            $2
    template: "^(_DAY_)[\\/. ](_MONTH_)$",
    units: ["day", "month"]
  }), G;
}
var j, Ce;
function tt() {
  if (Ce) return j;
  Ce = 1;
  const e = T();
  return j = new e({
    /* prettier-ignore */
    //           $1                       $2
    template: "^(_DAY_)(?:_ORDINAL_)?[ -](_MONTHNAME_)$",
    units: ["day", "month"]
  }), j;
}
var K, ge;
function rt() {
  if (ge) return K;
  ge = 1;
  const e = T();
  return K = new e({
    /* prettier-ignore */
    //                                $1                   $2    $3              $4
    template: "^(?:(?:_DAYNAME_),? )?(_DAY_)(?:_ORDINAL_)?([ -])(_MONTHNAME_)\\2(_YEAR_)$",
    units: ["day", null, "month", "year"]
  }), K;
}
var z, Ee;
function nt() {
  if (Ee) return z;
  Ee = 1;
  const e = T();
  return z = new e({
    /* prettier-ignore */
    //           $1     $2        $3          $4
    template: "^(_DAY_)([\\/. -])(_MONTH_)\\2(_YEAR_)$",
    units: ["day", null, "month", "year"]
  }), z;
}
var B, ve;
function ot() {
  if (ve) return B;
  ve = 1;
  const e = T();
  return B = new e({
    /* prettier-ignore */
    //           $1                 $2
    template: "^(_MONTH_)(?:[\\/-])(_DAY_)$",
    units: ["month", "day"]
  }), B;
}
var W, we;
function at() {
  if (we) return W;
  we = 1;
  const e = T();
  return W = new e({
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
  }), W;
}
var V, Ye;
function st() {
  if (Ye) return V;
  Ye = 1;
  const e = T();
  return V = new e({
    /* prettier-ignore */
    //                                $1             $2
    template: "^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?$",
    units: ["month", "day"]
  }), V;
}
var Z, Fe;
function it() {
  if (Fe) return Z;
  Fe = 1;
  const e = T();
  return Z = new e({
    /* prettier-ignore */
    //                                $1             $2                      $3
    template: "^(?:(?:_DAYNAME_),? )?(_MONTHNAME_)? (_DAY_)(?:_ORDINAL_)?,? (_YEAR_)$",
    units: ["month", "day", "year"]
  }), Z;
}
var J, Ue;
function ut() {
  if (Ue) return J;
  Ue = 1;
  const e = S(), r = T();
  return J = new r({
    /* prettier-ignore */
    //           $1                               $2                 $3           $4                 $5
    template: "^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H12_|_H24_)(?:\\:(_MIN_)(?:\\:(_SEC_))?)?_SPACE_*(_MERIDIEM_)$",
    handler: function(i, n) {
      let [, t, s, o, y, u] = i, c = {};
      if (t && (c = this.parser.attempt(t, n), c.invalid))
        return null;
      const l = e.factory(n);
      if (u) {
        const m = l.lookups.meridiem[u.toLowerCase()] || 0;
        s = parseFloat(s), s === 12 ? s = m : s > 12 && m === 12 ? s += 0 : s += m;
      }
      return c.hour = s, o && (c.minute = o), y && (c.second = y), c;
    }
  }), J;
}
var X, He;
function ct() {
  if (He) return X;
  He = 1;
  const e = S(), r = T(), a = ne();
  return X = new r({
    /* prettier-ignore */
    //           $1                               $2        $3           $4              $5                                $6                 $7
    template: "^(.*?)_SPACE_*(?:at|on|T|)_SPACE_*(_H24_)\\:(_MIN_)(?:\\:(_SEC_)(?:[\\.,](_MS_))?)?_SPACE_*(?:GMT)?_SPACE_*(_OFFSET_)?_SPACE_*(_ZONE_)?$",
    handler: function(n, t) {
      let [, s, o, y, u, c, l, m] = n, f = {};
      if (s && (f = this.parser.attempt(s, t), f.invalid))
        return f;
      if (f.hour = o, f.minute = y, u && (f.second = u), c && c.length > 3 ? f.millisecond = c.slice(0, 3) : c && (f.millisecond = c), m && !l && m in a)
        f.offset = a[m];
      else if (l) {
        const h = e.factory(t);
        f.offset = h.offsetToMinutes(l);
      }
      return f;
    }
  }), X;
}
var Q, Le;
function mt() {
  if (Le) return Q;
  Le = 1;
  const e = T();
  return Q = new e({
    matcher: /^(now|today|tomorrow|yesterday)/i,
    handler: function(a) {
      const i = this.now(), n = a[1].toLowerCase();
      switch (n) {
        case "tomorrow":
          i.setUTCDate(i.getUTCDate() + 1);
          break;
        case "yesterday":
          i.setUTCDate(i.getUTCDate() - 1);
          break;
      }
      const t = {
        year: i.getUTCFullYear(),
        month: i.getUTCMonth() + 1,
        day: i.getUTCDate()
      };
      return n === "now" && (t.hour = i.getUTCHours(), t.minute = i.getUTCMinutes(), t.second = i.getUTCSeconds(), t.millisecond = i.getUTCMilliseconds()), t;
    }
  }), Q;
}
var ee, Ne;
function lt() {
  if (Ne) return ee;
  Ne = 1;
  const e = T();
  return ee = new e({
    /* prettier-ignore */
    //                         $1            $2      $3      $4      $5      $6         $7
    template: "^(?:_DAYNAME_) (_MONTHNAME_) (_DAY_) (_H24_):(_MIN_):(_SEC_) (_OFFSET_) (_YEAR_)$",
    units: ["month", "day", "hour", "minute", "second", "offset", "year"]
  }), ee;
}
var te, Re;
function ht() {
  if (Re) return te;
  Re = 1;
  const e = T();
  return te = new e({
    /* prettier-ignore */
    //           $1      $2  $3          $4
    template: "^(_YEAR_)(-?)(_MONTH_)\\2(_DAY_)$",
    units: ["year", null, "month", "day"]
  }), te;
}
var re, be;
function ft() {
  if (be) return re;
  be = 1;
  const e = We(), r = T(), a = S(), i = Ve(), n = Ze(), t = Xe(), s = Qe(), o = et(), y = tt(), u = rt(), c = nt(), l = C(), m = ot(), f = at(), h = st(), d = it(), M = ut(), p = ct(), D = mt(), A = lt(), Oe = ht(), _ = new e();
  return _.addFormats([
    p,
    M,
    // from most unambiguous and popular to least
    Oe,
    u,
    d,
    f,
    c,
    s,
    A,
    D,
    t,
    h,
    y,
    m,
    o,
    i,
    n
  ]), _.Parser = e, _.Format = r, _.LocaleHelper = a, _.defaultLocale = l, _.fromString = Date.fromString = _.exportAsFunction(), _.fromAny = Date.fromAny = _.exportAsFunctionAny(), typeof window < "u" && (window.anyDateParser = _), re = _, re;
}
var g = ft();
const dt = /* @__PURE__ */ Pe(g), Tt = new RegExp(
  `(${ke.abbreviated_months.map((e) => e.toLowerCase()).join("|")})`
), yt = new g.Format({
  matcher: /^'?(\d{2}|\d{4})$/,
  units: ["year"]
}), pt = new g.Format({
  matcher: /^(\d{1,2})\D*'?(\d{2}|\d{4})$/,
  units: ["month", "year"]
}), Ie = new g.Parser();
Ie.addFormats([yt, pt]);
function _t(e) {
  e = e.trim();
  let r = [], a;
  return a = Ie.attempt(e), a.invalid || r.push({
    year: a.year,
    month: a.month,
    day: a.day
  }), a = dt.attempt(e), a.invalid || r.push({
    year: a.year,
    month: a.month,
    day: a.day
  }), Tt.test(e.toLowerCase()) || [...r].forEach((i) => {
    i.day <= 12 && i.day !== i.month && r.push({
      year: i.year,
      month: i.day,
      day: i.month
    });
  }), r;
}
export {
  _t as parseDate
};
