export const beneficiaryStep = {
    personalData: {
        name: '',
        email: '',
        hasSocialName: false,
        socialName: '',
        birthDate: '',
        sex: '',
        gender: '',
        naturalness: '',
        uf: '',
        ufList: [],
        nationality: 'Brasil',
        hasDeathInformation: false,
        deathDate: '',
        deathInfoDate: '',
        filiation1: '',
        filiation2: '',
    },
    document: {
        rg: '',
        issuer: '',
        uf: '',
        issueDate: '',
    },
    addressDefault: {
        cep: '',
        address: '',
        number: '',
        complement: '',
        district: '',
        city:'',
        uf: '',
        hasMailAddress: false,
        correspondenceType: '',
        hasDifferentAddress: false,
    },
    addressOptional: {
        cep: '',
        address: '',
        number: '',
        complement: '',
        referencePoint: '',
        district: '',
        city: '',
        uf: '',
    },
    contact: {
        phone1: '',
        phone2: '',
    }
}

// export const beneficiaryComplete = {

// }