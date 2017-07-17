Bridge.merge(new System.Globalization.CultureInfo("sd-Arab-PK", true), {
    englishName: "Sindhi (Pakistan)",
    nativeName: "سنڌي (پاکستان)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "Infinity-",
        positiveInfinitySymbol: "Infinity",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 3,
        percentNegativePattern: 0,
        currencySymbol: "Rs",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 9,
        currencyPositivePattern: 2,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 3
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["سو","اڱ","ار","خم","جمعو","ڇن","آچ"],
        abbreviatedMonthGenitiveNames: ["جنوري","فروري","مارچ","اپريل","مٔي","جون","جولاءِ","آگست","ستمبر","آکتوبر","نومبر","ڊسمبر",""],
        abbreviatedMonthNames: ["جنوري","فروري","مارچ","اپريل","مٔي","جون","جولاءِ","آگست","ستمبر","آکتوبر","نومبر","ڊسمبر",""],
        amDesignator: "AM",
        dateSeparator: "/",
        dayNames: ["سومر","اڱارو","اربع","خميس","جمعو","ڇنڇر","آچر"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, dd MMMM, yyyy h:mm:ss tt",
        longDatePattern: "dddd, dd MMMM, yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["جنوري","فروري","مارچ","اپريل","مٔي","جون","جولاءِ","آگست","ستمبر","آکتوبر","نومبر","ڊسمبر",""],
        monthNames: ["جنوري","فروري","مارچ","اپريل","مٔي","جون","جولاءِ","آگست","ستمبر","آکتوبر","نومبر","ڊسمبر",""],
        pmDesignator: "PM",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["سو","اڱ","ار","خم","جم","ڇن","آچ"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM, yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
