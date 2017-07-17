Bridge.merge(new System.Globalization.CultureInfo("sd-Deva-IN", true), {
    englishName: "Sindhi (Devanagari, India)",
    nativeName: "सिन्धी (India)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "NaN",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-∞",
        positiveInfinitySymbol: "∞",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ".",
        percentGroupSeparator: ",",
        percentPositivePattern: 1,
        percentNegativePattern: 0,
        currencySymbol: "₹",
        currencyGroupSizes: [3],
        currencyDecimalDigits: 2,
        currencyDecimalSeparator: ".",
        currencyGroupSeparator: ",",
        currencyNegativePattern: 1,
        currencyPositivePattern: 0,
        numberGroupSizes: [3],
        numberDecimalDigits: 2,
        numberDecimalSeparator: ".",
        numberGroupSeparator: ",",
        numberNegativePattern: 1
    }),

    dateTimeFormat: Bridge.merge(new System.Globalization.DateTimeFormatInfo(), {
        abbreviatedDayNames: ["आचर","सवमर","ङरव","रब","ख़मयस","जम","छनछर"],
        abbreviatedMonthGenitiveNames: ["जनवरय","फ़बरवरय","मारच","परयल","मय","जवन","वलाय","आगसट","सयपटमबर","आटवबर","नववमबर","डसमबर",""],
        abbreviatedMonthNames: ["जनवरय","फ़बरवरय","मारच","परयल","मय","जवन","वलाय","आगसट","सयपटमबर","आटवबर","नववमबर","डसमबर",""],
        amDesignator: "",
        dateSeparator: "/",
        dayNames: ["आचर","सवमर","ङरव","रब","ख़मयस","जम","छनछर"],
        firstDayOfWeek: 0,
        fullDateTimePattern: "dd MMMM yyyy HH:mm:ss",
        longDatePattern: "dd MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "dd MMMM",
        monthGenitiveNames: ["जनवरय","फ़बरवरय","मारच","परयल","मय","जवन","वलाय","आगसट","सयपटमबर","आटवबर","नववमबर","डसमबर",""],
        monthNames: ["जनवरय","फ़बरवरय","मारच","परयल","मय","जवन","वलाय","आगसट","सयपटमबर","आटवबर","नववमबर","डसमबर",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["आ","स","ङ","र","ख़","ज","छ"],
        shortTimePattern: "H:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
