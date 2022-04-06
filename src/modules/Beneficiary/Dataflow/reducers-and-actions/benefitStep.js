const benefitStep = {
    benefitData: {
        product: '',
        susep: '',
        proposalNumber: '',
        proposalDate: '',
        salesStructure: '',
        taxationType: '',
        has13thMonth: false,
    },
    paymentData: {
        bookingValue: '',
        durationTime: '',
        paymentStartDate: '',
        paymentEndDate: '',
        benefitType: '',
        incomeType: '',
        quotaValue: '',
    },
    agreementData: {
        agreementCode: '',
        companyName1: '',
        branchCode: '',
        companyName2: '',
        hasAdvance: false,
        advanceValue: '',
    },
    conditionsData: {
        IRPF: {
        hasIRPFIsention: false,
        isLifeTime: false,
        deadline: '',
        reason: '',
        cid: '',
        description: '',
        },
        paymentSuspension: {
            hasPaymentSuspension: false,
            reason: '',
            cid: '',
            description: '',
        }
    },
    courtPensionData: {
        hasCourtPension: false,
        previdencyRegistration: '',
        pensionistRegistration: '',
        pensionistName: '',
        pensionType: '',
        incomeType: '',
        modality: '',
        judicialOffice: '',
        discountFactor: '',
        pensionStart: '',
        pensionEnd: '',


    }
}

export default benefitStep