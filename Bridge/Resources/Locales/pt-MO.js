Bridge.merge(new System.Globalization.CultureInfo("pt-MO", true), {
    englishName: "Portuguese (Macao SAR)",
    nativeName: "português (RAE de Macau)",

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
        currencySymbol: "MOP$",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ",",
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
        abbreviatedDayNames: ["domingo","segunda","terça","quarta","quinta","sexta","sábado"],
        abbreviatedMonthGenitiveNames: ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez",""],
        abbreviatedMonthNames: ["jan","fev","mar","abr","mai","jun","jul","ago","set","out","nov","dez",""],
        amDesignator: "a.m.",
        dateSeparator: "/",
        dayNames: ["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dddd, d 'de' MMMM 'de' yyyy h:mm:ss tt",
        longDatePattern: "dddd, d 'de' MMMM 'de' yyyy",
        longTimePattern: "h:mm:ss tt",
        monthDayPattern: "d 'de' MMMM",
        monthGenitiveNames: ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro",""],
        monthNames: ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro",""],
        pmDesignator: "p.m.",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["dom","seg","ter","qua","qui","sex","sáb"],
        shortTimePattern: "h:mm tt",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM 'de' yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
