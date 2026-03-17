
const itFieldValues = {
    basicDetails: {
        finYear: '2021',
        age: '1',
        parentAge: '',
        regime: 'old'
    },
    incomeDetails: {
        grossIncome: 0,
        incomeFromInterest: 0,
        rentalIncome: 0,
        longTermCapitalGain: 0,
        otherIncome: 0,
    },
    deductions: {
        lifeInsurancePremium: 0,
        publicProvidentFund: 0,
        contributionProvidentFund: 0,
        fixedDeposit: 0,
        ELSS: 0,
        taxSavingInvestmentScheme: 0,
        otherSavingSchemes: 0,
        homeLoanPrincipal: 0,
        forSelfFamily: 0,
        preventiveCheckup: 0,
        forParentsBelow60Years: 0,
        forParentsAbove60Years: 0,
        educationalLoan80E: 0,
        interestHousingLoanSelfOccupied: 0,
        affordableHouse: 0,
        donation80G: 0,
        HRAExemption: 0,
        otherDeduction: 0,
        standardDeduction: 50000,
    },
    taxPaid: {
        tds: 0,
        advanceTax: 0,
        selfAssessmentTax: 0
    },
    total: {
        totalIncome: 0,
        totalDeductions: 0,
        totalTaxPaid: 0
    },
    oldResults: {
        grossIncome: 0,
        standardDeduction: 50000,
        totalDeduction: 0,
        taxableIncome: 0,
        taxPayable: 0,
        taxAlreadyPaid: 0,
        netTaxPayable: 0
    },
    newResults: {
        grossIncome: 0,
        totalDeduction: 0,
        taxableIncome: 0,
        taxPayable: 0,
        taxAlreadyPaid: 0,
        netTaxPayable: 0
    }
}

const itRegimeSlabs = ['old', 'new']
itRegimeSlabs['old'] = ['2021', '2022', '2023', '2024', '2025', '2026'];
itRegimeSlabs['old']['2021'] = {
    '1': {
      'label': '0 - 2.5',
      'percentage': 0,
      'default': 0,
      'range': [0,250000]
    },
    '2': {
      'label': '2.5 - 5',
      'percentage': 5,
      'default': 12500,
      'range': [250000, 500000]
    },
    '3': {
      'label': '5 - 10',
      'percentage': 20,
      'default': 100000,
      'range': [500000, 1000000]
    },
    '4': {
      'label': '10',
      'percentage': 30,
      'range': [1000000]
    }
}

itRegimeSlabs['old']['2022'] = {
    '1': {
      'label': '0 - 2.5',
      'percentage': 0,
      'default': 0,
      'range': [0,250000]
    },
    '2': {
      'label': '2.5 - 5',
      'percentage': 5,
      'default': 12500,
      'range': [250000, 500000]
    },
    '3': {
      'label': '5 - 10',
      'percentage': 20,
      'default': 100000,
      'range': [500000, 1000000]
    },
    '4': {
      'label': '10',
      'percentage': 30,
      'range': [1000000]
    }
}

itRegimeSlabs['old']['2023'] = {
    '1': {
      'label': '0 - 2.5',
      'percentage': 0,
      'default': 0,
      'range': [0,250000]
    },
    '2': {
      'label': '2.5 - 5',
      'percentage': 5,
      'default': 12500,
      'range': [250000, 500000]
    },
    '3': {
      'label': '5 - 10',
      'percentage': 20,
      'default': 100000,
      'range': [500000, 1000000]
    },
    '4': {
      'label': '10',
      'percentage': 30,
      'range': [1000000]
    }
}

itRegimeSlabs['old']['2024'] = {
    '1': {
      'label': '0 - 2.5',
      'percentage': 0,
      'default': 0,
      'range': [0,250000]
    },
    '2': {
      'label': '2.5 - 3',
      'percentage': 5,
      'default': 12500,
      'range': [250000, 500000]
    },
    '3': {
      'label': '5 - 10',
      'percentage': 20,
      'default': 100000,
      'range': [500000, 1000000]
    },
    '4': {
      'label': '10',
      'percentage': 30,
      'range': [1000000]
    }
}

itRegimeSlabs['old']['2025'] = {
  '1': {
    'label': '0 - 2.5',
    'percentage': 0,
    'default': 0,
    'range': [0,250000]
  },
  '2': {
    'label': '2.5 - 3',
    'percentage': 5,
    'default': 12500,
    'range': [250000, 500000]
  },
  '3': {
    'label': '5 - 10',
    'percentage': 20,
    'default': 100000,
    'range': [500000, 1000000]
  },
  '4': {
    'label': '10',
    'percentage': 30,
    'range': [1000000]
  }
  }

itRegimeSlabs['old']['2026'] = {
  '1': {
    label: '0 - 2.5',
    percentage: 0,
    default: 0,
    range: [0, 250000]
  },
  '2': {
    label: '2.5 - 5',
    percentage: 5,
    default: 12500,
    range: [250000, 500000]
  },
  '3': {
    label: '5 - 10',
    percentage: 20,
    default: 100000,
    range: [500000, 1000000]
  },
  '4': {
    label: 'Above 10',
    percentage: 30,
    range: [1000000]
  }
};

itRegimeSlabs['new'] = ['2021', '2022', '2023', '2024', '2025', '2026'];

itRegimeSlabs['new']['2021'] = {
    '1': {
      'label': '0 - 2.5',
      'percentage': 0,
      'default': 0,
      'range': [0,250000]
    },
    '2': {
      'label': '2.5 - 5',
      'percentage': 5,
      'default': 12500,
      'range': [250000, 500000]
    },
    '3': {
      'label': '5 - 7.5',
      'percentage': 10,
      'default': 25000,
      'range': [500000, 750000]
    },
    '4': {
      'label': '7.5 - 10',
      'percentage': 15,
      'default': 37500,
      'range': [750000, 1000000]
    },
    '5': {
      'label': '10 - 12.5',
      'percentage': 20,
      'default': 50000,
      'range': [1000000, 1250000]
    },
    '6': {
      'percentage': 25,
      'label': '12.5 - 15',
      'default': 62500,
      'range': [1250000, 1500000]
    },
    '7': {
      'label': '15',
      'percentage': 30,
      'range': [1500000]
    }
}

itRegimeSlabs['new']['2022'] = {
    '1': {
      'label': '0 - 2.5',
      'percentage': 0,
      'default': 0,
      'range': [0,250000]
    },
    '2': {
      'label': '2.5 - 5',
      'percentage': 5,
      'default': 12500,
      'range': [250000, 500000]
    },
    '3': {
      'label': '5 - 7.5',
      'percentage': 10,
      'default': 25000,
      'range': [500000, 750000]
    },
    '4': {
      'label': '7.5 - 10',
      'percentage': 15,
      'default': 37500,
      'range': [750000, 1000000]
    },
    '5': {
      'label': '10 - 12.5',
      'percentage': 20,
      'default': 50000,
      'range': [1000000, 1250000]
    },
    '6': {
      'percentage': 25,
      'label': '12.5 - 15',
      'default': 62500,
      'range': [1250000, 1500000]
    },
    '7': {
      'label': '15',
      'percentage': 30,
      'range': [1500000]
    }
}

itRegimeSlabs['new']['2023'] = {
    '1': {
      'label': '0 - 3',
      'percentage': 0,
      'default': 0,
      'range': [0,300000]
    },
    '2': {
      'label': '3 - 6',
      'percentage': 5,
      'default': 15000,
      'range': [300000, 600000]
    },
    '3': {
      'percentage': 10,
      'label': '6 - 9',
      'default': 30000,
      'range': [600000, 900000]
    },
    '4': {
      'percentage': 15,
      'label': '9 - 12',
      'default': 45000,
      'range': [900000, 1200000]
    },
    '5': {
      'percentage': 20,
      'label': '12 - 15',
      'default': 60000,
      'range': [1200000, 1500000]
    },
    '6': {
      'percentage': 30,
      'label': '15',
      'range': [1500000]
    }
}

itRegimeSlabs['new']['2024'] = {
    '1': {
      'label': '0 - 3',
      'percentage': 0,
      'default': 0,
      'range': [0,300000]
    },
    '2': {
      'label': '3 - 7',
      'percentage': 5,
      'default': 20000,
      'range': [300000, 700000]
    },
    '3': {
      'percentage': 10,
      'label': '7 - 10',
      'default': 30000,
      'range': [700000, 1000000]
    },
    '4': {
      'percentage': 15,
      'label': '10 - 12',
      'default': 30000,
      'range': [1000000, 1200000]
    },
    '5': {
      'percentage': 20,
      'label': '12 - 15',
      'default': 60000,
      'range': [1200000, 1500000]
    },
    '6': {
      'percentage': 30,
      'label': '15',
      'default': 80000,
      'range': [1500000]
    }
}

itRegimeSlabs['new']['2025'] = {
  '1': {
    'label': '0 - 4',
    'percentage': 0,
    'default': 0,
    'range': [0, 400000]
  },
  '2': {
    'label': '4 - 8',
    'percentage': 5,
    'default': 20000,
    'range': [400000, 800000]
  },
  '3': {
    'label': '8 - 12',
    'percentage': 10,
    'default': 40000,
    'range': [800000, 1200000]
  },
  '4': {
    'label': '12 - 16',
    'percentage': 15,
    'default': 60000,
    'range': [1200000, 1600000]
  },
  '5': {
    'label': '16 - 20',
    'percentage': 20,
    'default': 80000,
    'range': [1600000, 2000000]
  },
  '6': {
    'label': '20 - 24',
    'percentage': 25,
    'default': 100000,
    'range': [2000000, 2400000]
  },
  '7': {
    'label': 'Above 24',
    'percentage': 30,
    'range': [2400000]
  }
};
itRegimeSlabs['new']['2026'] = {
  '1': {
    label: '0 - 4',
    percentage: 0,
    default: 0,
    range: [0, 400000]
  },
  '2': {
    label: '4 - 8',
    percentage: 5,
    default: 20000,
    range: [400000, 800000]
  },
  '3': {
    label: '8 - 12',
    percentage: 10,
    default: 40000,
    range: [800000, 1200000]
  },
  '4': {
    label: '12 - 16',
    percentage: 15,
    default: 60000,
    range: [1200000, 1600000]
  },
  '5': {
    label: '16 - 20',
    percentage: 20,
    default: 80000,
    range: [1600000, 2000000]
  },
  '6': {
    label: '20 - 24',
    percentage: 25,
    default: 100000,
    range: [2000000, 2400000]
  },
  '7': {
    label: 'Above 24',
    percentage: 30,
    range: [2400000]
  }
};


const standardDeduction = {
  'old': {
    '2021': 50000,
    '2022': 50000,
    '2023': 50000,
    '2024': 50000,
    '2025': 50000,
    '2026': 50000
  },
  'new': {
    '2021': 0,
    '2022': 0,
    '2023': 50000,
    '2024': 75000,
    '2025': 75000,
    '2026': 75000
  }
}

const rebate87A = {
  'old': {
    '2021': {
      max: 500000,
      releif: 12500,
    },
    '2022': {
      max: 500000,
      releif: 12500,
    },
    '2023': {
      max: 500000,
      releif: 12500,
    },
    '2024': {
      max: 500000,
      releif: 12500,
    },
    '2025': {
      max: 500000,
      releif: 12500,
    },
    '2026': {
      max: 500000,
      releif: 12500,
    }
  },
  'new': {
    '2021': {
      max: 500000,
      releif: 12500,
    },
    '2022': {
      max: 500000,
      releif: 12500,
    },
    '2023': {
      max: 700000,
      releif: 25000,
    },
    '2024': {
      max: 700000,
      releif: 25000,
    },
    '2025': {
      max: 700000,
      releif: 25000,
    },
    '2026': {
      max: 1200000,
      releif: 60000 
    }
  }
}

const maximumAllowed = {
  'under80c': {
    keys: ['lifeInsurancePremium', 'publicProvidentFund', 'contributionProvidentFund', 'fixedDeposit', 'ELSS', 'taxSavingInvestmentScheme', 'otherSavingSchemes', 'homeLoanPrincipal'],
    limit: 150000
  },
  'under80d': {
    '1': {
      keys: ['forSelfFamily', 'preventiveCheckup', 'forParentsBelow60Years', 'forParentsAbove60Years'],
      limit: 25000
    },
    '2': {
      keys: ['forSelfFamily', 'preventiveCheckup', 'forParentsBelow60Years', 'forParentsAbove60Years'],
      limit: 50000
    },
    '3': {
      keys: ['forSelfFamily', 'preventiveCheckup', 'forParentsBelow60Years', 'forParentsAbove60Years'],
      limit: 50000
    }
  },
  'under80e': {
    keys: ['educationalLoan80E'],
    limit: 999999999
  },
  'under24b': {
    keys: ['interestHousingLoanSelfOccupied'],
    limit: 200000
  },
  'under80eea': {
    keys: ['affordableHouse'],
    limit: 150000 //remaining of under24b
  },
  'under80g': {
    keys: ['donation80G'],
    limit: 999999999
  },
  'HRA': {
    keys: ['HRAExemption'],
    limit: 100000 //remaining of under24b
  }
}

const cess = {
  "old": {
    "1": 4,
    "2": 4,
    "3": 4,
    "4": 4,
    "5": 4,
    "6": 4
  },
  "new": {
    "1": 4,
    "2": 4,
    "3": 4,
    "4": 4,
    "5": 4,
    "6": 4
  }
}

const sumOfObjectValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

const inrFormat = (number) => {
    return number.toLocaleString('en-IN', {
        maximumFractionDigits: 2,
        style: 'currency',
        currency: 'INR'
    });
}

function numberWithCommas(number) {
    return number.toLocaleString('en-IN', {
        maximumFractionDigits: 2
    });
}

const inrToNumberFormat = (money) => {
    return money ? Number( (money.slice(1,money.length)).replaceAll(',','') ) : 0
}

const priceToNumberFormat = (price) => {
    return price ? Number( price.replaceAll(',','') ) : 0
}

function updateItFieldWithValue(targetKey, targetValue) {
    Object.keys(itFieldValues).forEach((key) => {
        if(itFieldValues[key].hasOwnProperty(targetKey)) {
            itFieldValues[key][targetKey] = priceToNumberFormat(targetValue)
            console.log(itFieldValues)
        }
    })
}


function calcITResultsV2() {
  

    //alert(itFieldValues.incomeDetails.grossIncome);
    itFieldValues.oldResults.standardDeduction = standardDeduction['old'][itFieldValues.basicDetails.finYear]
    itFieldValues.deductions.standardDeduction = itFieldValues.oldResults.standardDeduction

    itFieldValues.total.totalIncome = sumOfObjectValues(itFieldValues.incomeDetails)
    itFieldValues.total.totalDeductions = sumOfObjectValues(itFieldValues.deductions)
    itFieldValues.total.totalTaxPaid = sumOfObjectValues(itFieldValues.taxPaid)

    

    var under80c = 0
    var under80cITEM = maximumAllowed['under80c']
    under80cITEM.keys.forEach(function(key) {
      under80c += itFieldValues.deductions[key]
    })
    under80c = under80c > under80cITEM.limit ? under80cITEM.limit : under80c

    
    var under80d = 0
    var under80dITEM = maximumAllowed['under80d'][itFieldValues.basicDetails.age]
    under80dITEM.keys.forEach(function(key) {
      under80d += itFieldValues.deductions[key]
    })
    under80d = under80d > under80dITEM.limit ? under80dITEM.limit : under80d


    var under80e = 0
    var under80eITEM = maximumAllowed['under80e']
    under80eITEM.keys.forEach(function(key) {
      under80e += itFieldValues.deductions[key]
    })
    under80e = under80e > under80eITEM.limit ? under80eITEM.limit : under80e


    var under24b = 0
    var under24bITEM = maximumAllowed['under24b']
    under24bITEM.keys.forEach(function(key) {
      under24b += itFieldValues.deductions[key]
    })
    under24b = under24b > under24bITEM.limit ? under24bITEM.limit : under24b


    var under80eea = 0
    var under80eeaITEM = maximumAllowed['under80eea']
    under80eeaITEM.keys.forEach(function(key) {
      under80eea += itFieldValues.deductions[key]
    })
    under80eea = under80eea > under80eeaITEM.limit ? under80eeaITEM.limit : under80eea


    var under80g = 0
    var under80gITEM = maximumAllowed['under80g']
    // under80gITEM.limit = itFieldValues.total.totalIncome * 10 / 100

    under80gITEM.keys.forEach(function(key) {
      under80g += itFieldValues.deductions[key]
    })
    under80g = under80g > under80gITEM.limit ? under80gITEM.limit : under80g


    var underHRA = 0
    var underHRAITEM = maximumAllowed['HRA']
    underHRAITEM.keys.forEach(function(key) {
      underHRA += itFieldValues.deductions[key]
    })
    underHRA = underHRA > underHRAITEM.limit ? underHRAITEM.limit : underHRA

    itFieldValues.total.totalDeductions = itFieldValues.deductions.otherDeduction + itFieldValues.deductions.standardDeduction + under80c + under80d + under80e + under24b + under80eea + under80g + underHRA


    itFieldValues.oldResults.grossIncome = itFieldValues.total.totalIncome
    itFieldValues.oldResults.totalDeduction = itFieldValues.total.totalDeductions
    itFieldValues.oldResults.taxableIncome = (itFieldValues.oldResults.grossIncome - itFieldValues.oldResults.totalDeduction)
    itFieldValues.oldResults.taxAlreadyPaid = itFieldValues.total.totalTaxPaid

    if(itFieldValues.incomeDetails.rentalIncome) {
      itFieldValues.oldResults.taxableIncome = itFieldValues.oldResults.taxableIncome - (itFieldValues.incomeDetails.rentalIncome * 30 / 100)
    }
    
    itFieldValues.oldResults.taxPayable = 0

    for(var key in itRegimeSlabs['old'][itFieldValues.basicDetails.finYear]) {
        var slab = itRegimeSlabs['old'][itFieldValues.basicDetails.finYear][key]
        var tax = 0

        if(itFieldValues.oldResults.taxableIncome > slab.range[1]) {
          tax += slab.default

        } else if(itFieldValues.oldResults.taxableIncome >= slab.range[0] && itFieldValues.oldResults.taxableIncome <= slab.range[1]) {
          tax += (itFieldValues.oldResults.taxableIncome - slab.range[0]) * slab.percentage / 100

        } else if(slab.range.length === 1 && itFieldValues.oldResults.taxableIncome > slab.range[0]) {
          tax += (itFieldValues.oldResults.taxableIncome - slab.range[0]) * slab.percentage / 100
        }
        itFieldValues.oldResults.taxPayable += tax
    }

    const thisRebate = rebate87A['old'][itFieldValues.basicDetails.finYear]
    if(itFieldValues.oldResults.taxableIncome <= thisRebate.max) {
      itFieldValues.oldResults.taxPayable = (itFieldValues.oldResults.taxPayable <= thisRebate.releif) ? 0 : itFieldValues.oldResults.taxPayable - thisRebate.releif
    }

    itFieldValues.oldResults.taxPayable += itFieldValues.oldResults.taxPayable * cess['old'][itFieldValues.basicDetails.age] / 100
    itFieldValues.oldResults.netTaxPayable = itFieldValues.oldResults.taxPayable - itFieldValues.oldResults.taxAlreadyPaid

    /**var oldResArray = [
        Math.round((itFieldValues.oldResults.standardDeduction/itFieldValues.oldResults.grossIncome)*100), 
        Math.round((itFieldValues.oldResults.totalDeduction/itFieldValues.oldResults.grossIncome)*100), 
        Math.round((itFieldValues.oldResults.taxableIncome/itFieldValues.oldResults.grossIncome)*100), 
        Math.round((itFieldValues.oldResults.taxPayable/itFieldValues.oldResults.grossIncome)*100), 
        Math.round((itFieldValues.oldResults.taxAlreadyPaid/itFieldValues.oldResults.grossIncome)*100), 
        Math.round((itFieldValues.oldResults.netTaxPayable/itFieldValues.oldResults.grossIncome)*100)
    ]**/

    var total = Number(itFieldValues.oldResults.grossIncome) + Number(itFieldValues.oldResults.totalDeduction) + Number(itFieldValues.oldResults.taxableIncome) + Number(itFieldValues.oldResults.taxPayable) + Number(itFieldValues.oldResults.taxAlreadyPaid) + Number(itFieldValues.oldResults.netTaxPayable);
    

    if(Math.round((itFieldValues.oldResults.grossIncome/total)*100)<='0'){  var totalvala1 ='0';  }else{
        var totalvala1 = Math.round((itFieldValues.oldResults.grossIncome/total)*100)  }
    if(itFieldValues.incomeDetails.grossIncome=='0'){
      var totalvala11 ='0';
    }else{
      if(Math.round((itFieldValues.oldResults.standardDeduction/total)*100)<='0'){  var totalvala11 ='0';  }else{
          var totalvala11 = Math.round((itFieldValues.oldResults.standardDeduction/total)*100)  }
    }
    if(Math.round((itFieldValues.oldResults.totalDeduction/total)*100)<='0'){  var totalvala2 ='0';  }else{
        var totalvala2 = Math.round((itFieldValues.oldResults.totalDeduction/total)*100)  }    
    if(Math.round((itFieldValues.oldResults.taxableIncome/total)*100)<='0'){  var totalvala3 ='0';  }else{
        var totalvala3 = Math.round((itFieldValues.oldResults.taxableIncome/total)*100)  }
    if(Math.round((itFieldValues.oldResults.taxPayable/total)*100)<='0'){  var totalvala4 ='0';  }else{
        var totalvala4 = Math.round((itFieldValues.oldResults.taxPayable/total)*100)  } 
    if(Math.round((itFieldValues.oldResults.taxAlreadyPaid/total)*100)<='0'){  var totalvala5 ='0';  }else{
        var totalvala5 = Math.round((itFieldValues.oldResults.taxAlreadyPaid/total)*100)  }
    if(Math.round((itFieldValues.oldResults.netTaxPayable/total)*100)<='0'){  var totalvala6 = '0';  }else{
        var totalvala6 = Math.round((itFieldValues.oldResults.netTaxPayable/total)*100)  } 
    

    var oldResArray = [
        totalvala1,  
        totalvala11,  
        totalvala2, 
        totalvala3, 
        totalvala4, 
        totalvala5, 
        totalvala6
    ]

    var oldResArray1 = '[' + oldResArray + ']';
    //alert(oldResArray1);
    var colora1 = '#ff0000';
    var colora2 = '#ffb000';
    var colora3 = '#acff00';
    var colora4 = '#02e399';
    var colora5 = '#00b5ff';
    var colora6 = '#3600ff';
    var colora7 = '#ff00e2';

    generatePieGraph('oldRegimeChart', {
        values: [Number(totalvala1),Number(totalvala11),Number(totalvala2),Number(totalvala3),Number(totalvala4),Number(totalvala5),Number(totalvala6)],
        //values: [50,25,25,25,1,1,1],
        colors: [ colora1, colora2, colora3, colora4, colora5, colora6, colora7],
        animation: true, // Takes boolean value & default behavious is false
        animationSpeed: 2, // Time in miliisecond & default animation speed is 20ms
        fillTextData: false, // Takes boolean value & text is not generate by default 
        fillTextColor: '#fff', // For Text colour & default colour is #fff (White)
        fillTextAlign: 1.30, // for alignment of inner text position i.e. higher values gives closer view to center & default text alignment is 1.85 i.e closer to center
        fillTextPosition: 'inner', // 'horizontal' or 'vertical' or 'inner' & default text position is 'horizontal' position i.e. outside the canvas
        doughnutHoleSize: 50, // Percentage of doughnut size within the canvas & default doughnut size is null
        doughnutHoleColor: '#fff', // For doughnut colour & default colour is #fff (White)
        offset: 0, // Offeset between two segments & default value is null
        pie: 'normal', // if the pie graph is single stroke then we will add the object key as "stroke" & default is normal as simple as pie graph
        isStrokePie: { 
            stroke: 20, // Define the stroke of pie graph. It takes number value & default value is 20
            overlayStroke: true, // Define the background stroke within pie graph. It takes boolean value & default value is false
            overlayStrokeColor: '#eee', // Define the background stroke colour within pie graph & default value is #eee (Grey)
            strokeStartEndPoints: 'Yes', // Define the start and end point of pie graph & default value is No
            strokeAnimation: true, // Used for animation. It takes boolean value & default value is true
            strokeAnimationSpeed: 40, // Used for animation speed in miliisecond. It takes number & default value is 20ms
            fontSize: '60px', // Used to define text font size & default value is 60px
            textAlignement: 'center', // Used for position of text within the pie graph & default value is 'center'
            fontFamily: 'Arial', // Define the text font family & the default value is 'Arial'
            fontWeight: 'bold' //  Define the font weight of the text & the default value is 'bold'
        }
    });

    $(".old-regime-results .grossIncomeTxt").text(numberWithCommas(Number(itFieldValues.oldResults.grossIncome)))
    if(itFieldValues.incomeDetails.grossIncome=='0'){
      $(".old-regime-results .standardDeductionTxt").text('0')
    }else{
      $(".old-regime-results .standardDeductionTxt").text(numberWithCommas(Number(itFieldValues.oldResults.standardDeduction)))
    }
    $(".old-regime-results .totalDeductionTxt").text(numberWithCommas(Number(itFieldValues.oldResults.totalDeduction)))

    $old_taxPaybale = itFieldValues.total.totalIncome - itFieldValues.oldResults.totalDeduction
    // alert($old_taxPaybale)

    
    if(itFieldValues.oldResults.taxableIncome<0){
      $(".old-regime-results .taxableIncomeTxt").text('0')
    }else{
      $(".old-regime-results .taxableIncomeTxt").text(numberWithCommas(Number($old_taxPaybale)))
    }
    if(itFieldValues.oldResults.taxPayable<0){
      $(".old-regime-results .taxPayableTxt").text('0')
    }else{
      $(".old-regime-results .taxPayableTxt").text(numberWithCommas(Number(itFieldValues.oldResults.taxPayable)))
    }
    
    $(".old-regime-results .taxAlreadyPaidTxt").text(numberWithCommas(Number(itFieldValues.oldResults.taxAlreadyPaid)))
    $old_netPaybale = itFieldValues.oldResults.taxPayable - itFieldValues.oldResults.taxAlreadyPaid

    if($old_netPaybale<0){
      $(".old-regime-results .netTaxPayableTxt").text('0')
    }else{
      $(".old-regime-results .netTaxPayableTxt").text(numberWithCommas(Number($old_netPaybale)))
    }
    // $(".old-regime-results .taxAlreadyPaidTxt").text(numberWithCommas(Number(itFieldValues.oldResults.taxAlreadyPaid)))
    // $(".old-regime-results .netTaxPayableTxt").text(numberWithCommas(Number(itFieldValues.oldResults.netTaxPayable)))



    var newRegimeStdDeduction = standardDeduction['new'][itFieldValues.basicDetails.finYear]
    itFieldValues.newResults.grossIncome = itFieldValues.total.totalIncome
    itFieldValues.newResults.totalDeduction = (itFieldValues.total.totalDeductions - itFieldValues.deductions.standardDeduction) + newRegimeStdDeduction
    itFieldValues.newResults.taxableIncome = itFieldValues.newResults.grossIncome - newRegimeStdDeduction
    itFieldValues.newResults.taxAlreadyPaid = itFieldValues.total.totalTaxPaid

    if(itFieldValues.incomeDetails.rentalIncome) {
      itFieldValues.newResults.taxableIncome = itFieldValues.newResults.taxableIncome - (itFieldValues.incomeDetails.rentalIncome * 30 / 100)
    }

    itFieldValues.newResults.taxPayable = 0


    for(var key in itRegimeSlabs['new'][itFieldValues.basicDetails.finYear]) {
        var slab = itRegimeSlabs['new'][itFieldValues.basicDetails.finYear][key]
        var tax = 0
        console.log("slab ", slab)

        if(itFieldValues.newResults.taxableIncome > slab.range[1]) {
          tax += slab.default

        } else if(itFieldValues.newResults.taxableIncome >= slab.range[0] && itFieldValues.newResults.taxableIncome <= slab.range[1]) {
          tax += (itFieldValues.newResults.taxableIncome - slab.range[0]) * slab.percentage / 100

        } else if(slab.range.length === 1 && itFieldValues.newResults.taxableIncome > slab.range[0]) {
          tax += (itFieldValues.newResults.taxableIncome - slab.range[0]) * slab.percentage / 100
        }

        itFieldValues.newResults.taxPayable += tax
        console.log("tax ", tax)
    }

    const thisNewRebate = rebate87A['new'][itFieldValues.basicDetails.finYear]
    if(itFieldValues.newResults.taxableIncome <= thisNewRebate.max) {
      itFieldValues.newResults.taxPayable = (itFieldValues.newResults.taxPayable <= thisNewRebate.releif) ? 0 : itFieldValues.newResults.taxPayable - thisNewRebate.releif
    }

    itFieldValues.newResults.taxPayable += itFieldValues.newResults.taxPayable * cess['new'][itFieldValues.basicDetails.age] / 100
    itFieldValues.newResults.netTaxPayable = itFieldValues.newResults.taxPayable - itFieldValues.newResults.taxAlreadyPaid

    //alert(Number(itFieldValues.newResults.grossIncome)+Number(itFieldValues.newResults.totalDeduction)+Number(itFieldValues.newResults.taxableIncome)+Number(itFieldValues.newResults.taxPayable)+Number(itFieldValues.newResults.taxAlreadyPaid)+Number(itFieldValues.newResults.netTaxPayable));
    var total = Number(itFieldValues.newResults.grossIncome) + Number(itFieldValues.newResults.totalDeduction) + Number(itFieldValues.newResults.taxableIncome) + Number(itFieldValues.newResults.taxPayable) + Number(itFieldValues.newResults.taxAlreadyPaid) + Number(itFieldValues.newResults.netTaxPayable);
    
    
    if(Math.round((itFieldValues.newResults.grossIncome/total)*100)=='0'){  var totalval1 ='0';  }else{
        var totalval1 = Math.round((itFieldValues.newResults.grossIncome/total)*100)  }
    if(Math.round((itFieldValues.newResults.totalDeduction/total)*100)=='0'){  var totalval2 ='0';  }else{
        var totalval2 = Math.round((itFieldValues.newResults.totalDeduction/total)*100)  }    
    if(Math.round((itFieldValues.newResults.taxableIncome/total)*100)=='0'){  var totalval3 ='0';  }else{
        var totalval3 = Math.round((itFieldValues.newResults.taxableIncome/total)*100)  }
    if(Math.round((itFieldValues.newResults.taxPayable/total)*100)=='0'){  var totalval4 ='0';  }else{
        var totalval4 = Math.round((itFieldValues.newResults.taxPayable/total)*100)  } 
    if(Math.round((itFieldValues.newResults.taxAlreadyPaid/total)*100)=='0'){  var totalval5 ='0';  }else{
        var totalval5 = Math.round((itFieldValues.newResults.taxAlreadyPaid/total)*100)  }
    if(Math.round((itFieldValues.newResults.netTaxPayable/total)*100)=='0'){  var totalval6 = '0';  }else{
        var totalval6 = Math.round((itFieldValues.newResults.netTaxPayable/total)*100)  } 

        if(itFieldValues.basicDetails.finYear=='2025'){
          if(itFieldValues.newResults.grossIncome<='1275000'){
            itFieldValues.newResults.netTaxPayable=0
            itFieldValues.newResults.taxPayable=0
            totalval4=0
            totalval6=0
        }
        
        
          if(itFieldValues.newResults.grossIncome>'1275000' && itFieldValues.newResults.grossIncome<='1345588'){
          
            marginal_relief = (itFieldValues.newResults.taxableIncome - 1200000) > itFieldValues.newResults.taxPayable ? 0 : -(itFieldValues.newResults.taxPayable - (itFieldValues.newResults.taxableIncome - 1200000));

            cess_final = (itFieldValues.newResults.taxPayable + marginal_relief) * 0.04;
        
            
            itFieldValues.newResults.netTaxPayable=(itFieldValues.newResults.taxPayable + marginal_relief + cess_final)
            itFieldValues.newResults.taxPayable=(itFieldValues.newResults.taxPayable + marginal_relief + cess_final)
            
        }
      }
      if(itFieldValues.basicDetails.finYear=='2026'){
          if(itFieldValues.newResults.grossIncome<='1275000'){
            itFieldValues.newResults.netTaxPayable=0
            itFieldValues.newResults.taxPayable=0
            totalval4=0
            totalval6=0
        }
        
        
          if(itFieldValues.newResults.grossIncome>'1275000' && itFieldValues.newResults.grossIncome<='1345588'){
          
            marginal_relief = (itFieldValues.newResults.taxableIncome - 1200000) > itFieldValues.newResults.taxPayable ? 0 : -(itFieldValues.newResults.taxPayable - (itFieldValues.newResults.taxableIncome - 1200000));

            cess_final = (itFieldValues.newResults.taxPayable + marginal_relief) * 0.04;
        
            
            itFieldValues.newResults.netTaxPayable=(itFieldValues.newResults.taxPayable + marginal_relief + cess_final)
            itFieldValues.newResults.taxPayable=(itFieldValues.newResults.taxPayable + marginal_relief + cess_final)
            
        }
      }
/*
        if(totalval1<=1275000){
          totalval3=0
          totalval4=0

        }*/

    var newResArray = [
        totalval1,  
        totalval2, 
        totalval3, 
        totalval4, 
        totalval5, 
        totalval6
    ]

    //var newResArray1 = '[' + newResArray + ']';
    //alert(empty(totalval6));
    var color1 = '#9c1b1b';
    var color2 = '#ffb000';
    var color3 = '#73921f';
    var color4 = '#25a27f';
    var color5 = '#2a4999';
    var color6 = '#8c2ea4';

    generatePieGraph('newRegimeChart', {
        //values: newResArray1,
        values: [Number(totalval1),Number(totalval2),Number(totalval3),Number(totalval4),Number(totalval5),Number(totalval6)],
        //values: [54,1,46,1,1,1],
        colors: [ color1, color2, color3, color4, color5, color6],
        animation: true, // Takes boolean value & default behavious is false
        animationSpeed: 2, // Time in miliisecond & default animation speed is 20ms
        fillTextData: false, // Takes boolean value & text is not generate by default 
        fillTextColor: '#fff', // For Text colour & default colour is #fff (White)
        fillTextAlign: 1.30, // for alignment of inner text position i.e. higher values gives closer view to center & default text alignment is 1.85 i.e closer to center
        fillTextPosition: 'inner', // 'horizontal' or 'vertical' or 'inner' & default text position is 'horizontal' position i.e. outside the canvas
        doughnutHoleSize: 50, // Percentage of doughnut size within the canvas & default doughnut size is null
        doughnutHoleColor: '#fff', // For doughnut colour & default colour is #fff (White)
        offset: 0, // Offeset between two segments & default value is null
        pie: 'normal', // if the pie graph is single stroke then we will add the object key as "stroke" & default is normal as simple as pie graph
        isStrokePie: { 
            stroke: 20, // Define the stroke of pie graph. It takes number value & default value is 20
            overlayStroke: true, // Define the background stroke within pie graph. It takes boolean value & default value is false
            overlayStrokeColor: '#eee', // Define the background stroke colour within pie graph & default value is #eee (Grey)
            strokeStartEndPoints: 'Yes', // Define the start and end point of pie graph & default value is No
            strokeAnimation: true, // Used for animation. It takes boolean value & default value is true
            strokeAnimationSpeed: 40, // Used for animation speed in miliisecond. It takes number & default value is 20ms
            fontSize: '60px', // Used to define text font size & default value is 60px
            textAlignement: 'center', // Used for position of text within the pie graph & default value is 'center'
            fontFamily: 'Arial', // Define the text font family & the default value is 'Arial'
            fontWeight: 'bold' //  Define the font weight of the text & the default value is 'bold'
        }
    });

    $(".new-regime-results .grossIncomeTxt").text(numberWithCommas(Number(itFieldValues.newResults.grossIncome)))
    if(itFieldValues.incomeDetails.grossIncome<0){
      $(".new-regime-results .standardDeductionTxt").text('0')
    }else{
      $(".new-regime-results .standardDeductionTxt").text(numberWithCommas(Number(newRegimeStdDeduction)))
    }
    $(".new-regime-results .totalDeductionTxt").text(numberWithCommas(Number(itFieldValues.newResults.totalDeduction)))
    $new_taxPaybale = itFieldValues.newResults.grossIncome - itFieldValues.newResults.totalDeduction

    if(itFieldValues.newResults.taxableIncome<0){
      $(".new-regime-results .taxableIncomeTxt").text('0')
    }else{
      $(".new-regime-results .taxableIncomeTxt").text(numberWithCommas(Number($new_taxPaybale)))
    }
    if(itFieldValues.newResults.taxPayable<0){
      $(".new-regime-results .taxPayableTxt").text('0')
    }else{
      $(".new-regime-results .taxPayableTxt").text(numberWithCommas(Number(itFieldValues.newResults.taxPayable)))
    }
    $(".new-regime-results .taxAlreadyPaidTxt").text(numberWithCommas(Number(itFieldValues.newResults.taxAlreadyPaid)))
    $new_netPaybale = itFieldValues.newResults.taxPayable - itFieldValues.newResults.taxAlreadyPaid
    // alert($new_netPaybale)
    // $(".new-regime-results .netTaxPayableTxt").text(numberWithCommas(Number($new_netPaybale)))
    if($new_netPaybale<0){
      $(".new-regime-results .netTaxPayableTxt").text('0')
    }else{
      $(".new-regime-results .netTaxPayableTxt").text(numberWithCommas(Number($new_netPaybale)))
    }
}

function initializeDefaultCharts() {
  generatePieGraph('newRegimeChart', {
      values: [15, 50, 20, 85, 30, 10],
      colors: ['#9c1b1b', '#946918', '#73921f', '#25a27f', '#2a4999', '#8c2ea4'],
      animation: true,
      animationSpeed: 2,
      fillTextData: false,
      fillTextColor: '#fff',
      fillTextAlign: 1.30,
      fillTextPosition: 'inner',
      doughnutHoleSize: 50,
      doughnutHoleColor: '#fff',
      offset: 1,
      pie: 'normal',
      isStrokePie: { 
          stroke: 20,
          overlayStroke: true,
          overlayStrokeColor: '#eee',
          strokeStartEndPoints: 'Yes',
          strokeAnimation: true,
          strokeAnimationSpeed: 40,
          fontSize: '60px',
          textAlignement: 'center',
          fontFamily: 'Arial',
          fontWeight: 'bold'
      }
  });

  generatePieGraph('oldRegimeChart', {
      values: [3, 32, 68, 7, 6, 1],
      colors: ['#ffb000', '#acff00', '#02e399', '#00b5ff', '#3600ff', '#ff00e2'],
      animation: true,
      animationSpeed: 2,
      fillTextData: false,
      fillTextColor: '#fff',
      fillTextAlign: 1.30,
      fillTextPosition: 'inner',
      doughnutHoleSize: 50,
      doughnutHoleColor: '#fff',
      offset: 1,
      pie: 'normal',
      isStrokePie: { 
          stroke: 20,
          overlayStroke: true,
          overlayStrokeColor: '#eee',
          strokeStartEndPoints: 'Yes',
          strokeAnimation: true,
          strokeAnimationSpeed: 40,
          fontSize: '60px',
          textAlignement: 'center',
          fontFamily: 'Arial',
          fontWeight: 'bold'
      }
  });
}

$(document).ready(function() {
  const sumOfObjectValues = obj => Object.values(obj).reduce((a, b) => a + b, 0);

  const inrFormat = (number) => {
      return number.toLocaleString('en-IN', {
          maximumFractionDigits: 2,
          style: 'currency',
          currency: 'INR'
      });
  };

  function numberWithCommas(number) {
      return number.toLocaleString('en-IN', {
          maximumFractionDigits: 2
      });
  }

  const inrToNumberFormat = (money) => {
      return money ? Number((money.slice(1, money.length)).replaceAll(',', '')) : 0;
  };

  const priceToNumberFormat = (price) => {
      return price ? Number(price.replaceAll(',', '')) : 0;
  };

  function updateItFieldWithValue(targetKey, targetValue) {
      Object.keys(itFieldValues).forEach((key) => {
          if (itFieldValues[key].hasOwnProperty(targetKey)) {
              itFieldValues[key][targetKey] = priceToNumberFormat(targetValue);
          }
      });
  }

  $("#form").accordionForm({
      mode: 'accordion',
      stepNumbers: false,
      autoButtonsNextClass: 'btn btn-primary float-right',
      autoButtonsPrevClass: 'btn btn-light',
      autoButtonsShowSubmit: false
  });

  function initializeDefaultCharts() {
      generatePieGraph('newRegimeChart', {
          values: [15, 50, 20, 85, 30, 10],
          colors: ['#9c1b1b', '#946918', '#73921f', '#25a27f', '#2a4999', '#8c2ea4'],
          animation: true,
          animationSpeed: 2,
          fillTextData: false,
          fillTextColor: '#fff',
          fillTextAlign: 1.30,
          fillTextPosition: 'inner',
          doughnutHoleSize: 50,
          doughnutHoleColor: '#fff',
          offset: 1,
          pie: 'normal',
          isStrokePie: { 
              stroke: 20,
              overlayStroke: true,
              overlayStrokeColor: '#eee',
              strokeStartEndPoints: 'Yes',
              strokeAnimation: true,
              strokeAnimationSpeed: 40,
              fontSize: '60px',
              textAlignement: 'center',
              fontFamily: 'Arial',
              fontWeight: 'bold'
          }
      });

      // Initialize old regime chart
      generatePieGraph('oldRegimeChart', {
          values: [3, 32, 68, 7, 6, 1],
          colors: ['#ffb000', '#acff00', '#02e399', '#00b5ff', '#3600ff', '#ff00e2'],
          animation: true,
          animationSpeed: 2,
          fillTextData: false,
          fillTextColor: '#fff',
          fillTextAlign: 1.30,
          fillTextPosition: 'inner',
          doughnutHoleSize: 50,
          doughnutHoleColor: '#fff',
          offset: 1,
          pie: 'normal',
          isStrokePie: { 
              stroke: 20,
              overlayStroke: true,
              overlayStrokeColor: '#eee',
              strokeStartEndPoints: 'Yes',
              strokeAnimation: true,
              strokeAnimationSpeed: 40,
              fontSize: '60px',
              textAlignement: 'center',
              fontFamily: 'Arial',
              fontWeight: 'bold'
          }
      });
  }


  initializeDefaultCharts();

  $("#form").on("change", ".list-group select", function() {
      var uiThis = $(this);
      var name = uiThis.attr('name');
      var value = uiThis.val();
      updateItFieldWithValue(name, value);
      
      if (name !== 'age' && name !== 'finYear') {
          calcITResultsV2();
      }
  });

  $("#form").on("change", ".list-group input[type='radio']", function() {
      var name = $(this).attr('name');
      var value = $(`input[name="${name}"]:checked`).val();
      updateItFieldWithValue(name, value);
      
      if (name !== 'age') {
          calcITResultsV2();
      }
  });

  $("#form").on("change keyup", ".list-group input[type='text']", function() {
      var uiThis = $(this);
      var name = uiThis.attr('name');
      var value = uiThis.val();
      
      var numValue = priceToNumberFormat(value);
      if(numValue.toString().length > 9) {
          $(this).val('');
      } else {
          $(this).val(numberWithCommas(Number(numValue)));
      }
      
      updateItFieldWithValue(name, value);
      calcITResultsV2();
  });

  $("#form").on("change keyup", ".list-group input[type='text'].eitherInputbox", function(e) {
      var target = $(this).attr('data-target');
      $('#'+target).val('');
      calcITResultsV2();
  });

  $(".itFormSubmitBtn").on("click", function(e) {
      e.preventDefault();
      calcITResultsV2(); 
          
      // var oldResArray = [
      //     Math.round((itFieldValues.oldResults.standardDeduction/itFieldValues.oldResults.grossIncome)*100), 
      //     Math.round((itFieldValues.oldResults.totalDeduction/itFieldValues.oldResults.grossIncome)*100), 
      //     Math.round((itFieldValues.oldResults.taxableIncome/itFieldValues.oldResults.grossIncome)*100), 
      //     Math.round((itFieldValues.oldResults.taxPayable/itFieldValues.oldResults.grossIncome)*100), 
      //     Math.round((itFieldValues.oldResults.taxAlreadyPaid/itFieldValues.oldResults.grossIncome)*100), 
      //     Math.round((itFieldValues.oldResults.netTaxPayable/itFieldValues.oldResults.grossIncome)*100)
      // ];

      generatePieGraph('oldRegimeChart', {
          values: [
    Number(totalvala1),
    Number(totalvala11),
    Number(totalvala2),
    Number(totalvala3),
    Number(totalvala4),
    Number(totalvala5),
    Number(totalvala6)
  ],
          colors: ['#ffb000', '#acff00', '#02e399', '#00b5ff', '#3600ff', '#ff00e2'],
          animation: true,
          animationSpeed: 2,
          fillTextData: false,
          fillTextColor: '#fff',
          fillTextAlign: 1.30,
          fillTextPosition: 'inner',
          doughnutHoleSize: 50,
          doughnutHoleColor: '#fff',
          offset: 1,
          pie: 'normal',
          isStrokePie: { 
              stroke: 20,
              overlayStroke: true,
              overlayStrokeColor: '#eee',
              strokeStartEndPoints: 'Yes',
              strokeAnimation: true,
              strokeAnimationSpeed: 40,
              fontSize: '60px',
              textAlignement: 'center',
              fontFamily: 'Arial',
              fontWeight: 'bold'
          }
      });

      var newRegimeStdDeduction = standardDeduction['new'][itFieldValues.basicDetails.finYear];
      var newResArray = [
          Math.round((newRegimeStdDeduction/itFieldValues.newResults.grossIncome)*100), 
          Math.round((itFieldValues.newResults.totalDeduction/itFieldValues.newResults.grossIncome)*100), 
          Math.round((itFieldValues.newResults.taxableIncome/itFieldValues.newResults.grossIncome)*100), 
          Math.round((itFieldValues.newResults.taxPayable/itFieldValues.newResults.grossIncome)*100), 
          Math.round((itFieldValues.newResults.taxAlreadyPaid/itFieldValues.newResults.grossIncome)*100), 
          Math.round((itFieldValues.newResults.netTaxPayable/itFieldValues.newResults.grossIncome)*100)
      ];

      generatePieGraph('newRegimeChart', {
          values: newResArray,
          colors: ['#9c1b1b', '#946918', '#73921f', '#25a27f', '#2a4999', '#8c2ea4'],
          animation: true,
          animationSpeed: 2,
          fillTextData: false,
          fillTextColor: '#fff',
          fillTextAlign: 1.30,
          fillTextPosition: 'inner',
          doughnutHoleSize: 50,
          doughnutHoleColor: '#fff',
          offset: 1,
          pie: 'normal',
          isStrokePie: { 
              stroke: 20,
              overlayStroke: true,
              overlayStrokeColor: '#eee',
              strokeStartEndPoints: 'Yes',
              strokeAnimation: true,
              strokeAnimationSpeed: 40,
              fontSize: '60px',
              textAlignement: 'center',
              fontFamily: 'Arial',
              fontWeight: 'bold'
          }
      });
  });
});