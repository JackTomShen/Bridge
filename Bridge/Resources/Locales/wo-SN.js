Bridge.merge(new System.Globalization.CultureInfo("wo-SN", true), {
    englishName: "Wolof (Senegal)",
    nativeName: "Wolof (Senegaal)",

    numberFormat: Bridge.merge(new System.Globalization.NumberFormatInfo(), {
        nanSymbol: "Non Numérique",
        negativeSign: "-",
        positiveSign: "+",
        negativeInfinitySymbol: "-Infini",
        positiveInfinitySymbol: "+Infini",
        percentSymbol: "%",
        percentGroupSizes: [3],
        percentDecimalDigits: 2,
        percentDecimalSeparator: ",",
        percentGroupSeparator: " ",
        percentPositivePattern: 0,
        percentNegativePattern: 0,
        currencySymbol: "CFA",
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
        abbreviatedDayNames: ["Dib.","Alt.","Tal.","Àll.","Alx.","Àjj.","Gaa."],
        abbreviatedMonthGenitiveNames: ["Sam.","Few.","Maa","Awr.","Me","Suwe","Sul.","Ut","Sept.","Okt.","Noow.","Des.",""],
        abbreviatedMonthNames: ["Sam.","Few.","Maa","Awr.","Me","Suw","Sul.","Ut","Sept.","Okt.","Now.","Des.",""],
        amDesignator: "",
        dateSeparator: "/",
        dayNames: ["Dibéer","Altine","Talaata","Àllarba","Alxames","Àjjuma","Gaawu"],
        firstDayOfWeek: 1,
        fullDateTimePattern: "dddd d MMMM yyyy HH:mm:ss",
        longDatePattern: "dddd d MMMM yyyy",
        longTimePattern: "HH:mm:ss",
        monthDayPattern: "d MMMM",
        monthGenitiveNames: ["Samwiye","Fewriye","Maars","Awril","Me","Suwe","Sullet","Ut","Septàmbar","Oktoobar","Noowàmbar","Deesàmbar",""],
        monthNames: ["Samwiye","Fewriye","Maars","Awril","Me","Suwe","Sullet","Ut","Septàmbar","Oktoobar","Noowàmbar","Desàmbar",""],
        pmDesignator: "",
        rfc1123: "ddd, dd MMM yyyy HH':'mm':'ss 'GMT'",
        shortDatePattern: "dd/MM/yyyy",
        shortestDayNames: ["Di","Al","Ta","Àl","Ax","Àj","Ga"],
        shortTimePattern: "HH:mm",
        sortableDateTimePattern: "yyyy'-'MM'-'dd'T'HH':'mm':'ss",
        sortableDateTimePattern1: "yyyy'-'MM'-'dd",
        timeSeparator: ":",
        universalSortableDateTimePattern: "yyyy'-'MM'-'dd HH':'mm':'ss'Z'",
        yearMonthPattern: "MMMM yyyy",
        roundtripFormat: "yyyy'-'MM'-'dd'T'HH':'mm':'ss.fffffffzzz"
    })
});
