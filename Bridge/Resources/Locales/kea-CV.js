Bridge.merge(new System.Globalization.CultureInfo("kea-CV", true), {
    englishName: "Kabuverdianu (Cabo Verde)",
    nativeName: "kabuverdianu (Kabu Verdi)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 1,
        percentNegativePattern: 1,
        currencySymbol: "​",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: "$",
        currencyGroupSeparator: " ",
        currencyNegativePattern: 8,
        currencyPositivePattern: 3,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ",",
        numberGroupSeparator: " ",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["dum","sig","ter","kua","kin","ses","sab"],
        abbreviatedMonthGenitiveNames: ["Jan","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Otu","Nuv","Diz",""],
        abbreviatedMonthNames: ["Jan","Feb","Mar","Abr","Mai","Jun","Jul","Ago","Set","Otu","Nuv","Diz",""],
        amDesignator: "am",
        dateSeparator: "/",
        dayNames: ["dumingu","sigunda-fera","tersa-fera","kuarta-fera","kinta-fera","sesta-fera","sabadu"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd, d 'di' MMMM 'di' yyyy HH:mm:ss",
        longDatePattern: "dddd, d 'di' MMMM 'di' yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d 'di' MMMM",
        monthGenitiveNames: ["Janeru","Febreru","Marsu","Abril","Maiu","Junhu","Julhu","Agostu","Setenbru","Otubru","Nuvenbru","Dizenbru",""],
        monthNames: ["Janeru","Febreru","Marsu","Abril","Maiu","Junhu","Julhu","Agostu","Setenbru","Otubru","Nuvenbru","Dizenbru",""],
        pmDesignator: "pm",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "d/M/yyyy",
        shortestDayNames: ["du","si","te","ku","ki","se","sa"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM 'di' yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
